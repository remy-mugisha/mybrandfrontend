fetch('https://remmyapi.onrender.com/api/posts/all',{
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
        let editeicon = document.createElement('i')
        let deleteicon=document.createElement('i')
        // d1.innerText = result[0].image;
        d1.innerText = result[i].title;
        d2.innerText = result[i].desc;
        editeicon.setAttribute('class','ri-edit-line edit' )
        deleteicon.setAttribute('class','ri-delete-bin-line delete')
        deleteicon.addEventListener('click', ()=>{
            console.log(result[i]._id)
              fetch(`https://myapi-qgl7.onrender.com/api/posts/delete/${result[i]._id}`, {
                  method: 'DELETE',
                  headers: { 
                     'Authorization': `Bearer ${JSON.parse(localStorage.getItem('mora'))}`,

                      'Content-Type': "application/json",
                  }, 
              })
              .then((result) => result.json())
              .then((data) => {
                  location.reload()
              })
              .catch(error => console.log(error));
  
          })  
        let  row = document.createElement("tr")
        row.appendChild(d1)
        row.appendChild(d2)
        row.appendChild(d3)
        row.appendChild(editeicon)
        row.appendChild(deleteicon)
        tbody.appendChild(row)
        }
    });