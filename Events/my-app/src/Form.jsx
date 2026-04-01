function handelFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}
function Form(){
    return(
        <form >
            <input placeholder="User name"/>
            <button onClick={handelFormSubmit}>Submit</button>
        </form>
    )
}
export default Form;