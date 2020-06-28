import about from "./about";
import contact from "./contact";
import menu from "./menu";

function displayContent() {
    const requiredContent = this.textContent;

    switch (requiredContent) {
        case 'Menu':
            menu();
            break;
        case 'About':
            about();
            break;
        case 'Contact':
            contact();
            break;
    }
}


const tabs = document.querySelector('#tabs');
for(let child of tabs.children) {
    child.addEventListener('click', displayContent);
}

