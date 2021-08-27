import { useEffect, useState } from "react";
import Form from "./common/form";
import brandIcons from "./icons/brand_icons";
import Input from "./common/input";
import Label from "./common/label";
import PrimaryButton from "./common/primary_button";
import RadioButton from "./common/radio_button";
import SelectInput from "./common/select_input";

const PaymentForm = ({ onSubmit, submitText, payment, errors, ...props }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("monthly");
  const [startingDate, setStartingDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [icon, setIcon] = useState("");

  const handleSubmit = () => {
    onSubmit?.({
      name,
      price: Number(price),
      type,
      startingDate,
      icon,
    });
  };

  useEffect(() => {
    if (!payment) return;
    setName(payment.name);
    setPrice(payment.price);
    setType(payment.type || "monthly");
    setStartingDate(
      payment.startingDate
        ? new Date(payment.startingDate).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0]
    );
    setIcon(payment.icon);
  }, [payment]);

  return (
    <Form>
      <Label forId="name">Subscription Name</Label>
      <Input
        placeholder="Subscription name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors?.name}
      ></Input>
      <Label forId="price">Price</Label>
      <Input
        type="number"
        id="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        error={errors?.price}
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
        error={errors?.startingDate}
      ></Input>
      <PrimaryButton
        type="submit"
        onClick={handleSubmit}
        className="!mt-8 text-2xl"
      >
        {submitText || "add"}
      </PrimaryButton>
    </Form>
  );
};

export default PaymentForm;
