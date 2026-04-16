import { useState } from "react";

function Comment(){
    let [comments , setComments] = useState([{
        username : "@han",
        remarks: "good product",
        rating : 4
    }])
    return(
        <div>
            <h3>All comments</h3>
            <div className="comment">
                <span>{comments[0].remarks}</span>
                 &nbsp;
                <span>(rating = {comments[0].rating})</span>
                <p>-{comments[0].username}</p>
            </div>
        </div>
    )
}
export default Comment;