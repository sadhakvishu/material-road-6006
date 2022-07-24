document.getElementById("login_submit").addEventListener("click",login);

async function login(){
    event.preventDefault();
    let login_data = {
        username:    document.querySelector("#li_username").value,
        password:    document.querySelector("#li_password").value,
    }
    let x =  document.querySelector("#li_username").value
    login_data=JSON.stringify(login_data)
    let url = "https://masai-api-mocker.herokuapp.com/auth/login"
    try{
        let response = await fetch(url,{
            // mode:"no-cors",
            method: "POST",
            body: login_data,
            headers:{
                "Content-Type" : "application/json"
            }
        })
    
        let data = await response.json();
        console.log(data.token,x)
        let token = {tok:data.token,username:x}
        localStorage.setItem("token",JSON.stringify(token));
            alert("Login Successfull");
            window.location.reload();
            
    }catch(err){
        alert("Wrong Credentials")
        window.location.reload();
    }

    
}