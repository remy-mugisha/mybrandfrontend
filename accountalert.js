// let submitBtn = document.querySelector('form-btn'); 
// submit

submitRegister.addEventListener('click', ()=>{
    // inputs
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password= document.getElementById('password');
    const url='https://remmyapi.onrender.com/api/auth/register';
    const query={
        username: username.value ,
        email: email.value,
        password: password.value
    };
    
    if(query.username == ""){
        Swal.fire(
            'Opps..!',
            'username is Empty!',
            'error'
        );
    }
    else if(query.email == ""){
        Swal.fire(
            'Opps..!',
            'Email is Empty!',
            'error'
        );
    }
    else if(query.password == ""){
        Swal.fire(
            'Opps..!',
            'password is Empty!',
            'error'
        );
    }
    else
    {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log()
        })
         Swal.fire(
                'Good job!',
                'Account created!',
                'success'
            );
            setTimeout(()=>{
                location.reload();
                },4000)
    }
    })