let username;
username = prompt("What is your name?");
alert("Hello " + username + "!");
console.log(username);

document.getElementById("submit").onclick = function () {
    username = document.getElementById("nameInput").value;
    document.getElementById("myh1").textContent = "Hello " + username + "!";
    alert("Hello " + username + "!");
    console.log(username);
}

