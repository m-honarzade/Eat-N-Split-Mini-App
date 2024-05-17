import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import SelectPayingBill from "./SelectPayingBill";

const BillForm = ({ selectedFriend, onSplitHandler }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitHandler(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <Card bgColor="bg-[#fff4e6]">
      <form onSubmit={submitHandler} className="px-8 py-6">
        <h3 className="uppercase font-bold text-2xl mb-8">
          Split a bill with {selectedFriend.name}
        </h3>
        <div className="flex flex-col gap-3">
          <Input value={bill} onChange={(e) => setBill(+e.target.value)}>
            💰 Bill value
          </Input>
          <Input
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                +e.target.value > bill ? paidByUser : +e.target.value
              )
            }
          >
            🕴 Your expense
          </Input>
          <Input disabled="true" value={paidByFriend}>
            👫 {selectedFriend.name}'s expense
          </Input>
          <SelectPayingBill
            selectedFriend={selectedFriend}
            whoIsPaying={whoIsPaying}
            setWhoIsPaying={setWhoIsPaying}
          >
            🤑 who is paing the Bill?
          </SelectPayingBill>
          <div className="flex flex-row justify-end w-full">
            <Button onClick={submitHandler} width="40">
              Split Bill
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default BillForm;
