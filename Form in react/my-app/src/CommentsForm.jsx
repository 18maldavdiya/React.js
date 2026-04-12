import { useState } from "react";
function CommentsForm(){
    let [formData,setFormData] = useState({
        username : "",
        remarks: "",
        rating : 5
    });
    let handleInputChange = (event) =>{
        setFormData((currentdata)=>{
            return{...currentdata,[event.target.name] : event.target.value}
        })
    }
    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
        username : "",
        remarks: "",
        rating : 5
    });

    }

    return(
        <div>
            <h4> Give Comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input type="text" 
                placeholder="username"
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                name="username"
                />

                <br></br>
                <br></br>

                <label htmlFor="remark">Reamrk</label>
                <textarea placeholder="Add your remarks" value={formData.remarks}  onChange={handleInputChange} id="remark" name="remarks">Remarks</textarea>

                <br></br>
                <br></br>

                <lable htmlFor="rating">Add rating</lable>
                <input type="number" min={1} max={5}
                placeholder="rating"
                value={formData.rating}
                onChange={handleInputChange}
                id="rating"
                name="rating"
                />


                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}
export default CommentsForm;