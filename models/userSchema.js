const mongoose=require('mongoose')

const {Schema}=mongoose
const userSchema= new Schema({
    name:{
type:String,
required:true
    },
    email:{
        type:String,
        required :true,
        unique:true,
    },
    phone:{
        type:String,
        required:false,
        unique:false,
        parse:true,
        default:null
    },
    googleId:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:false
    },
    isBlocked:{
     type:Boolean,
     default:false
    },
    idAdmin:{
        type:Boolean,
        default:false
    
    },
    cart:[{
        type:schema.Types.objectId,
        ref:"Cart",
    }],
    wallet:{
        type:Number,
        default:0,
    },
    wishlist:[{
        type:Schema.Types.objectId,
        ref:"Wishlist"
    }],
    orderHistory:[{
        type:Schema.Types.objectId,
        ref:"Order"
    }],
    createdOn:{
        type:Date,
        default:Date.now
    },
    referelCode:{
        type:String
    },
    redeemed:{
        type:Boolean
    },
    redeemedUsers:{
        type:schema.Types.objectId,
        ref:"user"
    },
    searchHistory:{
        category:{
            type:schema.Types.objectId,
            ref:"Category"
        },
        brand:{
            type:"string"
        },
        searchOn:{
            type:Date,
            default:Date.now
        }
    }

})
const User=mongoose.model("User",userSchema);
module.exports = User;