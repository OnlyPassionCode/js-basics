const h1 = document.querySelector('h1');
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

h1.innerText = `Nous sommes le ${day} ${date.toLocaleString('default', { month: 'long' })} ${year}`;