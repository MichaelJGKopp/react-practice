export default function Input({ label, id, value, ...props }) {
  return (
    <div style={{ position: "relative", height: props.invalid ? "auto" : "" }}>
      <label style={{ color: props.invalid ? "#ff9800" : "" }} htmlFor={id}>
        {label}
      </label>
      <input
        style={{
          color: props.invalid ? "#ff9800" : "",
          borderColor: props.invalid ? "#ff9800" : "",
          width: "100%" // Ensure consistent width
        }}
        type="number"
        id={id}
        value={value}
        onChange={(e) => {
          props.onChange(id, Number(e.target.value));
        }}
      />
      {props.invalid && (
        <div style={{ 
          color: "#ff9800",
          marginTop: "0.5rem",
          position: "absolute", // Position error message absolutely
          fontSize: "0.75rem", // Smaller font size for error
        }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}
