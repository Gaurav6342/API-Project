// --------------------?book management system


// run localhost:3000 on webbrowser

const express = require("express");

// database import
const database = require("./database");



// ititialize express
const booky = express();
// ----------------book api--------------------
/*
   Route               /(root Route)
   description     get all the BOOKS
   Access          public
   parameter       None
   Methos          get

*/

//  print all books
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

booky.get("/c/:category",(req,res)=>{
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category)
  )
  if(getSpecificBook.length === 0){
     return res.json({error:`No book found for the category of ${req.params.category}`});
     // when localhost:3000/c/horror  this books catogory not present in database then it show a No book found for the ISBN of 12345Book213
     //  show error when databse not match
  }
  return res.json({book: getSpecificBook});

});


/*
   Route root              /lag
   description     get specific BOOKS on language
   Access          public
   parameter       language
   Methos          get
 */

booky.get("/lag/:language",(req,res)=>{
  const getSpecificBook = database.books.filter(
    (book) => book.language.includes(req.params.language)
  );
  if(getSpecificBook.length === 0){
     return res.json({error:`No book found for the category of ${req.params.language}`});
     // when http://localhost:3000/lag/mar  this books language not present in database then it show a No book found for the ISBN of 12345Book213
     //  show error when databse not match
  }
  return res.json({book: getSpecificBook});

});

// --------------------author api-----------------
/*
   Route root              /author
   description     	Get all authors
   Access          public
   parameter       NONE
   Methos          get
 */
// all books
booky.get("/author",(req,res) =>{
  return res.json({author: database.author});
});




/*
   Route root              /author/id
   description     get specific author based on id
   Access          public
   parameter       id
   Methos          get
 */

booky.get("/author/id/:id",(req,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) =>author.id === parseInt(req.params.id));
  if(getSpecificAuthor.length === 0){
     return res.json({error:`No author found for the category of ${req.params.id}`});
     // when http://localhost:3000/lag/mar  this books language not present in database then it show a No book found for the ISBN of 12345Book213
     //  show error when databse not match
  }
  return res.json({author: getSpecificAuthor});

});



/*
   Route root              /author/book
   description     get specific author based on BOOKS
   Access          public
   parameter       isbn
   Methos          get
 */

booky.get("/author/book/:isbn",(req,res)=>{
  const getSpecificAuthor = database.author.filter(
    (author) =>author.books.includes(req.params.isbn)
  );
  if(getSpecificAuthor.length === 0){
     return res.json({
       error:`No author found for the category of ${req.params.isbn}`});
     // when http://localhost:3000/lag/mar  this books language not present in database then it show a No book found for the ISBN of 12345Book213
     //  show error when databse not match
  }
  return res.json({author: getSpecificAuthor});

});
// --------------------publication api-----------------
/*
   Route root              /publication
   description     	Get all publications
   Access          public
   parameter       NONE
   Methos          get
 */
// all books
booky.get("/publication",(req,res) =>{
  return res.json({publications: database.publication});
});







// /*
// Route			/publications
// Description		Get all publications
// Access			PUBLIC
// Parameters		NONE
// Method			GET
// */
//
// booky.get("\/publications", (req, res) => {
// 	return res.json({publications: database.publications});
// });
//
//
// /*
// Route			/publications
// Description		Get specific publications based on id
// Access			PUBLIC
// Parameters		id
// Method			GET
// */
//
// booky.get("\/publications\/:id", (req, res) => {
// 	const getSpectificPublication = database.publications.filter((publication) => publication.id === parseInt(req.params.id));
// 	if (getSpectificPublication.length === 0)
// 		return res.json({error: `No publication found for the id of ${req.params.id}`});
//
// 	return res.json({publications: getSpectificPublication});
// });
//
//
// /*
// Route			/publications/book
// Description		Get specific publications based on isbn
// Access			PUBLIC
// Parameters		isbn
// Method			GET
// */
//
// booky.get("\/publications\/book\/:isbn", (req, res) => {
// 	const getSpectificPublication = database.publications.filter((publication) => publication.books.includes(req.params.isbn));
//
// 	if (getSpectificPublication.length === 0)
// 		return res.json({error: `No publication found for the book of ${req.params.isbn}`});
//
// 	return res.json({publications: getSpectificPublication});
// });



booky.listen(3000,()=>{
   console.log("server is up and running");
});
