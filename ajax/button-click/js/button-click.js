
document.getElementById("btn").addEventListener("click", getData);

function getData() {

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {

            let link = "https://jsonplaceholder.typicode.com/users/1";

            let user = document.createElement("p");
            user.innerHTML = "User: " + response.id;
            document.body.appendChild(user); 

            let userName = document.createElement("p");
            userName.innerHTML = "User Name: " + response.name;
            document.body.appendChild(userName); 

            let userUrl = document.createElement("p");
            userUrl.innerHTML = "User URL: " + "<a href='"+ link +"'>https://jsonplaceholder.typicode.com/users/1</a>";
            document.body.appendChild(userUrl); 
            
        });

}


