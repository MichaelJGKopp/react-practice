export default function Input({ label, id, value, ...props }) {
  return (
    <div>
      <label style={{ color: props.invalid ? "#ff9800" : "" }} htmlFor={id}>
        {label}
      </label>
      <input
        style={{
          color: props.invalid ? "#ff9800" : "",
          borderColor: props.invalid ? "#ff9800" : "",
        }}
        type="number"
        id={id}
        value={value}
        onChange={(e) => {
          props.onChange(id, Number(e.target.value));
        }}
      />
      {props.invalid && (
        <div style={{ color: "#ff9800", marginTop: "0.5rem" }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}
