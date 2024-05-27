const product = [
    {
        id:0,
        image:'Flip4.jpeg',
        title:'Samsumg z-flip',
        price : 120,

    },
    {
        
        id:1,
        image:'Fold4.jpeg',
        title:'Samsumg -fold',
        price : 170,


    },
    {
        
        id:2,
        image:'note.jpeg',
        title:'samsung note 23 ultra',
        price : 230,


    },

    {
        
        id:3,
        image:'iphone-x.jpeg',
        title:'iphone x',
        price : 210,


    },

    {
        
        id:4,
        image:'watch.png',
        title:'samsung watch',
        price : 130,


    },

    {
        
        id:5,
        image:'tag.jpeg',
        title:'Apple tag',
        price : 100,


    }
];

const catogories = [...new Set(product.map((item)=>
{return item}))]

let i=0;
document.getElementById('root').innerHTML = catogories.map((item)=>
{
    var{image , title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...catogories[a]});
    displaycart();

}
function delElement(a){
    cart.splice(a ,1);
    displaycart();
}

function displaycart(a){
    let j=0 , total=0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$"+0+"0.00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image , title , price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$"+total+"0.00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>` +
                "<i class='fa-solid fa-trash'   onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}