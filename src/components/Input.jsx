function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
}) {
  return (
    <div className="nivara-input-group">
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;