function SelectField({ label, name, value, onChange, error, options }) {
	return (
		<div>
			<label className="block text-sm font-medium leading-6 text-gray-900">
				{label}
			</label>
			<div className="mt-2">
				<select
					name={name}
					value={value}
					onChange={onChange}
					className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 sm:text-sm sm:leading-6"
				>
					<option value="">Select</option>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{error && <p className="text-red-500">{error}</p>}
			</div>
		</div>
	);
}

export default SelectField;
