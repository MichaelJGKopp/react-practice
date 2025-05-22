export default function Input({ label, $invalid, ...props }) {
  // this first approach looks good if there is a lot of conditional styling
  // but if there is only one or two classes to add, it is better to use a ternary operator
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  if ($invalid) {
    labelClasses += " text-red-500";
  } else {
    labelClasses += " text-stone-400";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300
  ${$invalid ? "border-red-500" : ""}`}
        {...props}
      />
    </p>
  );
}
