console.log("User model loaded");

var mongoose       = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');
    Schema         = mongoose.Schema,
    userSchema = new Schema({

      username: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, "That username address is already in use"],
        required: 'Username address is required',
        // validate: {
        //   validator: function( value ) {
        //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        //   },
        //   message: "Your password must have at least 1 number, uppercase and special character"
        // }
      },
      
    });



userSchema.plugin(uniqueValidator);

// userSchema.virtual( 'name.full' ).get( function () {
//   return this.name.first + " " + this.name.last;
//   // return `${ this.name.first } ${ this.name.last}`;
// });



var User = mongoose.model('User', userSchema);