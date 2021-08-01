import {useEffect, useState} from "react";
import { firestore } from './firebase';
import Login from "./Login";
import Home from "./Home";
import  { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  let [user,setUser] = useState(null);

  // when the user logs in we need to change the user state 
  // useEffect( ()=>{
  //   let f = async () =>{
  //   // async function ke andar await use karte the na
  //   // to jaha await use karna hota tha bahar vale ko sync function bana lete the
  //     // firestore ke andar jaake posts collection ka quicksnapshot lo
  //     // uske har ek doc ke data() ko print karo

  //   let querySnapshot = await firestore.collection("posts").limit(3).orderBy("index","asc").get();
  //   querySnapshot.forEach((doc)=> console.log(doc.data()));      
  // }
  //   f() 
    
  //     }  ,[])

console.log(user);


  return (
    <>
    <Router>
      <Switch>
        <Route path="/login">
          <Login handleUser = {setUser} user={user}/>
        </Route>
        <Route path="/home">
          <Home user={user}/>
        </Route>
      </Switch>
    </Router>
    </>


  );
}

export default App;
