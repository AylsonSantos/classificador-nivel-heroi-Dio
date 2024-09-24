// projeto Dio Classificação de Heroi
// entrada de dados teste

let personagens = ["kiry:1500","mili:800"]
let classificacion = []

personagens.forEach( xp => {
    let [nome, nivel] = xp.split(':');
    nivel = parseInt(nivel);

    // Estrutura de validação de xp

    if(nivel < 1000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Ferro`)
    } else if(nivel > 1001 && nivel < 2000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Bronze`)
    }
})

console.log(classificacion)