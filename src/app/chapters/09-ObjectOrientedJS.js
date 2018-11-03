// @ts-check
/* eslint-disable */

/* Object example 1 */
var obj = new Object();

/* Object example 2 */
var obj = {};

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};

/* Object example 3 */
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function() {
    console.log(this.isbn);
  };
}

var book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title

book.title = 'new title'; // update the value of the book title

console.log(book.title); // outputs the updated value

Book.prototype.printTitle = function() {
  console.log(this.title);
};

Book.printPage = function() {
    console.log(this.pages);
  };

  Book.prototype.printPage1 = function() {
    console.log(this.pages);
  };

book.printTitle();

book.printIsbn();
book.printPage1();
book.printPage(); // error 

