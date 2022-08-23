
// login page

function login(){

  const userid = document.getElementById("user-id");
  const userpassword = document.getElementById("user-password");

  if(userid.value == "" && userpassword.value == ""){
    document.getElementById("userid-warning").style.display = "block";
    document.getElementById("userpass-warning").style.display = "block";
    userid.style.border = "solid red 2px";
    userpassword.style.border = "solid red 2px";
  }else if(userid.value == "" && !userpassword.value == ""){
    document.getElementById("userid-warning").style.display = "block";
    document.getElementById("userpass-warning").style.display = "none";
    userid.style.border = "solid red 2px";
    userpassword.style.border = "solid gray 2px";
  }else if(!userid.value == "" && userpassword.value == ""){
    document.getElementById("userid-warning").style.display = "none";
    document.getElementById("userpass-warning").style.display = "block";
    userid.style.border = "solid gray 2px";
    userpassword.style.border = "solid red 2px";
  }
  else if(userid.value === localStorage.getItem("USERID") && userpassword.value === localStorage.getItem("USERPASSWORD")){
      window.location.href = "update.html";
  }
  else{
    alert("Please register!!");
    userid.value = "";
    userpassword.value = "";
  }

}


// Register page

function register(){

  const newid = document.getElementById("newid");
  const newpass = document.getElementById("newpass");
  const newemail = document.getElementById("newemail");
  const newphone = document.getElementById("newphone");

  localStorage.setItem("USERID" , newid.value);
  localStorage.setItem("USERPASSWORD" , newpass.value);
  localStorage.setItem("USEREMAIL" , newemail.value);
  localStorage.setItem("USERPHONE" , newphone.value);

  if(newid.value == "" || newpass.value == "" || newemail.value == "" || newphone == ""){
    alert("Please fill all the registration details!!!");
  }else{
    alert("!!REGISTRATION SUCCESSFULLY!!");
    window.location.href = "login.html"; 
  }

}

// update page
