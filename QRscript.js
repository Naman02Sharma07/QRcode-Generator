//let is used to create a variable
//queryselector is used to select the selector from the html page

let qr_code=document.querySelector("#qr-code");//it is used to create a random variable
let code_img=document.querySelector("#code-img");
let loader=document.querySelector("#loading");

//here qr_code is the variable that is link to the id->qr-code
//addeventlistner help in adding the event to the variable when we click on it 


qr_code.addEventListener("click",()=>{
    loader.style.display="block";

    code_img.onload=function(){
        //used to load the image
        loader.style.display="none";
    }

    let input=document.querySelector("#input").ariaVlueMax;
    let api='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}';

    code_img.src =api;
    
})

