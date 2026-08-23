function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`nivara-button nivara-button-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;