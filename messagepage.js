// details = localStorage.getItem('details');
// const submitContact = document.getElementById('SubmitContact')
// submitContact.addEventListener('click', (e) => {
//   e.preventDefault();
//   let name = document.getElementById("name");
//   let email = document.getElementById("email");
//   let subject = document.getElementById("subject");
//   let message = document.getElementById("message");

//   if (name.value == 0) {
//     alert("name is Empty");
//     return
//   }
//   localStorage.setItem('details',
//     [
//       [
//         JSON.stringify(
//           [
//           {
//             name: name.value,
//             email: email.value,
//             subject: subject.value,
//             message: message.value
//           }
//         ]
//         ),
//       ]

//     ]

//   )
//   // setData();
//   // console.log(details)



  // const url = "http://localhost:8000"
  // const submitContact = document.getElementById('SubmitContact')
  // submitContact.addEventListener('click',(e)=>{
  //     let fullName = document.getElementById("fullName");
  //     let email = document.getElementById("email");
  //     let subject = document.getElementById("subject");
  //     let message = document.getElementById("message");
  //     let datas = {
  //       fullName: fullName.value,
  //       email: email.value,
  //       subject: subject.value,
  //       message: message.value
  //     };
  //     console.log(fullName.value, email.value, subject.value, message.value);
      
  //     fetch(`http://localhost:8000/api/messages/create`, {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(datas),
  //     })
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     console.log(data);
  //   })
  //   .catch((error)=>{
  //     console.error('let us check',error);
  //   });
  // fullName.value = "";
  // email.value = "";
  // subject.value = "";
  // message.value = "";
  // });



// })


    fetch('https://remmyapi.onrender.com/api/messages',{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('mora'))}`,
            Accept: 'application.json',
            'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
        result = data
            let tbody= document.querySelector('tbody')
            for(let i=0; i<result.length; i++){
            let d1 = document.createElement("td")
            let d2 = document.createElement("td")
            let d3 = document.createElement("td")
            let d4 = document.createElement('td')
            let deleteicon=document.createElement('i')
            d1.innerText = result[i].fullName;
            d2.innerText = result[i].email;
            d3.innerText = result[i].subject;
            d4.innerText = result[i].message;
            deleteicon.setAttribute('class','ri-delete-bin-line delete')
            let  row = document.createElement("tr")
            row.appendChild(d1)
            row.appendChild(d2)
            row.appendChild(d3)
            row.appendChild(d4)
            row.appendChild(deleteicon)
            tbody.appendChild(row)
            //delete
            deleteicon.addEventListener('click', ()=>{
              console.log(result[i]._id)
                fetch(`https://remmyapi.onrender.com/api/messages/delete/${result[i]._id}`, {
                    method: 'DELETE',
                    headers: { 
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('mora'))}`,

                        'Content-Type': "application/json",
                    }, 
                })
                .then((res) => res.json())
                .then((data) => {
                     location.reload(data)
                })
                .catch(error => console.error(error));
    
            })   
     }
    })
    .catch(error => console.log(error));

