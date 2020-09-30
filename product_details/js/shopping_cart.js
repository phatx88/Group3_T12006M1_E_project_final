//Shopping card using bootstrap 4 and Javascript - Code reference from code-pen API

// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(name, price, count, img) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count, img) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count, img);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function (event) {
    event.preventDefault();
    var img = $(this).data('img');
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
});

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();  
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "Your cart is empty";
    for (var i in cartArray) {
        output += "<tr>"
            + "<td>" + "<img style='width: 1.75rem; height: 2.5rem; display:block; margin: auto' src=../img" + cartArray[i].img + ".jpg alt='thumbnail'></td>"
            + "<td><b>" + cartArray[i].name + "</b></td>"
            + "<td><b>" + "$" + cartArray[i].price + "</b></td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary p-0' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' min='1' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon p-0' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + "><i class='fa fa-trash' aria-hidden='true'></i></button></td>"
            + " = "
            + "<td><b>" + "$" + cartArray[i].total + "</b></td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
    //adding shopping cart only display when have at least one item
    if (shoppingCart.totalCount() == 0)
    {
    $('span.total-count').addClass('d-none');
    }
    else
    $('span.total-count').removeClass('d-none');
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();


//Add to cart animation source from code pen
var AddToCart = document.getElementById('AddToCart');

var addItem = function() {
	
	AddToCart.classList.add('Loading')
	
	window.setTimeout(function() {
		
		AddToCart.classList.remove('Loading')
		
		Notify.Add('Item added to cart.')
		
	}, 1500)
	
}

var Notify = {
	
	Remove: function() {
		
		var Notification = document.querySelector('.Notify')
		
		Notification.classList.add('hide')
		
		setTimeout(function() {
			
			Notification.parentNode.removeChild(Notification)
			
		}, 2000)
		
	},
	
	Add: function(msg) {
		
		var check = document.querySelector('.Notify')
		var notification = this.Create(msg)
		var wrapper = document.getElementById('wrapper')
		
		if (check) {
			
			this.Remove()
			
		}
		
		document.body.insertBefore(notification, wrapper.nextSibling)
		
		setTimeout(this.Remove, 3000)
		
	},
	
	Create: function(msg) {
		
		var wrapper = document.createElement('div')
		var content = document.createElement('p')
		var text = document.createTextNode(msg)
		
  	content.appendChild(text)
  	wrapper.appendChild(content)
		
		wrapper.classList.add('Notify')
		
		return wrapper
		
	}
	
}

AddToCart.addEventListener('click', addItem)