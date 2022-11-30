import { useState, useEffect } from "react";
import styles from "./style.module.css";
console.log("CreateAccount running");

function CreateAccount(props) {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        username: "Username is taken.",
        httpreq: "Http request failed."
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Check if username is taken
        const Http = new XMLHttpRequest();
        const url = "https://whatstheword-backend.herokuapp.com/polls/" + uname.value + "/" + pass.value + "/" + "create_account/";
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
                if(Http.responseText === ("User created")) {
                    setIsSubmitted(true);
                }
                else{
                    console.log("username is taken");
                    setErrorMessages({name: "username", message: errors.username});
                }
            }
            else {
                console.log("HTTP request error");
                setErrorMessages({name: "httpreq", message: errors.httpreq});
            }
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className={styles.error}>{errorMessages.message}</div>
        );

    // JSX code for create account form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("username")}
                </div>
                <div className={styles.inputContainer}>
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("httpreq")}
                </div>
                <div className={styles.buttonContainer}>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (

        <div>
            {isSubmitted ? <div>Account successfully created!</div> : renderForm}
        </div>

    );
}

export default CreateAccount;