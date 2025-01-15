import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  // console.log("AuthLogin rendered"); // Add this line to see if the component is rendering

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      // console.log(data);
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          className: "toast-success"
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="max-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          BuyHere
        </h1>
        <h1 className="text-2xl font-bold tracking-tight text-foreground mt-4">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Do not have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
        <p className="mt-4">
          Use the following credentials to log in as a test user:
        </p>
        <p className="mt-2">
          Email: jose@gmail.com
        </p>
        <p className="mt-2">
          Password: jose
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign in"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
