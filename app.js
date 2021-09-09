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


  function signup(){
    let email = document.getElementById("email").value;
    let fullname = document.getElementById("fullname").value;
    let password = document.getElementById("password").value;


  //  let JSON.parse(localStorage.getItem("users")
    let userObj = {
     email:email,
     fullname:fullname,
     password:password 
    }

    localStorage.setItem("users", JSON.stringify(userObj));

  let parsedObj =   JSON.parse(localStorage.getItem("users"));
// if(parsedObj.email === &&[s]{

// })
    window.location.href = "login.html"
  }