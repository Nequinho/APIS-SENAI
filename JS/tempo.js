async function getWeather(){

    var cidade = document.getElementById('city').value
    //Conectar com API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);
    var tempoCelsius = resposta.data.main.temp;

    //Variavel para consumir o JSON do item temperatura
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade}:
     ${tempoCelsius.toFixed(2)} °C`

    
}
    getWeather();
  