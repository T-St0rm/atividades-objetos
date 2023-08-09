const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []

function separar(usuarios, jovens, adultos){
    for(let i = 0; i < usuarios.length; i++){
        const usuario = usuarios[i]
        if(usuario.idade < 18){
            jovens.push({ nome: usuario.nome, idade: usuario.idade })
        } else{
            adultos.push({ nome: usuario.nome, idade: usuario.idade })
        }
    }
}

separar(usuarios, jovens, adultos);

console.log("jovens:", jovens);
console.log("adultos:", adultos);
