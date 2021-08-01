import {useEffect} from "react";
import { firestore } from './firebase';
function App() {
  useEffect( ()=>{
    let f = async () =>{
    
    let querySnapshot = await firestore.collection("posts").limit(3).get();
    querySnapshot.forEach((doc)=> console.log(doc.id));      
  }
    f() 
    
      }  ,[])




  return (
    <div>

    </div>
  );
}

export default App;
