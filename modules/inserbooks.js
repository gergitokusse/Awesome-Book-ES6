import bookList from './bookList.js';

class InserBooks {
  static addNewData(t, a) {
    const storeData = JSON.parse(localStorage.getItem('addedBooks'));
    const error = document.querySelector('.error');
    if (a.value !== '' && t.value !== '') {
      storeData.push({ title: t.value, author: a.value });
      localStorage.setItem('addedBooks', JSON.stringify(storeData));

      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';

      const bookinfo = document.createElement('div');
      bookinfo.className = 'book-info';
      bookinfo.innerHTML = `
        <span>"${t.value}"</span>
        <span> by ${a.value}</span>
      `;
      bookItem.appendChild(bookinfo);

      error.innerHTML = 'Success !!!';
      error.classList.replace('error', 'success');
      t.value = '';
      a.value = '';
      setTimeout(() => {
        error.innerHTML = '';
        error.classList.replace('success', 'error');
      }, 800);
      bookList.displayBooks();
    } else {
      error.innerHTML = 'Auther or Book Title can"t be empty';
      setTimeout(() => {
        error.innerHTML = '';
      }, 3000);
    }
  }
}

export default InserBooks;