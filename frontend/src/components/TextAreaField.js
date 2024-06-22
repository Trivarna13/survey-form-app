function TextAreaField({ label, name, value, onChange, error }) {
	return (
		<div>
			<label className="block text-sm font-medium leading-6 text-gray-900">
				{label}
			</label>
			<div className="mt-2">
				<textarea
					name={name}
					value={value}
					onChange={onChange}
					className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 sm:text-sm sm:leading-6"
				/>
				{error && <p className="text-red-500">{error}</p>}
			</div>
		</div>
	);
}

export default TextAreaField;
