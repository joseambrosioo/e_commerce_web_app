import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// Adjust the path if necessary
import { registerUser } from '@/store/auth-slice'; // Ensure this path is correct


const initialState = {
    userName: '',
    email: '',
    password: ''
}

function AuthRegister() {
    // console.log("AuthRegister rendered"); // Add this line to see if the component is rendering


    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        dispatch(registerUser(formData)).then((resultAction) => {
            if (registerUser.fulfilled.match(resultAction)) {
                navigate('/auth/login');
            } else {
                // Handle registration error (optional)
                console.error('Registration failed:', resultAction.payload);
            }
        }).catch((error) => {
            // Handle unexpected errors (optional)
            console.error('Unexpected error:', error);
        });
    }

    // function onSubmit(event) {
    //     event.preventDefault(); // Prevent default form submission
    //     console.log(formData); // Log form data to console
    // }


    console.log(formData);

    return <div className="max-auto w-full max-w-md space-y-6">
        <div className="text-cent">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
            <p className="mt-2">Already have an account?
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
