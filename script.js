let isEmailValid = false
let isPasswordValid = false

let formError = document.querySelector(".form_error")
const url = 'https://remmyapi.onrender.com/api/auth/login'
document.querySelector('#form_login').addEventListener('submit', (e) => {
    e.preventDefault()
    const email= e.target.elements['email'].value;
    const password= e.target.elements['password'].value;
    console.log(email);
    console.log(password)
    const loginData = {
        email: email,
        password: password
    }
    console.log(loginData)
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        })
        .then((res) => res.json())
        .then((data) => {
           console.log(data)
                const accessToken = data.token; 
                console.log(accessToken)
                localStorage.setItem('mora', JSON.stringify(accessToken))
                if(data.status==="success"){
                window.location.assign("./dashboard.html")
                }
                else{
                    alert(data.error)
                }
        })
    });