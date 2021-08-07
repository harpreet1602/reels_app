import { Redirect } from "react-router-dom";
import { auth, storage } from "./firebase";
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
            
            <input 
            onChange={(e)=>{
                let { name, size, type} = e.target.files[0];

                let file = e.target.files[0];
                console.log(name);

                size = size/1000000;
                console.log(type);

                type = type.split("/")[0];

                // checks

                if(type!="video"){
                    alert("Please upload a video");
                }
                else if(size>100){
                    alert("File is too big");
                }
                else{
                let f1 = (snapshot) => {
                    console.log(snapshot.bytesTransferred);
                    console.log(snapshot.totalBytes);
                };

                let f2 = (error) => {
                    console.log(error);
                }

                let f3 = () => {

                    let p = uploadtask.snapshot.ref.getDownloadURL();
                    p.then((url) => {
                        console.log(url);
                    });
                    console.log(p);
                };

                let uploadtask = storage
                    .ref(`/posts/${value.uid}/${name}`)
                    .put(file);

                    uploadtask.on("state_changed",f1,f2,f3);
                    // upload
                }}
            }
            type="file" className="upload-btn"/>            
        </div>):
        (<Redirect to="/"/>)
        }
    </div>
    )
}
export default Home;