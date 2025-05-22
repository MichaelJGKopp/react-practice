export default function Button({children, ...props}) {
  return (
    <button {...props} className="px-4 py-2 rounded font-semibold bg-amber-400 text-stone-900
    hover:bg-amber-500 transition duration-300 uppercase">
    {/*  "bg-amber-800 text-white font-semibold py-2 px-4  */}
    {/*  rounded hover:bg-amber-700 transition duration-300"> */}
      {children}
    </button>
  );
}