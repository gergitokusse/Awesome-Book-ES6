class bookList {
  // Display books to the UI from local storage
  constructor() {
    this.storeData = JSON.parse(localStorage.getItem('addedBooks'));
  }

  static displayBooks() {
    let storeData = JSON.parse(localStorage.getItem('addedBooks'));
    if (storeData === null) {
      storeData = [];
    }
    const listOfBooks = document.querySelector('.container');
    listOfBooks.innerHTML = '';
    storeData.forEach((book, i) => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';

      const bookinfo = document.createElement('div');
      bookinfo.className = 'book-info';
      bookinfo.innerHTML = `
        <span>"${book.title}"</span>
        <span> by ${book.author}</span>
      `;
      const rmvbtn = document.createElement('button');
      rmvbtn.className = 'mybutton';
      rmvbtn.id = i;
      rmvbtn.innerHTML = 'Remove';
      bookItem.appendChild(bookinfo);
      bookItem.appendChild(rmvbtn);
      listOfBooks.appendChild(bookItem);

      const rmb = document.getElementById(i);
      rmb.addEventListener('click', () => {
        storeData.splice(i, 1);
        localStorage.setItem('addedBooks', JSON.stringify(storeData));
        const beingrmv = document.getElementById(i);
        beingrmv.parentElement.remove();
      });
    });
  }

  static removeBook(i) {
    this.storeData.splice(i, 1);
    bookList.updateData();
    bookList.displayBooks();
  }

  static updateData() {
    localStorage.setItem('addedBooks', JSON.stringify(this.storeData));
  }
}
export default bookList;