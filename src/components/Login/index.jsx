import { useState, useEffect } from "react";
import styles from "./style.module.css";
import NavBar from "../NavBar"
import Game from "../Game"

console.log("login running");

function Login(props) {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //var isLoggedIn = false;

    const errors = {
        signin: "Sign in failed.",
        httpreq: "Http request failed."
    };


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:8000/polls/" + uname.value + "/" + pass.value + "/" + "sign_in/";
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
                if(Http.responseText === ("Sign in successful " + uname.value)) {
                    setIsSubmitted(true);
                    const user = {username: uname.value, password: pass.value}
                    props.parentCallback(user);
                }
                else{
                    console.log("sign in failed");
                    setErrorMessages({name: "signin", message: errors.signin});
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

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("signin")}
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
            {isSubmitted ? (<div>User is successfully logged in

                            </div>)
                : renderForm }
        </div>
    );
}

export default Login;