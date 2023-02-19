// let submitBtn = document.querySelector('form-btn'); 
// submit

SubmitContact.addEventListener('click', ()=>{
    // inputs
    let fullName = document.getElementById('fullName');
    let Email = document.getElementById('email');
    let subject = document.getElementById('subject')
    let message = document.getElementById('message');
    const url='https://myapi-qgl7.onrender.com/api/messages/create';
    const query={
        fullName: fullName.value,
        email: Email.value,
        subject: subject.value,
        message: message.value
    };
    if(query.fullName == ""){
        Swal.fire(
            'Opps..!',
            'Name is Empty!',
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
    else if(query.subject == ""){
      Swal.fire(
        'Opps..!',
        'Subject is Empty!',
        'error'
      );
    }
    else if(query.message == ""){
        Swal.fire(
            'Opps..!',
            'Message is Empty!',
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
            console.log(data)
        })
         Swal.fire(
                'Good job!',
                'Message Sent!',
                'success'
            );
            setTimeout(()=>{
                location.reload();
                },4000)
    }
    })
    // const accessToken = localStorage.getItem('mora')
    // if(!accessToken){
    //     window.location.assign('./loginpage.html')
    // }
    