var express = require('express');
var router = express.Router();
var Book = require('../models/addBook');

//Books
router.get('/admin', function(req, res){
	res.render('admin');
});

// Add Books
router.post('/admin', function(req, res){
	var bno = req.body.bno;
	var bname = req.body.bname;
	var bauth = req.body.bauth;
	var bcopies = req.body.bcopies;
	var bpubl = req.body.bpubl;
	var bpub_year = req.body.bpub_year;
	var brno = req.body.brno;
	var badded = req.body.badded;
	var sel1 = req.body.sel1;

	// Validation
	req.checkBody('bno', 'Please enter a book number').notEmpty();
	req.checkBody('bname', 'Name is required').notEmpty();
	req.checkBody('bauth', 'Author not specified').notEmpty();
	req.checkBody('bcopies', 'Specify the total copies of book available').notEmpty();
	req.checkBody('bpubl', 'Publisher is required').notEmpty();
	req.checkBody('bpub_year', 'Specify publication year').notEmpty();
	req.checkBody('brno', 'Enter Rack number for the book').notEmpty();
	req.checkBody('badded', 'Enter the person adding the book').notEmpty();
	req.checkBody('sel1', 'Enter category of book').notEmpty();
	var errors = req.validationErrors();

	if(errors){
		res.render('add_book',{
			errors:errors
		});
	} else {
		var newBook = new Books({
			bno: bno,
			bname: bname,
			bauth: bauth,
			bcopies: bcopies,
			bpubl: bpubl,
			bpub_year: bpub_year,
			brno: brno,
			badded: badded,
			bsel1: bsel1
 
		});
		User.createBook(newBook, function(err){      //function(err,user)
			if(err){
				req.flash('error_msg', 'Book no. exists');
				res.redirect('register');
				console.log(err);
			}
	        });
	}
});

