const menu = function (contentContainer) {
    const content = document.createElement('div');
    content.id = 'Menu-content';

    const h1 = document.createElement('h1');
    h1.textContent = "Menu";

    const p = document.createElement('p');
    p.textContent = "Enjoy the delicious sattvic vegeterian food";

    content.appendChild(h1);
    content.appendChild(p);

    contentContainer.appendChild(content);
}

export default menu;

