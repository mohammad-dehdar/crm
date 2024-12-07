function FormInput({ name, label, type, value, onChange }) {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="mb-1 text-sm font-medium">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="px-3 py-2 bg-white bg-opacity-20 border  border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50  placeholder-opacity-70"
          placeholder={label}
        />
      </div>
    );
  }
  
  export default FormInput;
  
  