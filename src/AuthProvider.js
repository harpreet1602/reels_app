import  { createContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebase";

export const AuthContext = createContext();
let AuthProvider = ({ children }) =>{

    let [ currentUser, setCurrentUser ] = useState(null);
    // banda abhi log in karega to true and jab karlega then false kardenge
    let [ loading, setLoading] = useState(true);


// jb user login ya logout pura karlega tab loading false hojaega

useEffect(()=>{

    // this works when login and logout is done
      let unsub =  auth.onAuthStateChanged( async (user)=>{
            // if login-> user info
            // if logout user = null
    
            if(user){
                let { displayName, email, uid, photoURl} =user;
    // displayName = user.displayName
    // email = user.email
    // uid = user.uid
    // destructuring concept
                // console.log(user);
                let docRef = firestore.collection("users").doc(uid);
                let document = await docRef.get();
    
                if(!document.exists)
                {
                    docRef.set({
                        displayName,
                        email,
                        photoURL,
                    });
                }
    
                setCurrentUser({ displayName, email, uid, phtotURL });
            }
            else{
                setCurrentUser(user);
            }
            setLoading(false);
        });

        return () => {
            unsub();
        };

    },[]);

    return(
        <AuthContext.Provider value = {currentUser}>
            
            {!loading && children }

        </AuthContext.Provider>

    );


};

export default AuthProvider;