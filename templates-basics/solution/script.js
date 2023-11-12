const itemsData = [
  {
    name: 'Monitor',
    description: 'Display graphics',
    price: 300,
  },
  {
    name: 'Mouse',
    description: 'Control cursor pointer',
    price: 20,
  },
  {
    name: 'Keyboard',
    description: 'Enter data',
    price: 35,
  },
  {
    name: 'Headset',
    description: 'Play music',
    price: 120,
  },
];

const fillItemList = () => {
  const itemTemplate = document.getElementById('item-template');
  const itemListEl = document.getElementById('item-list');
  if (!itemTemplate || !itemListEl) {
    return;
  }
  itemsData.forEach((item) => {
    const itemEl = itemTemplate.content.cloneNode(true);
    itemEl.querySelector('.name').textContent = item.name;
    itemEl.querySelector('.description').textContent = item.description;
    itemEl.querySelector('.price span').textContent = item.price;
    itemListEl.appendChild(itemEl);
  });
};
fillItemList();
