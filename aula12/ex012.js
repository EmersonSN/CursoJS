let agora = new Date();
let hora  = agora.getHours();
console.log(`São ${hora} hrs então a saudação é:`);
if(hora >= 5 && hora < 12){
    console.log('Bom dia!');
}else if(hora >= 12 && hora < 18){
    console.log('Boa tarde');
}else if(hora >= 18 && hora < 24){
    console.log('Boa noite')
}else if(hora >= 25){
    console.log('Erro na hora')
}else{
    console.log('Vá dormir! Boa madrugada!')
}