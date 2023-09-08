import { useState } from "react";
import BillForm from "./components/BillForm";
import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import Form from "./components/Form";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [openForm, setOpenForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addNewFriendHandler = (friend) => {
    setFriendsList((friendsList) => [...friendsList, friend]);
    setOpenForm(false);
  };

  const selectionHandler = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((prevSelected) =>
      prevSelected?.id === friend.id ? null : friend
    );
    setOpenForm(false);
  };
  console.log(selectedFriend);

  const splitBillHandler = (value) => {
    setFriendsList((friendsList) =>
      friendsList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="container mx-auto max-w-4xl mt-20  h-11 grid grid-cols-5 gap-x-8">
      <div className="col-start-1 col-span-2  w-full ">
        <div className="flex flex-col gap-2">
          <FriendsList
            friendsList={friendsList}
            onSelection={selectionHandler}
            selectedFriend={selectedFriend}
          />
          {openForm && <Form onAddFriend={addNewFriendHandler} />}
          <div className="flex flex-row justify-end w-full ">
            <Button
              onClick={() => {
                setOpenForm((openForm) => !openForm);
                setSelectedFriend(null);
              }}
              width="40"
            >
              {openForm ? "close" : "Add friend"}
            </Button>
          </div>
        </div>
      </div>
      {selectedFriend && (
        <div className="col-start-3 col-span-3  w-full">
          <BillForm
            selectedFriend={selectedFriend}
            onSplitHandler={splitBillHandler}
          />
        </div>
      )}
    </div>
  );
}

export default App;
