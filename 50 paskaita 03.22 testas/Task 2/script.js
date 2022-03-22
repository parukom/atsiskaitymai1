/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clicku = 0;

document.querySelector(`#btn__element`).addEventListener(`click`, e => {
    e.preventDefault();
    let kiekKartu = document.querySelector(`#btn__state`);
    clicku++
    kiekKartu.innerHTML = clicku
})