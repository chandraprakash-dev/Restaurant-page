const contact = function (contentContainer) {
    const content = document.createElement('div');
    content.id = 'Contact-content';

    const h1 = document.createElement('h1');
    h1.textContent = "Contact Us";

    const p = document.createElement('p');
    p.textContent = "Enjoy the delicious sattvic vegeterian food. In the spirit of a warm welcome laced with endless surprises of decadent bliss, we at Sattvam are delighted to bring to you an unforgettable culinary experience and a rediscovery of true soulful food. Flourishing over 10,000 square feet in the heart of Bengaluru, we await you with succulent creations, located near you in Sadashivanagar and JP Nagar.\n" +
    "\n" +
    "Come experience a delectable Indian and Continental Cuisine served to you in an epic spread with a lack of choice being… unfound and zilch.";

    content.appendChild(h1);
    content.appendChild(p);
    contentContainer.appendChild(content);
}

export default contact;