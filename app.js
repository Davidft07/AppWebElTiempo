const url="https://images-api.nasa.gov/search?q=apollo%2011";
//datos.collection.items[0].data[0].title
//datos.collection.items[0].data[0].description

fetch(url)
.then(res => res.json())
.then(datos=>{

    let body= '';
    for(let i=0;i<10;i++){
        body += `<tr><td>${datos.collection.items[i].data[0].title}</td><td>${datos.collection.items[i].data[0].description}</td><td><img src="${datos.collection.items[i].links[0].href}"></td>`

    }
    document.getElementById('table').innerHTML= body

})