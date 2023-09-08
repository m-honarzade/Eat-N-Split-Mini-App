const Button = ({ width, onClick, children, type }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-${
        width ? width : ""
      } bg-[#ffa94d;] hover:bg-[#ff922b]  rounded-md px-3 py-1 font-bold `}
    >
      {children}
    </button>
  );
};

export default Button;
