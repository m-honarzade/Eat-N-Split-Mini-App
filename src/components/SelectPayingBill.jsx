const SelectPayingBill = ({
  children,
  selectedFriend,
  whoIsPaying,
  setWhoIsPaying,
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <label>{children}</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        className="w-40 p-1 rounded-md border-[0.2px] border-[#ffe8cc] focus:border-[#ff922b] focus:outline-none"
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
    </div>
  );
};

export default SelectPayingBill;
