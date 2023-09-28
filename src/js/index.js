
const wrapper = document.querySelector('.wrapper');
const quote = document.querySelector('.quote');
const btn = document.querySelector('.button');
//const icon = document.querySelector('img');

const getJoke = async () => {
    const url = "https://api.chucknorris.io/jokes/random";

    const data = await fetch(url)
    const response = await data.json()

    quote.textContent = `${response.value}`;
    //icon.src = response.icon_url;

};

btn.addEventListener('click', () => {
    getJoke();
})