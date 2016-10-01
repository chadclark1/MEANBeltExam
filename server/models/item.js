console.log("Item model loaded");

var mongoose       = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');
    Schema         = mongoose.Schema,
    itemSchema = new Schema({

      user: {
        type: String,
      },

      created_by: {
        type: String,
      },

      title: {
        type: String,
        // trim: true,
        // unique: [true, "There is already a item with that name"],
        required: 'An item title name is required',
        // validate: {
        //   validator: function( value ) {
        //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        //   },
        //   message: "Your password must have at least 1 number, uppercase and special character"
        // }
      },

      description: {
        type: String,
      },

      userTag: {
        type: String,
      },

      checked:{
        type: String,
      },

      date:{
        type: Date,
      },
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number,
      },
      
    });



itemSchema.plugin(uniqueValidator);




var Item = mongoose.model('Item', itemSchema);