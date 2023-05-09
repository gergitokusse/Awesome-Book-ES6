import { DateTime } from './luxon.js';
import InserBooks from './inserbooks.js';
import myNav from './navbar.js';
import bookList from './bookList.js';

const date1 = new Date();
const date = DateTime.local(2023, 9, 15, 7, 30);
const disdate = document.querySelector('.date');
const p = document.createElement('p');
p.innerHTML = `${date}`;
disdate.appendChild(p);

bookList.displayBooks();

// Add new data to local storage
const t = document.querySelector('.title');
const a = document.querySelector('.author');

const addbtndiv = document.querySelector('.add-btn-div');
const addbtn = document.createElement('button');
addbtn.className = 'add-newbook';
addbtn.innerHTML = 'Add';
addbtndiv.appendChild(addbtn);

const addnew = document.querySelector('.form');
addnew.addEventListener('submit', () => InserBooks.addNewData(t, a));

window.onload = bookList.displayBooks;

myNav.navigationBar();