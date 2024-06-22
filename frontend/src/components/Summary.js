import React from "react";

function Summary({ submittedData, additionalQuestions }) {
	return (
		<div className="w-full lg:w-1/2 px-6 shadow-lg ml-8 bg-white max-w-6xl rounded-lg py-12 mx-8 my-8 lg:px-8">
			<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
				Submitted Data
			</h2>
			<div className="space-y-10">
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Name:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.name}
					</div>
				</div>
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Email:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.email}
					</div>
				</div>
				<div>
					<div className="block text-sm font-medium leading-6 text-gray-900">
						Survey Topic:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.surveyTopic}
					</div>
				</div>
				{submittedData.surveyTopic === "Technology" && (
					<div>
						<div className="block text-sm font-medium leading-6 text-gray-900">
							Favorite Programming Language:
						</div>
						<div className="block mt-2 text-gray-700">
							{submittedData.favoriteProgrammingLanguage}
						</div>
						<div className="block mt-10 text-sm font-medium leading-6 text-gray-900">
							Years of Experience:
						</div>
						<div className="block mt-2 mb-2 text-gray-700">
							{submittedData.yearsOfExperience}
						</div>
					</div>
				)}
				{submittedData.surveyTopic === "Health" && (
					<div>
						<div className="block text-sm font-medium leading-6 text-gray-900">
							Exercise Frequency:
						</div>
						<div className="block mt-2 text-gray-700">
							{submittedData.exerciseFrequency}
						</div>
						<div className="block mt-10 text-sm font-medium leading-6 text-gray-900">
							Diet Preference:
						</div>
						<div className="block mt-2 mb-2 text-gray-700">
							{submittedData.dietPreference}
						</div>
					</div>
				)}
				{submittedData.surveyTopic === "Education" && (
					<div>
						<div className="block text-sm font-medium leading-6 text-gray-900">
							Highest Qualification:
						</div>
						<div className="block mt-2 text-gray-700">
							{submittedData.highestQualification}
						</div>
						<div className="block mt-10 text-sm font-medium leading-6 text-gray-900">
							Field of Study:
						</div>
						<div className="block mt-2 mb-2 text-gray-700">
							{submittedData.fieldOfStudy}
						</div>
					</div>
				)}
				<div>
					<div className="block mt-10 text-sm font-medium leading-6 text-gray-900">
						Feedback:
					</div>
					<div className="block mt-2 text-gray-700">
						{submittedData.feedback}
					</div>
				</div>
				{additionalQuestions && (
					<div>
						<h3 className="text-lg font-medium leading-9 tracking-tight text-gray-900">
							Additional Questions
						</h3>
						{additionalQuestions.map((question, index) => (
							<div key={index} className="mt-4">
								<div className="block text-sm font-medium leading-6 text-gray-900">
									{question.question}
								</div>
								<div className="block mt-2 text-gray-700">
									{
										submittedData[
											question.question
												.replace(/\s+/g, "")
												.toLowerCase()
										]
									}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Summary;
