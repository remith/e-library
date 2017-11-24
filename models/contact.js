var mongoose=require('mongoose');
var db=require("./db_config")

		var contactSchema=mongoose.Schema({

			NAME:String,
			EMAIL:String,
			SUBJECT:String,
			MESSAGE:String
		},{ collection: 'ContactsRecords' })

		var contact = mongoose.model('contact', contactSchema);

		    exports.contactDetails=function(req,res){
		    	
		        var contactData=new contact(req.body);

		         contactData.save({},function(err,data){
		         	if(!err){
		         		res.sendStatus(200);
		         	}
		         	else{
		         		res.send(err);
		         	}
		       })
		    }
