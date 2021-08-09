import { useState } from "react";
import { post } from "../lib/api";
import Form from "./form";
import Input from "./input";
import Label from "./label";
import PrimaryButton from "./primary_button";
import RadioInput from "./radio_input";

const PaymentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [startingDate, setStartingDate] = useState("");

  const handleSubmit = () => {
    post("/user/payments", { name, price: Number(price), type, startingDate });
    onSubmit?.({ name, price: Number(price), type, startingDate });
  };
  return (
    <Form>
      <Label forId="name">Subscription Name</Label>
      <Input
        placeholder="Subscription name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Label forId="price">Price</Label>
      <Input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></Input>
      <Label>Subscription Type</Label>
      <div className="flex flex-row space-x-4">
        <RadioInput
          name="type"
          value="monthly"
          onChange={(e) => setType(e.target.value)}
        >
          Monthly
        </RadioInput>
        <RadioInput
          name="type"
          value="annual"
          onChange={(e) => setType(e.target.value)}
        >
          Annual
        </RadioInput>
      </div>
      <Label forId="startingDate">Starting Date</Label>
      <Input
        type="date"
        id="startingDate"
        value={startingDate}
        onChange={(e) => setStartingDate(e.target.value)}
      ></Input>
      <PrimaryButton type="submit" onClick={handleSubmit}>
        Add
      </PrimaryButton>
    </Form>
  );
};

export default PaymentForm;
