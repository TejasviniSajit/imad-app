//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = "300px";
};


// Submit username/passwprd to login
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var request = new XMLHttpRequest();
  
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
                console.log('User logged in');
                alert("Logged in successfully!");
            } else if (request.status === 403) {
                alert('username/password is incorrect');
            } else if (request.status === 500) {
                alert("Something went wrong on the server")
            }
      }
  };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://tejasviniforensics.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
};

// Register a new user
var register = document.getElementById('Register_btn');
register.onclick = function() {
    var request = new XMLHttpRequest();
  
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
                console.log('New user registered');
                alert("Registered successfully!");
            } else if (request.status === 500) {
                alert("Something went wrong on the server");
            }
      }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://tejasviniforensics.imad.hasura-app.io/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};