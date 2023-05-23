const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector("span");
const lead = document.querySelector(".lead");

const searchTemperature = () =>{
    const city = input.value;
    const apiKey = '67e99d04c11dfe40b49f16c927c62fc4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => temperature(data))
        .catch((err)=>{
            console.log(err);
        })
}
const temperature = (t) =>{
    cityName.innerHTML = t.name;
    temp.innerHTML = t.main.temp;
    lead.innerHTML = t.weather[0].main;
}

button.addEventListener('click',searchTemperature);






