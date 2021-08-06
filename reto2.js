const fs = require('fs/promises')

let data = {
    "Persona" : [{"Nombre" : "David", "Apellido" : "Muñoz", "Edad" : 35}]
};

fs.writeFile('persona.json', JSON.stringify(data))
.then( () =>{
    return fs.readFile('persona.json', 'utf-8')
})

.then( data => {
    console.log(JSON.parse(data));
}) 
.catch(error => {
    console.log(error);
})
  

