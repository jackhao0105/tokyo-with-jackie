/*
	Name App 	: Jack's Wed App. 
	Description	: About the photos in Tokyo
	Date		: Sep 27th 2019
	Language	: JavaScript
	Developer	: Jack Hao
*/

let count = 0 ;
const data = [
	{
		name: "Tsukishima",
		price: 30.00,
		url: 'http://www.stutler.cc/other/sketchbook/images/sales/ten_an_thumb.jpg'
	},
	{
		name: "Kawagoe",
		price: 30.00,
		url: 'http://www.stutler.cc/other/sketchbook/images/sales/kawagoe_tower_01_thumb.jpg'
	},
	{
		name: "Jimbocho",
		price: 30.00,
		url: 'http://www.stutler.cc/other/sketchbook/images/jimbocho_bldg_350.jpg'
	},
	{
		name: "Edo Castle",
		price: 30.00,
		url: 'http://www.stutler.cc/other/sketchbook/images/edojo_350_w.jpg'
	},
	{
		name: "Yanaka",
		price: 30.00,
		url: 'http://www.stutler.cc/other/sketchbook/images/sales/nezu_sembeiya_thumb.jpg'
	},
	{
		name: "Mukojima",
		price: 30.00,
		url: 'http://www.stutler.cc/other/sketchbook/images/mukojima_pub.jpg'
	},
]


// UI Class : Handle UI Tasks
class UI{
	static displayAll(){
		data.forEach( product => UI.addProductToList(product));

	}

	// static displayAll(){
	// 	data.forEach( product => UI.showName(product));

	// }

	static addProductToList(product){
		const list 		= document.querySelector('.product-list');
		const position 	= "afterEnd"
		const item 		= `
				<div class="product">
  					<div class="wrapper-image-product">
    					<a class="image-product" 
       							style="background-image: url('${product.url}');text-aglin:center; " href="./product/${product.name}.html"></a>
  					</div>
  
  					<div class="description">
    					<div class="artist-name">${product.name}</div>
    					<div class="price-product">$${product.price}.00</div>
  					</div>
				</div>
				`;

		list.innerHTML += item;
	}

	static showName(product){
		const h1 		= document.querySelector('.h1');
		const position 	= "afterEnd"
		const name 		= `
				<a href="http://www.stutler.cc/other/sketchbook/images/sales/ten_an_thumb.jpg">${product.name}</a>
				`;

		h1.innerHTML += name;
	}


	static submitButton(){
		const input = document.getElementById('input').value='';
	}

	static showBoxMenu(){
		console.log("love")
		const menuResponsive = document.querySelector('.menu-responsive');
		menuResponsive.classList.toggle("show")

	}

}

// Event: Dislay Work
document.addEventListener('DOMContentLoaded', UI.displayAll)
document.addEventListener('DOMContentLoaded', UI.displayName)

document.getElementById('submit').addEventListener('click', UI.submitButton);

document.querySelector('.icon-wrapper').addEventListener('click', UI.showBoxMenu);