export default function Input({ label, id, value, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        type="number"
        id={id}
        value={value}
        onChange={(e) => { props.onChange(Number(e.target.value)) }}
      />
    </div>
  );
}