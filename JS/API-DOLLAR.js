fetch( `https://economia.awesomeapi.com.br/last/USD-BRL` ) . then(resposta => {
return resposta. json( )
}).then (economia => {
console.log(economia)
document.getElementById ('valorDolar') .innerHTML = economia. USDBRL.bid;
})
fetch(`https://economia.awesomeapi.com.br/last/USD-BRL` ) . then(resposta => {
return resposta. json()
}).then(economia => {
console.log(economia)
document.getElementById ('menorValor' ) . innerHTML = economia. USDBRL. low;
})
fetch( `https://economia.awesomeapi.com.br/last/USD-BRL` ) . then(resposta => {
return resposta.json( )
}) . then (economia => {
console. log(economia)
document.getElementById ('maiorValor') . innerHTML = economia. USDBRL.high;
})

