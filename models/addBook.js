var mongoose=require('mongoose');
var AddBook=require('../models/addBook')
		
	var Book=mongoose.Schema({
		refno : {
			type:String,
			required:true,
			index:true,
			unique:true
		},
		bookname: {
			type:String,
			required:true
			},
		authname: {
			type:String,
			required:true
		},
		copies: {
			type:Number,
			required:true
		},
		publisher:{
			type:String,
			required:true
		},
		publicationyear:{
			type:String,
			required:true
		},
		rackno:{
			type:Number,
			required:true
		},
		category:{
			type:String,
			required:true
		},
		addedby:{
			type:String,
			required:true
		}
	});

var Book = module.exports = mongoose.model('Books', addBook);

/*		var addBook = mongoose.model('addBook', Books);

		    exports.saveNewBooks=function(req,res){
		     		    
		        var bookData=new addBook(req.body);

		         bookData.save({},function(err,data){
		         	if(!err){
		         		res.sendStatus(200);
		         	}
		         	else{
		         		res.send(err);
		         	}
		       })
		    }*/


		    exports.findBookDetails=function(req,res){
					if(req.body.BOOKNAME==null && req.body.AUTHNAME==null){
		  				addBook.find({STREAM:req.body.STREAM},function(err,data){

		    		if(!err){
						if(data==''){

						res.sendStatus(400);
						}
						else
						{
							res.send(data);
						}
		
		  	    	  }
		  	        })
		  	       }
		  	    	else{
		  	    		
		    	  addBook.find({$and:[{STREAM:req.body.STREAM},{BOOKNAME:req.body.BOOKNAME},{AUTHNAME:req.body.AUTHNAME}]},function(err,data){
		    		if(!err){
						if(data==''){

						res.sendStatus(400);
						
						}
						else
						{
							res.send(data);
						}

						
					}
					else{
							res.send(err);
					    }
				})

		    		}
		    }
