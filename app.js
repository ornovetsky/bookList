// book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// ui contructor

function UI() {
}

// Add book to the table 
UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');
//create TR element
const row = document.createElement('tr');
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X<a></td>
`
list.appendChild(row)
}
// show alert 
UI.prototype.showAlert = function(message,className){
  // div
const div = document.createElement('div');
// add classes to div
div.className = `alert ${className}`;
// add text
div.appendChild(document.createTextNode(message))

const container = document.querySelector('.container')
//get form
const form = document.querySelector('#book-form')

// insert alert
container.insertBefore(div, form)

//make message dissapear after 3 secs
setTimeout(function(){
  document.querySelector('.alert').remove()
}, 2000)

}

// UI Proto Clear Fields

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// SUBMIT BUTTOM FUNCTIONALITY.

document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault();
// getting form values
const title = document.getElementById('title').value
const author = document.getElementById('author').value
const isbn = document.getElementById('isbn').value

// Instantiating a book object
const book = new Book(title, author, isbn);

// Instantiate a UI element
const ui = new UI();
console.log(ui)

// Validate 
if(title === '' || author === '' || isbn === ''){
ui.showAlert('Please fill in all fields', 'error')
} else {
// Add book to the table
ui.addBookToList(book);

// show success 
ui.showAlert('Book Added!', 'success')

// Clear fields 
ui.clearFields()

}





})
