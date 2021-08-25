import { SaveIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Form from "./common/form";
import IconText from "./common/icon_text";
import Input from "./common/input";
import Label from "./common/label";
import PrimaryButton from "./common/primary_button";
import RadioButton from "./common/radio_button";

const SettingsForm = ({ onSubmit, settings, ...props }) => {
  const [notification, setNotification] = useState(true);
  const [currency, setCurrency] = useState("");
  const [notificationOffset, setNotificationOffset] = useState("");

  const handleSubmit = () => {
    onSubmit?.({
      notification,
      currency,
      notificationOffset: Number(notificationOffset),
    });
  };

  useEffect(() => {
    if (!settings) return;
    setNotification(settings.notification);
    setCurrency(settings.currency);
    setNotificationOffset(settings.notificationOffset);
  }, [settings]);

  return (
    <Form>
      <Label>Preffered Currency</Label>
      <Input
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      ></Input>
      <Label>Notifications</Label>
      <RadioButton
        value={notification}
        onChange={(val) => setNotification(val)}
        options={[
          { label: "On", value: true },
          { label: "Off", value: false },
        ]}
      ></RadioButton>
      <Label>Notification Offset</Label>
      <Input
        type="number"
        value={notificationOffset}
        onChange={(e) => setNotificationOffset(e.target.value)}
      ></Input>
      <PrimaryButton type="submit" onClick={handleSubmit}>
        Save
      </PrimaryButton>
    </Form>
  );
};

export default SettingsForm;
