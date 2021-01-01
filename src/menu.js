const menu = function (contentContainer) {
    const content = document.createElement('div');
    content.id = 'Menu-content';

    const h1 = document.createElement('h1');
    h1.textContent = "Menu";

    const p = document.createElement('p');
    p.textContent = "Amuse Bouche\n" +
      "Shukha Masala Puri & Aam Panna\n" +
      "Soup\n" +
      "Veg Sweet Corn Soup\n" +
      "Starter\n" +
      "Sarsowala Paneer Tikka\n" +
      "Makkai Ki Galauti\n" +
      "Subz Hariyali Seekh\n" +
      "Aloo Matar Lifafa\n" +
      "Chinese Starter\n" +
      "Crispy Chilli Veg\n" +
      "Gold Coin\n" +
      "Salads\n" +
      "Cabbage Coleslaw\n" +
      "Pineapple Corn In Honey Chilli\n" +
      "Kachumber Salad\n" +
      "Garden Salad\n" +
      "Chats\n" +
      "Pani Puri\n" +
      "Kachori Chaat\n" +
      "Papdi Chaat\n" +
      "Assorted Dhokla\n" +
      "Main Course\n" +
      "Dal Makhani\n" +
      "Boondi Ki Kadhi\n" +
      "Paneer Lalmirch\n" +
      "Shahi Malai Kofta\n" +
      "Aatishwali Subzi Malai\n" +
      "Dum Aloo Capsicum\n" +
      "Palak Samose Ki Sabzi\n" +
      "Bhindi Masala\n" +
      "Kheere Ka Raita\n" +
      "Rice\n" +
      "Sattvic Biriyani\n" +
      "Indian Breads\n" +
      "Roti & Nan.\n" +
      "Kids Corner\n" +
      "Tomato Cheese Bun\n" +
      "Coleslaw Sandwich\n" +
      "Mini Veg Puff\n" +
      "South Indian\n" +
      "Steamed Rice\n" +
      "Rasam\n" +
      "Beans Foogath\n" +
      "Bisibelle Bhath\n" +
      "Curd Rice\n" +
      "Puliogere\n" +
      "Masala Chitrana\n" +
      "Chinese\n" +
      "American Chopsuey\n" +
      "Continental\n" +
      "Vegetable Ginocchi\n" +
      "Indian Dessert\n" +
      "Phaldari Angoordana\n" +
      "Orange Sandwich\n" +
      "Sugarfree Rasmalai\n" +
      "Fresh Cut Fruits\n" +
      "Ice Creams\n" +
      "Live Counters\n" +
      "Mini Masala Dosa\n" +
      "Vada Pav\n" +
      "Live Pasta Station\n" +
      "Ice Cream Teppanyaki"

    content.appendChild(h1);
    content.appendChild(p);

    contentContainer.appendChild(content);
}

export default menu;

