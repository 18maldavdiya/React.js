function printHello(event){
    console.log("Hello")
    console.log(event);
}
function demo(){
    console.log("this is a buy function");
}
function doubleClick(){
    console.log("double click me");
}
function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me</button>
            &nbsp;
            <p onMouseOver ={demo}>Loren*2 ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas, voluptate!
            </p>
            <button onDoubleClick ={doubleClick} > double click </button>
            
        </div>
    )
}
export default Button;