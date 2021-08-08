import { useContext } from "react";
import { Redirect } from "react-router-dom";
import {signInWithGoogle} from "./firebase";
import { AuthContext } from "./AuthProvider"; 
// If first of all login component is opened then login button appears because user is null initially
//  then when the user logs in then through signInWithGoogle function i.e. provider function which help us to sign 
// with google will be called we can login from any google account
// when the user will be logged in then user details will be send to App.js by setting the state user and 
// then the App.js will be re-rendered then the user with values displayName and email goes to /login component 
// because that login component was originally opened and now it will be redirected to "/home" component  
// there when the user comes with displayName and email then it will be shown on the Home component 
// if a user tries to go to home page with user being null then it will be redirected to login page
// if a user comes logged in to the login page then it will be redirected to home page




let Login = ()=>{
    let value = useContext(AuthContext);
    console.log(value);

    return(
        <div>
            {value?<Redirect to="/home"/> : ""}

            <button onClick={signInWithGoogle} 
            className="btn btn-primary m-4">
                Login with google</button>
        </div>
    )
}
export default Login;