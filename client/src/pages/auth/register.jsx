import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    userName: '',
    email: '',
    password: ''
}

function AuthRegister() {
    // console.log("AuthRegister rendered"); // Add this line to see if the component is rendering


    const [formData, setFormData] = useState(initialState)

    function onSubmit() {

    }

    return <div className="max-auto w-full max-w-md space-y-6">
        <div className="text-cent">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
            <p>Already have an account
                <Link className="font-medium ml-2 text-primary hover:underline"
                    to='/auth/login'
                >
                    Login
                </Link>
            </p>
        </div>
        <CommonForm
            formControls={registerFormControls}
            buttonText={"Create Account"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
        />
    </div>
}

export default AuthRegister;