!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=function(e){const n=document.createElement("div");n.id="About-content";const t=document.createElement("h1");t.textContent="Blessed Sattvic Food";const a=document.createElement("p");a.textContent="Enjoy the delicious sattvic vegeterian food. In the spirit of a warm welcome laced with endless surprises of decadent bliss, we at Sattvam are delighted to bring to you an unforgettable culinary experience and a rediscovery of true soulful food. Flourishing over 10,000 square feet in the heart of Bengaluru, we await you with succulent creations, located near you in Sadashivanagar and JP Nagar.\n\nCome experience a delectable Indian and Continental Cuisine served to you in an epic spread with a lack of choice being… unfound and zilch.",n.appendChild(t),n.appendChild(a),e.appendChild(n)};var i=function(e){const n=document.createElement("div");n.id="Contact-content";const t=document.createElement("h1");t.textContent="Contact Us";const a=document.createElement("p");a.textContent="SADASHIV NAGAR J 35, Opposite Shell Petrol Bunk, Sankey Rd, Sadashiva Nagar, Armane Nagar, Bangalore - 560020 Ph: 080 - 23608000",n.appendChild(t),n.appendChild(a),e.appendChild(n)};var o=function(e){const n=document.createElement("div");n.id="Menu-content";const t=document.createElement("h1");t.textContent="Menu";const a=document.createElement("p");a.textContent="Amuse Bouche\nShukha Masala Puri & Aam Panna\nSoup\nVeg Sweet Corn Soup\nStarter\nSarsowala Paneer Tikka\nMakkai Ki Galauti\nSubz Hariyali Seekh\nAloo Matar Lifafa\nChinese Starter\nCrispy Chilli Veg\nGold Coin\nSalads\nCabbage Coleslaw\nPineapple Corn In Honey Chilli\nKachumber Salad\nGarden Salad\nChats\nPani Puri\nKachori Chaat\nPapdi Chaat\nAssorted Dhokla\nMain Course\nDal Makhani\nBoondi Ki Kadhi\nPaneer Lalmirch\nShahi Malai Kofta\nAatishwali Subzi Malai\nDum Aloo Capsicum\nPalak Samose Ki Sabzi\nBhindi Masala\nKheere Ka Raita\nRice\nSattvic Biriyani\nIndian Breads\nRoti & Nan.\nKids Corner\nTomato Cheese Bun\nColeslaw Sandwich\nMini Veg Puff\nSouth Indian\nSteamed Rice\nRasam\nBeans Foogath\nBisibelle Bhath\nCurd Rice\nPuliogere\nMasala Chitrana\nChinese\nAmerican Chopsuey\nContinental\nVegetable Ginocchi\nIndian Dessert\nPhaldari Angoordana\nOrange Sandwich\nSugarfree Rasmalai\nFresh Cut Fruits\nIce Creams\nLive Counters\nMini Masala Dosa\nVada Pav\nLive Pasta Station\nIce Cream Teppanyaki",n.appendChild(t),n.appendChild(a),e.appendChild(n)};function r(){const e=c.firstElementChild,n=this.textContent;if(n!==e.id.split("-")[0])switch(c.removeChild(c.firstElementChild),function(e){const n=document.querySelectorAll(".active");n&&n.forEach(e=>e.classList.remove("active")),document.querySelector("#"+e).classList.add("active")}(n),n){case"Menu":o(c);break;case"About":a(c);break;case"Contact":i(c)}}const c=document.querySelector("#content-container");a(c);const l=document.querySelector("ul");for(let e of l.children)e.addEventListener("click",r)}]);