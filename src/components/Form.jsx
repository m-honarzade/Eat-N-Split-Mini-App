import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Form = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name || !img) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name: name,
      image: `${img}?=${id}`,
      balance: 0,
      id,
    };
    console.log(newFriend);
    console.log(newFriend.image);

    onAddFriend(newFriend);
    setName("");
    setImg("https://i.pravatar.cc/48");
  };
  return (
    <Card bgColor="bg-[#fff4e6]">
      <form className="flex flex-col gap-2 py-3">
        <Input value={name} onChange={(e) => setName(e.target.value)}>
          👭 Friend name
        </Input>
        <Input value={img} onChange={(e) => setImg(e.target.value)}>
          🖼 Image url
        </Input>
        <div className="flex flex-row justify-end w-full">
          <Button onClick={onSubmitHandler} width="40">
            ADD
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
