const contact = function () {
    const contentContainer = document.querySelector('#content-container');

    const content = document.createElement('div');
    content.id = 'contact-content';

    const h1 = document.createElement('h1');
    h1.textContent = "Contact Us";

    const p = document.createElement('p');
    p.textContent = "Phone: 99999 00000";

    content.appendChild(h1);
    content.appendChild(p);
    contentContainer.appendChild(content);
}

export default contact;