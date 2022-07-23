document.getElementById("su_submit").addEventListener("click",register);
async function register(){
    event.preventDefault();
    let signup_data = {
        name:        document.querySelector("#su_name").value,
        email:       document.querySelector("#su_email").value,
        password:    document.querySelector("#su_password").value,
        username:     document.querySelector("#su_username").value,
        mobile:      document.querySelector("#su_mobile").value,
        description: document.querySelector("#su_description").value,
    }
    // console.log(signup_data)
    signup_data=JSON.stringify(signup_data)
    let url = "https://masai-api-mocker.herokuapp.com/auth/register"

    let response = await fetch(url,{
        method: "POST",
        body: signup_data,
        headers:{
            "Content-Type" : "application/json"
        }
    })

    let data = await response.json();
    if(data.error){
        alert("Registration failed, user already exists");
    }else{
        alert("SignUp Successfull")
    }
    window.location.reload();
}