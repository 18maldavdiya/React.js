import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./comment.css";

function Comment(){
    let [comments , setComments] = useState([{
        username : "@han",
        remarks: "good product",
        rating : 4
    }])

    let addNewComment = (comment) => {
    setComments((currentComments) => [...currentComments, comment]);
    }
    return(
        <div>
            <h3>All comments</h3>
            {comments.map((comment,idx) => (
                <div className="comment" key ={idx}>
                <span>{comment.remarks}</span>
                 &nbsp;
                <span>(rating = {comment.rating})</span>
                <p>-{comment.username}</p>
            </div>
            ))}
            
            <hr></hr>
            <CommentsForm addNewComment={addNewComment}/>
        </div>
    )
}
export default Comment;