
// // const person = {fname:"thiyagu", lname:"e", age:25};
// const person = ["BMW", "Volvo", "Mini"];

// // const person = "thiyagaraj"

// let text = "";
// for (var x of person) {
//     text += x
    
// }
// console.log(text);

// var yourString = "The quick brown fox jumps over the lazy dog"; 
// var maxLength = 6 
// var trimmedString = yourString.substring(0, maxLength);

// console.log(trimmedString);

document.querySelector("button").addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "data.json", true);

    xhttp.onload = () => {
        
        let update = (JSON.parse(xhttp.responseText)); 
        console.log(update,"check");   
        document.getElementById("name").innerHTML = update
        console.log(xhttp.readyState);
        console.log(xhttp.status);

    }

    xhttp.send();
    
})







