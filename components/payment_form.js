import { useState } from "react";
import Form from "./common/form";
import brandIcons from "./icons/brand_icons";
import Input from "./common/input";
import Label from "./common/label";
import PrimaryButton from "./common/primary_button";
import RadioButton from "./common/radio_button";
import SelectInput from "./common/select_input";

const PaymentForm = ({ onSubmit, submitText, ...props }) => {
  const [name, setName] = useState(props.name || "");
  const [price, setPrice] = useState(props.price || "");
  const [type, setType] = useState(props.type || "monthly");
  const [startingDate, setStartingDate] = useState(
    props.startingDate
      ? new Date(props.startingDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]
  );
  const [icon, setIcon] = useState(props.icon || "");

  const handleSubmit = () => {
    onSubmit?.({
      name,
      price: Number(price),
      type,
      startingDate,
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
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></Input>
      <Label>Subscription Type</Label>
      <RadioButton
        options={[
          { label: "Monthly", value: "monthly" },
          { label: "Annual", value: "annual" },
        ]}
        value={type}
        onChange={(val) => setType(val)}
      ></RadioButton>
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
