// projeto Dio Classificação de Heroi
// entrada de dados teste

let personagens = ["kiry:1500","mili:800","Rafa:13500"]
let classificacion = []

personagens.forEach( xp => {
    let [nome, nivel] = xp.split(':');
    nivel = parseInt(nivel);

    // Estrutura de validação de xp

    if(nivel < 1000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Ferro`)
    } else if(nivel > 1001 && nivel < 2000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Bronze`)
    }else if(nivel > 2001 && nivel < 4000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Prata`)
    }else if(nivel > 4001 && nivel < 6000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Ouro`)
    }else if(nivel > 6001 && nivel < 8000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Platina`)
    }else if(nivel > 8001 && nivel < 10000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Ascendente`)
    }else if(nivel > 10001 && nivel < 12000){
        classificacion.push(`O Herói de nome ${nome} está no nível de Imortal`)
    }else if(nivel >= 12001){
        classificacion.push(`O Herói de nome ${nome} está no nível de Radiante`)
    }
})

console.log(classificacion)