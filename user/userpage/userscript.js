// create class object of  XMLHttpRequest
function displayValues(users){
    
    let html_data=""
    for(let user of users){
        html_data+=` <tr>
        <th scope="row">${user.username}</th>
        <td>${user.email}</td>
        <td>${user.id}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
      </tr>`
    }
    document.querySelector("#display").innerHTML=html_data

}

var request= new XMLHttpRequest()
request.open("get","https://jsonplaceholder.typicode.com/users")
request.send()
request.onreadystatechange =()=>{
 if(request.readyState==4){
     if(request.status>199 & request.status<300){
         let users=JSON.parse(request.responseText)
         console.log(users);
         displayValues(users)
     }
     else{
         console.log("failed");
     }
 }
}
