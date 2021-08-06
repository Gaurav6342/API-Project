// --------------------?book management system


// run localhost:3000

const express = require("express");

// database
const database = require("./database");


// ititialize express
const booky = express();

/*
   Route root              /
   description     get all the BOOKS
   Access          public
   parameter       None
   Methos          get

*/

// checking the database is link or not on localhost:3000 and show all books and author
booky.get("/",(req,res) => {
  return res.json({books: database.books});

});


/*
   Route root              /is
   description     get specific BOOKS on isbn
   Access          public
   parameter       isbn
   Methos          get

*/
booky.get("/is/:isbn",(req,res) =>
{
   const getSpecificBook = database.books.filter(
         (book) => book.ISBN === req.params.isbn
   );
      // when localhost:3000/is/12345Book it show a book details
   if(getSpecificBook.length === 0){
      return res.json({error:`No book found for the ISBN of ${req.params.isbn}`});
      // when localhost:3000/is/12345Book213  this books isbs not present in database then it show a No book found for the ISBN of 12345Book213
      //  show error when databse not match
   }
   return res.json({book: getSpecificBook});

});


/*
   Route root              /c
   description     get specific BOOKS on category
   Access          public
   parameter       category
   Methos          get

*/

bookApi.get("\/c\/:category", (req, res) => {
	const getSpectificBook = database.books.filter((book) => book.category.includes(req.params.category));
	if (getSpectificBook.length === 0) {
		return res.json({error: `No books found for the category ${req.params.category}`});
	}

	return res.json({book: getSpectificBook});
});

/*
Route			/language
Description		Get specific book based on Language
Access			PUBLIC
Parameters		lan
Method			GET
*/

bookApi.get("\/language\/:lan", (req, res) => {
	const getSpectificBook = database.books.filter((book) => book.language === req.params.lan);
	if (getSpectificBook.length === 0)
		return res.json({error: `No books found for the language ${req.params.lan}`});

	return res.json({book: getSpectificBook});
});


/*
Route			/author
Description		Get all authors
Access			PUBLIC
Parameters		NONE
Method			GET
*/

bookApi.get("\/author", (req, res) => {
	return res.json({authors: database.author});
});


/*
Route			/author
Description		Get all authors
Access			PUBLIC
Parameters		id
Method			GET
*/

bookApi.get("\/author\/:id", (req, res) => {
	const getSpectificAuthor = database.author.filter((author) => author.id === parseInt(req.params.id));
	if (getSpectificAuthor.length === 0)
		return res.json({error: `No author found for the ID of ${req.params.id}`});

	return res.json({authors: getSpectificAuthor});
});


/*
Route			/author/book
Description		Get all author based on specific book
Access			PUBLIC
Parameters		isbn
Method			GET
*/

bookApi.get("\/author\/book\/:isbn", (req, res) => {
	const getSpectificAuthor = database.author.filter((author) => author.books.includes(req.params.isbn));

	if (getSpectificAuthor.length === 0)
		return res.json({error: `No author found for the book of ${req.params.isbn}`});

	return res.json({authors: getSpectificAuthor});
});


/*
Route			/publications
Description		Get all publications
Access			PUBLIC
Parameters		NONE
Method			GET
*/

bookApi.get("\/publications", (req, res) => {
	return res.json({publications: database.publications});
});


/*
Route			/publications
Description		Get specific publications based on id
Access			PUBLIC
Parameters		id
Method			GET
*/

bookApi.get("\/publications\/:id", (req, res) => {
	const getSpectificPublication = database.publications.filter((publication) => publication.id === parseInt(req.params.id));
	if (getSpectificPublication.length === 0)
		return res.json({error: `No publication found for the id of ${req.params.id}`});

	return res.json({publications: getSpectificPublication});
});


/*
Route			/publications/book
Description		Get specific publications based on isbn
Access			PUBLIC
Parameters		isbn
Method			GET
*/

bookApi.get("\/publications\/book\/:isbn", (req, res) => {
	const getSpectificPublication = database.publications.filter((publication) => publication.books.includes(req.params.isbn));

	if (getSpectificPublication.length === 0)
		return res.json({error: `No publication found for the book of ${req.params.isbn}`});

	return res.json({publications: getSpectificPublication});
});



booky.listen(3000,()=>{
   console.log("server is up and running");
});
