import { LogoutIcon, RefreshIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import Avatar from "../../components/common/avatar";
import Button from "../../components/common/button";
import BreadCrumb from "../../components/common/crumb";
import Form from "../../components/common/form";
import IconText from "../../components/common/icon_text";
import Input from "../../components/common/input";
import Label from "../../components/common/label";
import PrimaryButton from "../../components/common/primary_button";
import Layout from "../../components/layout";
import SettingsForm from "../../components/settings_form";
import UserContext from "../../components/user_context";
import { put, remove } from "../../lib/api";
import { ToastContainer, toast } from "react-toastify";

const Settings = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    remove("/session").then(() => {
      setUser(undefined);
      router.push("/");
    });
  };

  const saveSettings = (settings) => {
    put("/user/settings", settings)
      .then(() => {
        setUser((prev) => ({ ...prev, settings }));
        toast("User settings saved!");
      })
      .catch(console.error);
  };
  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <BreadCrumb
          links={[{ name: "User", href: "/" }, { name: "Settings" }]}
        ></BreadCrumb>
      </div>
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl my-4 text-gray-800 font-semibold">Account</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col justify-center items-center">
            <Avatar className="w-20 h-20"></Avatar>
            <div className="text-2xl text-gray-700 font-bold mt-2">
              {user?.username}
            </div>
            <div className="text-gray-500">#{user?.id}</div>
          </div>
          <Form>
            <Label>Username</Label>
            <Input placeholder={user?.username} disabled></Input>
            <Label>Email</Label>
            <Input type="email" placeholder={user?.email} disabled></Input>
          </Form>
        </div>
        <div className="flex items-center whitespace-nowrap my-4 mb-16">
          <div>
            <Button onClick={logoutUser}>
              <IconText icon={<LogoutIcon className="h-5 w-5"></LogoutIcon>}>
                Logout
              </IconText>
            </Button>
          </div>
          <div className="ml-auto md:ml-4">
            <PrimaryButton>
              <IconText icon={<RefreshIcon className="h-5 w-5"></RefreshIcon>}>
                Update Credentials
              </IconText>
            </PrimaryButton>
          </div>
        </div>
        <h2 className="text-3xl my-4 text-gray-800 font-semibold">
          Preferences
        </h2>
        <div className="mb-16">
          <SettingsForm
            settings={user?.settings}
            onSubmit={saveSettings}
          ></SettingsForm>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        theme="light"
        hideProgressBar
      ></ToastContainer>
    </Layout>
  );
};

export default Settings;
