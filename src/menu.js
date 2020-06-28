const menu = function () {
    const contentContainer = document.querySelector('#content-container');

    const content = document.createElement('div');
    content.id = 'menu-content';

    const h1 = document.createElement('h1');
    h1.textContent = "Menu";

    const p = document.createElement('p');
    p.textContent = "Enjoy the delicious sattvic vegeterian food";

    content.appendChild(h1);
    content.appendChild(p);

    contentContainer.appendChild(content);
}

export default menu;

