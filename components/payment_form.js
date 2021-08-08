import Form from "./form";
import Input from "./input";
import Label from "./label";
import PrimaryButton from "./primary_button";
import RadioInput from "./radio_input";

const PaymentForm = () => {
  return (
    <Form>
      <Label forId="name">Subscription Name</Label>
      <Input placeholder="Subscription name" id="name"></Input>
      <Label forId="price">Price</Label>
      <Input type="number" id="price"></Input>
      <Label>Subscription Type</Label>
      <div className="flex flex-row space-x-4">
        <RadioInput name="type" value="monthly">
          Monthly
        </RadioInput>
        <RadioInput name="type" value="annual">
          Annual
        </RadioInput>
      </div>
      <PrimaryButton>Add</PrimaryButton>
    </Form>
  );
};

export default PaymentForm;
