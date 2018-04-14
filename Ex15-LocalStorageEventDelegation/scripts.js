(function(window, document, undefined) {
  const addItems = document.querySelector(".add-items");
  const itemsList = document.querySelector(".plates");
  const toggleAll = document.querySelector('.toggleAll');

  const items = JSON.parse(localStorage.getItem('items')) || [];

  function setState(name, items = [], itemsList) {
    populateList(items, itemsList);
    localStorage.setItem(name, JSON.stringify(items));
  }
  
  function addItem(e) {
    e.preventDefault();
    const text = this.querySelector("[name=item]").value;
    const item = {
      text,
      done: false
    };

    items.push(item);
    setState('items', items, itemsList);
    this.reset();
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? "checked" : ""} />
        <label for="item${i}">${plate.text}</label>
      </li>
      `;
    }).join('');
    populateToggler(plates, toggleAll);
  }
  
  function populateToggler(plates = [], platesList) {
    let allChecked = false;
    if (plates.length <= 0) return;
    allChecked = plates.length > 0 && plates.every(plate => plate.done && plate.done === true);
    platesList.innerHTML = `
      <li>
        <input type="checkbox" id="item-all" ${allChecked ? "checked" : ""} />
        <label for="item-all">All</label>
      </li>
      `;
  }
  
  function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    setState('items', items, itemsList);
  }
  
  function updateToggleAll(e) {
    if (!e.target.matches('input')) return;
    items.map(item => item.done = e.target.checked);
    setState('items', items, itemsList);
  }

  addItems.addEventListener("submit", addItem);
  itemsList.addEventListener('click', toggleDone);
  toggleAll.addEventListener('click', updateToggleAll);
  
  populateList(items, itemsList);
})(window, document);
