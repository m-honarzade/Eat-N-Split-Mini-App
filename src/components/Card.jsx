const Card = ({ bgColor, children }) => {
  return (
    <div className={`rounded-md ${bgColor} p-2 hover:bg-[#fff4e6]`}>
      {children}
    </div>
  );
};

export default Card;
