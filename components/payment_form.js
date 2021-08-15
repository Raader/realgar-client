import { useState } from "react";
import { post } from "../lib/api";
import Form from "./form";
import brandIcons from "./icons/brand_icons";
import Input from "./input";
import Label from "./label";
import PrimaryButton from "./primary_button";
import RadioInput from "./radio_input";
import SelectInput from "./select_input";

const PaymentForm = ({ onSubmit, submitText, ...props }) => {
  const [name, setName] = useState(props.name || "");
  const [price, setPrice] = useState(props.price || "");
  const [currency, setCurrency] = useState(props.currency || "USD");
  const [type, setType] = useState(props.type || "");
  const [startingDate, setStartingDate] = useState(
    props.startingDate
      ? new Date(props.startingDate).toISOString().split("T")[0]
      : ""
  );
  const [icon, setIcon] = useState(props.icon || "");

  const handleSubmit = () => {
    onSubmit?.({
      name,
      price: Number(price),
      type,
      startingDate,
      currency,
      icon,
    });
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
      <Label forId="currency">Currency</Label>
      <Input
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value.toUpperCase())}
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
      <Label>Icon</Label>
      <SelectInput
        options={Object.entries(brandIcons).map(([key, value]) => ({
          label: value,
          value: key,
        }))}
        onChange={(val) => setIcon(val)}
        value={icon}
      ></SelectInput>
      <Label forId="startingDate">Starting Date</Label>
      <Input
        type="date"
        id="startingDate"
        value={startingDate}
        onChange={(e) => setStartingDate(e.target.value)}
      ></Input>
      <PrimaryButton type="submit" onClick={handleSubmit}>
        {submitText || "add"}
      </PrimaryButton>
    </Form>
  );
};

export default PaymentForm;
