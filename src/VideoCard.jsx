import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { firestore } from "./firebase";
import { AuthContext } from "./AuthProvider";


let VideoCard = (props) => {

    let [boxOpen, setBoxOpen] = useState(false);
    let [playing, setPlaying] = useState(false);
    let [currentUserComment, setCurrentUserComment ] = useState("");
    let [allComments, setAllComments] = useState([]);

    let value = useContext(AuthContext);

    useEffect(()=>{
        let f = async () =>{
            let allCommentId = props.post.comments;
            let arr = [];
             
            for(let i = 0 ; i< allCommentId.length; i++)
            {
                let id = allCommentId[i];

                let doc = await firestore.collection("comments").doc(id).get();
                let commentData = {...doc.data(), id: doc.id };
                arr.push(commentData);
            }
            setAllComments(arr);
        }
        f();
        // after 1st render and whenever there is a change in props this useEffect will be called
    },[props]);

    return (
        <div className="video-card">

            <video onClick={(e) => {
                if (playing) {
                    setPlaying(false);
                    e.currentTarget.pause();
                }
                else {
                    setPlaying(true);
                    e.currentTarget.play();
                }}}
                // "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
               src={props.post.url}
            >
            </video>
            <span className="material-icons-outlined like">
                favorite_border
            </span>
            <span className="material-icons-outlined comment"
            onClick={()=>{
                if(boxOpen){
                    setBoxOpen(false);
                }
                else{
                    setBoxOpen(true);
                }
            }}
            >
                comment
            </span>
            <p className="username">
                <b>{props.post.username}</b>
            </p>
            <p className="song">
                <span class="material-icons-outlined">
                    music_note
                </span>
                <marquee>song name</marquee>
            </p>

            {
                boxOpen?(
                    <div className="comment-box">
                        <button className="comment-box-close-btn"
                        onClick={()=>{
                            setBoxOpen(false);
                        }}
                        >
                            Close
                        </button>
                        <div className="all-comments">
                        {
                            allComments.map((comment,index) => {
                                return(
                                    <div className="comment-container" key = {index}>
                                    <img className="comment-pic" src = {comment.pic}/>
                                    <div className="comment-text">
                                    <p className="username-comment">
                                    <b>{comment.username}</b>
                                    </p>    
                                    <p className="inner-comment">{comment.comment}</p>
                                    </div>
                                    </div>
                                );
                            })
                        }    
                            
                        </div>    
                        <div className="comment-form">
                            <input 
                            type="text"
                            value ={currentUserComment}
                            onChange={(e) => {
                                setCurrentUserComment(e.currentTarget.value);
                            }}
                            />
                            <button
                            onClick = {() => {
                                let p = firestore.collection("comments").add({
                                    comment: currentUserComment,
                                    username: value.displayName,
                                    pic: value.photoURL,
                                });
                                setCurrentUserComment("");
                                // p has got the promise so after it gets resolved .then is fired
                                p.then((docRef)=>{
                                    console.log(props.post.id);
                                    return docRef.get();
                                }).then((doc)=>{
                                    firestore
                                    .collection("post")
                                    .doc(props.post.id)
                                    .update({
                                        comments: [...props.post.comments, doc.id],
                                    })

                                })
                            }}
                            
                            >Post</button>
                        </div>

                    </div>
                ):(
                    ""
                )
            }
        </div>
    );
}
export default VideoCard;