function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function signup() {
  let email = document.getElementById("email1").value;
  let fullname = document.getElementById("fullname").value;
  let password = document.getElementById("password1").value;

  //  let JSON.parse(localStorage.getItem("users")
  let userObj = {
    email: email,
    fullname: fullname,
    password: password,
  };

  let parsedArray = JSON.parse(localStorage.getItem("users"));

  if (parsedArray) {
    for (var i = 0; i < parsedArray.length; i++) {
      if (parsedArray[i].email === email) {
        alert("user already exists");
        return;
      }
    }

    parsedArray.push(userObj);
    localStorage.setItem("users", JSON.stringify(parsedArray));
  } else {
    let array = [];
    array.push(userObj);
    localStorage.setItem("users", JSON.stringify(array));
  }
  window.location.href = "login.html";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let parsedArray = JSON.parse(localStorage.getItem("users"));

  let increment = 0;

  if (parsedArray) {
    for (var i = 0; i < parsedArray.length; i++) {
      if (
        parsedArray[i].email === email &&
        parsedArray[i].password === password
      ) {
        localStorage.setItem("loggedInEmail", parsedArray[i].email);
        window.location.href = "popup.html";

        return;
      }
      increment = increment + 1;
    }
  }

  if (parsedArray.length === increment) {
    alert("User not found");
    // console.log(parsedArray.length)
    // console.log(increment)
  }
}

function createNewTeam() {
  let teamname = document.getElementById("teamname").value;
  let category = document.getElementById("category").value;
  let members = document.getElementById("members").value;
  let owner = localStorage.getItem("loggedInEmail");

  let team = {
    teamname: teamname,
    category: category,
    members: members,
    owner: owner,
  };

  let parsedArray = JSON.parse(localStorage.getItem("team"));

  if (parsedArray) {
    parsedArray.push(team);
    localStorage.setItem("team", JSON.stringify(parsedArray));
  } else {
    let array = [];
    array.push(team);
    localStorage.setItem("team", JSON.stringify(array));
  }

  updateTeamUi(team);
}

function updateTeamUi(teamObj) {
  let teamownerdiv= document.getElementById("teamowner");

  let div = document.createElement("div");
  let teamname = document.createElement("div");
  let category = document.createElement("div");
  let members = document.createElement("div");

  let divStyle = div.style;

  divStyle.border = "2px solid black";
  divStyle.padding = "10px";
  divStyle.width = "50%";
  divStyle.margin = "2% auto";

  teamname.innerHTML = teamObj.teamname;
  div.append(teamname);
  teamownerdiv.append(div);
}

function getTeams() {
  let parsedArray = JSON.parse(localStorage.getItem("team"));
  let teamownerdiv = document.getElementById("teamowner");
  let teamspartof = document.getElementById("teamspartof");
  let owner = localStorage.getItem("loggedInEmail");

  if (parsedArray) {
    for (var i = 0; i < parsedArray.length; i++) {
      if (parsedArray[i].owner === owner) {
        let div = document.createElement("div");
        let teamname = document.createElement("div");
        let category = document.createElement("div");
        let members = document.createElement("div");

        let divStyle = div.style;

        divStyle.border = "2px solid black";
        divStyle.padding = "10px";
        divStyle.width = "50%";
        divStyle.margin = "2% auto";

        teamname.innerHTML = parsedArray[i].teamname;
        div.append(teamname);
        teamownerdiv.append(div);
      }

      else{
        let div = document.createElement("div");
        let teamname = document.createElement("div");
        let category = document.createElement("div");
        let members = document.createElement("div");

        let divStyle = div.style;

        divStyle.border = "2px solid black";
        divStyle.padding = "10px";
        divStyle.width = "50%";
        divStyle.margin = "2% auto";

        teamname.innerHTML = parsedArray[i].teamname;
        div.append(teamname);
        teamspartof.append(div);
      }
    }
  }
}

getTeams();
