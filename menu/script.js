const menu = [
    {
      id: 1,
      title: "Brownie Cookies",
      category: "",
      price: 15.99,
      img: "./images/rav1.JPG",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Black Oxfords",
      category: "",
      price: 13.99,
      img: "./images/rav2.JPG",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Steak",
      category: "",
      price: 6.99,
      img: "./images/rav3.JPG",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Nutty Vanilla Cup D",
      category: "",
      price: 20.99,
      img: "./images/rav4.JPG",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Brownie Cake",
      category: "",
      price: 22.99,
      img: "./images/rav5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Brownie Icecream",
      category: "",
      price: 18.99,
      img: "./images/rav6.JPG",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Cup Cookies",
      category: "",
      price: 8.99,
      img: "./images/rav7.JPG",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Pebble'd Cupcake",
      category: "",
      price: 12.99,
      img: "./images/rav8.JPG",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Black Oxfords",
      category: "",
      price: 16.99,
      img: "./images/rav2.JPG",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Nutty Vanilla Cup D",
        category: "",
        price: 36.99,
        img: "./images/rav4.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "Brownie IceCream",
        category: "",
        price: 36.99,
        img: "./images/rav6.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 12,
        title: "Pebble'd Cupcake",
        category: "",
        price: 36.99,
        img: "./images/rav8.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 13,
        title: "Steak",
        category: "",
        price: 36.99,
        img: "./images/rav3.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 14,
        title: "Brownie Cake",
        category: "",
        price: 36.99,
        img: "./images/rav5.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 15,
        title: "Cup Cookies",
        category: "",
        price: 36.99,
        img: "./images/rav7.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 16,
        title: "Pebble'd Cupcake",
        category: "",
        price: 36.99,
        img: "./images/rav8.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 17,
        title: "Brownie Cookies",
        category: "",
        price: 36.99,
        img: "./images/rav1.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 18,
        title: "Brownie IceCream",
        category: "",
        price: 36.99,
        img: "./images/rav6.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 19,
        title: "Brownie Cake",
        category: "",
        price: 36.99,
        img: "./images/rav5.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
//rendering data in your html
const section = document.querySelector('section');
const buttonDiv = document.querySelectorAll("header ul")[0]

const itemButton = document.getElementById('itemButton')
console.log(itemButton)
// const shader = document.getElementById('shader')
// 
// let parDess = document.getElementsByClassName('cartBut')[0]
// const shader = document.getElementById('shader')
// console.log(parDess.classList)
// parDess.addEventListener('click', ()=>{
//     shader.classList.toggle();
// })
// for(const parDes of parDess){
//     parDes.addEventListener('click', ()=>{
//         shader.classList.toggle('.shader1');
//     })
// }
// console.log(parDess)

//load items 
window.addEventListener('DOMContentLoaded', ()=>{
    displayItems(menu);
    
    //set categories
    displayButtons()
    // for (parDes in oarDess){
    //     parDes.addEventListener('click', ()=>{
    //         if(parDes.innerContent != 'DROP'){
    //             parDes.innerContent == 'DROP';
    //         }
    //     })
    // })
});

//display buttons
function displayButtons(
    ){
        const categories = menu.reduce((values, item)=>{
            if(!values.includes(item.category)){
                values.push(item.category)
            }
            return values;
        }, ['OUR MENU']);
        let categoryButtons = categories.map((butt)=>{
            
            return `<li><button type="button" data-id=${butt}>${butt}</button></li>`;
        }).join("");
        buttonDiv.innerHTML = categoryButtons
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn)=>{
            btn.addEventListener('click', (key)=>{
                const category= key.currentTarget.dataset.id;
                const menuCat = menu.filter((menuItem)=>{
                    if(menuItem.category===category){
                        return menuItem;
                    }
                });
                if(category==="OUR MENU"){
                    displayItems(menu);
                }else{
                    displayItems(menuCat);
                }
            })
        })
    }
    
    
    
//filter

function displayItems(menuItems){
    
    let displayMenu = menuItems.map((item)=>{
        
        return `<article>
        <img class="image" src=${item.img} alt="">
        <div class="details">
        <h4 class="title">${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
        <div class='buyOpt'>
        <button id='itemButton'>Add to Cart</button>
        </div>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu
  }