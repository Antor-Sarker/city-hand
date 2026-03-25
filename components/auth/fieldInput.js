export default function FieldInput({
  field,
  isFocused,
  onFocus,
  onBlur,
  onChange,
  showPassword = false,
  setShowPassword = () => {},
}) {
  // input type
  const isPassword = field.name === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : field.type;

  return (
    <div>
      <label
        htmlFor={field.name}
        className={`block text-xs font-semibold mb-1.5 tracking-wide transition-colors duration-200 ${
          isFocused ? "text-red-700" : "text-gray-500"
        }`}
      >
        {field.label}
      </label>
      <div className="relative">
        <span
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
            isFocused ? "text-red-600" : "text-gray-400"
          }`}
        >
          {field.icon}
        </span>
        <input
          id={field.name}
          name={field.name}
          type={inputType}
          placeholder={field.placeholder}
          required
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          className={`w-full pl-11 py-3 text-sm text-gray-800 bg-gray-50 border rounded-xl outline-none transition-all duration-200 placeholder-gray-300 font-light ${
            isPassword ? "pr-16" : "pr-4"
          } ${
            isFocused
              ? "border-red-600 bg-white ring-4 ring-red-100"
              : "border-gray-200 hover:border-gray-300"
          }`}
        />

        {/* toggle show hide password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-red-700 transition-colors duration-200 cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
