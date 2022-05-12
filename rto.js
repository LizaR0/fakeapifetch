fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    let data1='';
    completedata.map((values)=>{
        data1 += `<div class="card">
        <h2 class="userid">${values.userId}</h2>
        <p class="id">${values.id}</p>
        <p class="title">${values.title}</p>
        <p class="complete">${values.completed}</p>
        </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
}
)