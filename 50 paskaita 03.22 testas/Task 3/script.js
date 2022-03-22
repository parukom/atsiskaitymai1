/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


let knopke = document.querySelector(`#btn`);

knopke.addEventListener(`click`, e => {
    document.querySelector(`#message`).classList.add('hidden');
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                document.querySelector(`#output`).innerHTML += `
                <div class="kortele">
                    <img src="${element.avatar_url}" alt="avataras" height="300px">
                    <h2 class="loginas"> Login name: <br> ${element.login} </h2>
                </div>
            `;
            });
        })
})