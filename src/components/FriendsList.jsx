import FriendItem from "./FriendItem";

const FriendsList = ({ friendsList, onSelection, selectedFriend }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-4 ">
          {friendsList.map((friendItem) => (
            <FriendItem
              friendItem={friendItem}
              key={friendItem.id}
              onSelection={onSelection}
              selectedFriend={selectedFriend}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
