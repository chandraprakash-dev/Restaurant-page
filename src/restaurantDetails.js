const initialLoad = function () {
    const content = document.querySelector('#content');

    const h1 = document.createElement('h1');
    h1.textContent = "Blessed Sattvic Food";

    const p = document.createElement('p');
    p.textContent = "Enjoy the delicious sattvic vegeterian food";

    content.appendChild(h1);
    content.appendChild(p);
}

export default initialLoad;

