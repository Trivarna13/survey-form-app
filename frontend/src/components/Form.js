import { useState, useEffect } from "react";
import axios from "axios";
import FormField from "./FormField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import Summary from "./Summary";
import { useFormValidation } from "../hooks/useFormValidation";

function Form() {
	const { formData, errors, handleChange, validate } = useFormValidation({
		name: "",
		email: "",
		surveyTopic: "",
		favoriteProgrammingLanguage: "",
		yearsOfExperience: "",
		exerciseFrequency: "",
		dietPreference: "",
		highestQualification: "",
		fieldOfStudy: "",
		feedback: "",
	});
	const [submittedData, setSubmittedData] = useState(null);

	const [additionalQuestions, setAdditionalQuestions] = useState([]);

	useEffect(() => {
		if (formData.surveyTopic) {
			axios
				.get(
					`http://localhost:5000/api/questions/${formData.surveyTopic.toLowerCase()}`
				)
				.then((response) => {
					setAdditionalQuestions(response.data);
				})
				.catch((error) => {
					console.error(
						"Error fetching additional questions:",
						error
					);
				});
		}
	}, [formData.surveyTopic]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length === 0) {
			setSubmittedData(formData);
		}
	};

	return (
		<div className="min-h-screen bg-indigo-200 flex items-center justify-center">
			<div className="flex min-h-full flex-1 flex-row justify-center">
				<div className="w-full lg:w-1/2 p-4 shadow-lg ml-8 bg-white max-w-6xl rounded-lg px-6 py-12 my-8 lg:px-8">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
						Survey Form
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<FormField
							label="Full Name"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							error={errors.name}
						/>
						<FormField
							label="Email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							error={errors.email}
						/>
						<SelectField
							label="Survey Topic"
							name="surveyTopic"
							value={formData.surveyTopic}
							onChange={handleChange}
							error={errors.surveyTopic}
							options={["Technology", "Health", "Education"]}
						/>

						{formData.surveyTopic === "Technology" && (
							<>
								<SelectField
									label="Favorite Programming Language"
									name="favoriteProgrammingLanguage"
									value={formData.favoriteProgrammingLanguage}
									onChange={handleChange}
									error={errors.favoriteProgrammingLanguage}
									options={[
										"JavaScript",
										"Python",
										"Java",
										"C#",
									]}
								/>
								<FormField
									label="Years of Experience"
									type="number"
									name="yearsOfExperience"
									value={formData.yearsOfExperience}
									onChange={handleChange}
									error={errors.yearsOfExperience}
								/>
							</>
						)}

						{formData.surveyTopic === "Health" && (
							<>
								<SelectField
									label="Exercise Frequency"
									name="exerciseFrequency"
									value={formData.exerciseFrequency}
									onChange={handleChange}
									error={errors.exerciseFrequency}
									options={[
										"Daily",
										"Weekly",
										"Monthly",
										"Rarely",
									]}
								/>
								<SelectField
									label="Diet Preference"
									name="dietPreference"
									value={formData.dietPreference}
									onChange={handleChange}
									error={errors.dietPreference}
									options={[
										"Vegetarian",
										"Vegan",
										"Non-Vegetarian",
									]}
								/>
							</>
						)}

						{formData.surveyTopic === "Education" && (
							<>
								<SelectField
									label="Highest Qualification"
									name="highestQualification"
									value={formData.highestQualification}
									onChange={handleChange}
									error={errors.highestQualification}
									options={[
										"High School",
										"Bachelor's",
										"Master's",
										"PhD",
									]}
								/>
								<FormField
									label="Field of Study"
									type="text"
									name="fieldOfStudy"
									value={formData.fieldOfStudy}
									onChange={handleChange}
									error={errors.fieldOfStudy}
								/>
							</>
						)}

						<TextAreaField
							label="Feedback"
							name="feedback"
							value={formData.feedback}
							onChange={handleChange}
							error={errors.feedback}
						/>
						<h3 className="text-lg font-medium leading-9 tracking-tight text-gray-900">
							Additional Questions:
						</h3>
						{additionalQuestions.map((question) => (
							<div key={question.id}>
								{question.type === "text" && (
									<FormField
										label={question.question}
										type="text"
										name={question.question
											.replace(/\s+/g, "")
											.toLowerCase()}
										value={
											formData[
												question.question
													.replace(/\s+/g, "")
													.toLowerCase()
											]
										}
										onChange={handleChange}
										error={
											errors[
												question.question
													.replace(/\s+/g, "")
													.toLowerCase()
											]
										}
									/>
								)}
								{question.type === "dropdown" && (
									<SelectField
										label={question.question}
										name={question.question
											.replace(/\s+/g, "")
											.toLowerCase()}
										value={
											formData[
												question.question
													.replace(/\s+/g, "")
													.toLowerCase()
											]
										}
										onChange={handleChange}
										error={
											errors[
												question.question
													.replace(/\s+/g, "")
													.toLowerCase()
											]
										}
										options={question.options}
									/>
								)}
								{question.type === "number" && (
									<FormField
										label={question.question}
										type="number"
										name={question.question
											.replace(/\s+/g, "")
											.toLowerCase()}
										value={
											formData[
												question.question
													.replace(/\s+/g, "")
													.toLowerCase()
											]
										}
										onChange={handleChange}
										error={
											errors[
												question.question
													.replace(/\s+/g, "")
													.toLowerCase()
											]
										}
									/>
								)}
							</div>
						))}

						<button
							type="submit"
							className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
						>
							Submit
						</button>
					</form>
				</div>
				{submittedData && (
					<Summary
						submittedData={submittedData}
						additionalQuestions={additionalQuestions}
					/>
				)}
			</div>
		</div>
	);
}

export default Form;
