// Add your code

// const inputs = {
//     name: "",
//     email: "",
// };
// const configurationObject  = {
//     method: 'POST',

//     headers:{
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(inputs)
// };

function submitData(name, email){
    // console.log(configurationObject)
    fetch("http://localhost:3000/users", {
        method: 'POST',
    
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(function(response){
    return response.json();
})
    .then(function(object) {
    let theBod = getElementsByClassName("body")
    console.log(theBod)
})

}
submitData();