var addname =()=>{
    var input = document.getElementById("input").value;
    var list = document.createElement("list");
    list.innerHTML = input;
    document.getElementById("list").appendChild(list);
}

document.getElementById("button").addEventListener("click", addname);

var detais =async() =>{
    var response = await fetch("https://dummyjson.com/users")
    var users = await response.json();
    console.log(users);
}


