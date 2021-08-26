const resposta = [
    {q: 'H', pont: 1},
    {q: 'E', pont: 1},
    {q: 'E', pont: 1},
    {q: 'H', pont: 1},
    {q: 'H', pont: 1},
];

Array.prototype.Humanas= function(fn){
 const ContH = []
 for(let el of this){
     if(fn(el)){
         ContH.push(el)
        
     }
 }
 return ContH
}
Array.prototype.Qnt= function(fn){
    const contador=[]
    for(let el of this){
        contador.push(fn(el))
    }
    return contador
}
Array.prototype.Pontos=function(fn,inicial){
    let ultimo= 0
    for(let el of this){
        ultimo= fn(ultimo, el)
    }
    return ultimo
}

 const verif= dados => dados.q == 'H'
 const contagem = dados => dados.pont 
 const somar = (a,b) => a+b
 const result=resposta.Humanas(verif).Qnt(contagem).Pontos(somar)
 console.log(result)