import about from "./about";
import contact from "./contact";
import menu from "./menu";

function clearContent() {
    contentContainer.removeChild(contentContainer.firstElementChild);
}

function highlight(content) {
    // remove any previously highlighted links
    const actives = document.querySelectorAll('.active');
    if(actives) {
        actives.forEach(active => active.classList.remove('active'));
    }
    const link = document.querySelector(`#${content}`);
    link.classList.add('active');
}

function displayContent() {
    const content = contentContainer.firstElementChild;
    const requiredContent = this.textContent;
    const currentContent = content.id.split('-')[0];
    if(requiredContent === currentContent) return;

    clearContent();
    highlight(requiredContent);
    switch (requiredContent) {
        case 'Menu':
            menu(contentContainer);
            break;
        case 'About':
            about(contentContainer);
            break;
        case 'Contact':
            contact(contentContainer);
            break;
    }
}

// main starts here
const contentContainer = document.querySelector('#content-container');
about(contentContainer);

const tabs = document.querySelector('ul');
for(let child of tabs.children) {
    child.addEventListener('click', displayContent);
}

