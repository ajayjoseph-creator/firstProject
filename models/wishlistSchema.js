

const mongoose = required('mongoose');
const {Schema} = mongoose;

const wishlistSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    products:[{
productId:{
    type:Schema.Types.ObjectId,
    ref:ProductId,
    require:true
},
addedOn:{
    type:Date,
    default:Date.now
}
    }]
})

const wishlist = mongoose.model('wishlist',wishlistSchema)
module.exports=wishlist;
