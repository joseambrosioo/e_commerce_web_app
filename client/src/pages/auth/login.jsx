import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
    email: '',
    password: ''
}

function AuthLogin() {
    // console.log("AuthLogin rendered"); // Add this line to see if the component is rendering


    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    function onSubmit(event) {
        event.preventDefault();

        dispatch(loginUser(formData)).then(data => {
            console.log(data);
        });
    }

    return <div className="max-auto w-full max-w-md space-y-6">
        <div className="text-cent">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
            <p className="mt-2">Do not have an account?
                <Link className="font-medium ml-2 text-primary hover:underline"
                    to='/auth/register'
                >
                    Register
                </Link>
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
}

export default AuthLogin;