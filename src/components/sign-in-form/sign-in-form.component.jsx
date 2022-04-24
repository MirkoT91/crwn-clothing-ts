import { useState, useContext } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';
import Button  from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const { email, password } = formFields;

const { setCurrentUser } = useContext(UserContext);

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
}

const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const { user } = await signInAuthUserWithEmailAndPassword(email, password);
        setCurrentUser(user);
        resetFormFields();
    }
    catch(error) {
        switch(error.code) {
            case 'auth/wrong-password':
                alert('incorrect password');
                break;
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
            default:
                console.log(error);
        }
    }
}

const handleChange = (event) => {
    const {name, value} = event.target;
    
    setFormFields({...formFields, [name]: value});

}

    return (
        <div className="sign-up-container">
        <h2>Already have an account?</h2>
            <h1>Sign In with your email and password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label="Email"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                    
                />

                <FormInput
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                    
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;