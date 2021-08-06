import "./Home.css";


let VideoCard = ()=>{
    return(
        <div className="video-card">
            <span className="material-icons-outlined like">
            favorite_border
            </span>
            <span class="material-icons-outlined comment">
            comment
            </span>
            <p className="username"></p>     
            <p className="song"></p>
        </div>
    );
}
export default VideoCard;