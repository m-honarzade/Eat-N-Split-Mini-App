import Button from "./Button";
import Card from "./Card";

const FriendItem = ({ friendItem, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friendItem.id;

  return (
    <Card bgColor={isSelected ? "bg-[#fff4e6]" : ""}>
      <li className="flex flex-row justify-between items-center   ">
        <div className="flex flex-row gap-x-4  justify-center">
          <img
            src={friendItem.image}
            alt={friendItem.name}
            className="rounded-full"
          />
          <div className="">
            <h3 className="font-semibold">{friendItem.name}</h3>
            <p
              className={`text-sm ${
                friendItem.balance > 0
                  ? "text-[#66a80f]"
                  : friendItem.balance < 0
                  ? "text-[#e03131]"
                  : ""
              }`}
            >
              {friendItem.balance === 0
                ? `You and ${friendItem.name} are even.`
                : friendItem.balance > 0
                ? ` ${friendItem.name} ows you ${friendItem.balance}$.`
                : `you ows ${friendItem.name} ${Math.abs(
                    friendItem.balance
                  )}$.`}
            </p>
          </div>
        </div>
        <Button onClick={() => onSelection(friendItem)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </Card>
  );
};

export default FriendItem;
