import { Redirect } from "react-router-dom";
import { auth } from "./firebase";
import VideoCard from "./VideoCard";
import { userContext } from "./App";
import { useContext } from "react";

import "./Home.css";


let Home = ()=>{

    let value = useContext(userContext);


    return(
        <div>
    {value?(
    <div>
        <div className="posts-container">
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        </div>

            {/* <h1>{value.displayName}</h1>
            <p>Email: {value.email}</p> */}
            <button onClick={()=>{
                auth.signOut();
            }}
            className="logout-btn"
            >Log Out</button>
        </div>):
        (<Redirect to="/"/>)
        }
    </div>
    )
}
export default Home;