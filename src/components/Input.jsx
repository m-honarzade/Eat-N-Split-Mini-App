const Input = ({ disabled, value, onChange, children }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <label className="whitespace-nowrap">{children}</label>
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        type="text"
        className=" w-40 p-1 rounded-md border-[0.2px] border-[#ffe8cc] focus:border-[#ff922b] focus:outline-none"
      />
    </div>
  );
};

export default Input;
