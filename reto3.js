const readline = require("readline")
const fs = require ("fs/promises")

function question(question) {
    const promise = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
    return promise;
};


async function persona(){

    const Nombre = await question ('Ingrese su Nombre:');
    const Apellido = await question ('Ingrese su Apellido:');
    const Edad = await question ('Ingrese su Edad:');

    let data = {Nombre, Apellido, Edad}

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
    
}

persona();





  
