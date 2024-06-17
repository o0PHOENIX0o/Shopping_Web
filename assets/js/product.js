

window.onload = function () {
    const url = new URL(window.location.href);
    const type = url.searchParams.get("type");
    var title = document.getElementById('title');

    var collection;
    var wp_url;

    var message = "give yourself a gift: ";
    var encodedMessage = encodeURIComponent(message);

    var wpMsg = document.getElementById('wp-msg');
    if (wpMsg) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            wp_url = `https://wa.me/?text=${encodedMessage}`;
        } else {
            wp_url= `https://web.whatsapp.com/send?text=${encodedMessage}`;
        }
    }

    if (type === 'menswear') {
        collection = 'men';
        title.innerHTML = "Men's Wear";
    } else if (type === 'womenswear') {
        collection = 'women';
        title.innerHTML = "Women's Wear";
    } else if (type === 'kidswear') {
        collection = 'kids';
        title.innerHTML = "Kid's Wear";
    } else {
        collection = 'All'
        title.innerHTML = "All Products";
    }

    const res = [
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-01.jpeg`,
            "rating": 5,
        },
        {
            "name": "Printed Shirts",
            "product_img": `./assets/images/products/${collection}/product-02.jpeg`,
            "rating": 2,
        },
        {
            "name": "Stylish Shirts",
            "product_img": `./assets/images/products/${collection}/product-03.jpeg`,
            "rating": 3,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-04.jpeg`,
            "rating": 4,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-05.jpeg`,
            "rating": 4,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-06.jpeg`,
            "rating": 2,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-07.jpeg`,
            "rating": 3,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-08.jpeg`,
            "rating": 5,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-09.jpeg`,
            "rating": 4,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-10.jpeg`,
            "rating": 3,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-11.jpeg`,
            "rating": 1,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-12.jpeg`,
            "rating": 4,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-13.jpeg`,
            "rating": 3,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-14.jpeg`,
            "rating": 4,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-15.jpeg`,
            "rating": 5,
        },
        {
            "name": "Summer Shirts",
            "product_img": `./assets/images/products/${collection}/product-16.jpeg`,
            "rating": 2,
        }
    ];

    for (let i = 1; i <= res.length; i++) {
        createProduct(i, wp_url);
    }
    UpdateProducts(res);

}




function createProduct(Id,url) {
    var main_div = document.createElement('div');
    main_div.className = 'scrollbar-item';

    var card = document.createElement('div');
    card.className = 'shop-card';

    var imgDiv = document.createElement('div');
    imgDiv.className = 'card-banner img-holder';
    imgDiv.style.setProperty('--width', '540');
    imgDiv.style.setProperty('--height', '720');

    main_div.appendChild(card);
    card.appendChild(imgDiv);



    var img = document.createElement('img');
    img.id = `Proimg${Id}`;
    img.width = 540;
    img.height = 720;
    img.loading = 'lazy';
    img.alt = 'Facial cleanser';
    img.className = 'img-cover';

    imgDiv.appendChild(img);

    var div = document.createElement('div');
    div.className = 'card-actions';


    var button = document.createElement('button');
    button.className = 'action-btn';
    button.setAttribute('aria-label', 'add to cart');

    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('data-action', 'share/whatsapp/share');
    link.target = '_blank';

    var ionIcon = document.createElement('ion-icon');
    ionIcon.setAttribute('name', 'share-social-outline');
    ionIcon.setAttribute('aria-hidden', 'true');

    link.appendChild(ionIcon);
    button.appendChild(link);

    div.appendChild(button);

    imgDiv.appendChild(div);
    
    var cardContent = document.createElement('div');
    cardContent.className = 'card-content';


    var h3Element = document.createElement('h3');

    var cardTitleLink = document.createElement('a');
    cardTitleLink.href = '#';
    cardTitleLink.className = 'card-title';
    cardTitleLink.id = `title${Id}`;

    h3Element.appendChild(cardTitleLink);


    var cardRating = document.createElement('div');
    cardRating.className = 'card-rating';

 
    var ratingWrapper = document.createElement('div');
    ratingWrapper.className = 'rating-wrapper';
    ratingWrapper.id = `star${Id}`;
    ratingWrapper.setAttribute('aria-label', '5 star rating');

    cardRating.appendChild(ratingWrapper);
   
    cardContent.appendChild(h3Element);
    cardContent.appendChild(cardRating);


    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    document.getElementById('container').appendChild(main_div);
}



function UpdateProducts(data) {

    for (let i = 1; i <= data.length; i++) {

        document.getElementById(`Proimg${i}`).src = data[i-1]['product_img'];
        document.getElementById(`title${i}`).textContent = data[i-1]['name'];
        
        var stars = document.getElementById(`star${i}`)
        
        for (let j = 1; j <= data[i - 1]['rating']; j++) {
        
            var starIcon = document.createElement('ion-icon');
            starIcon.setAttribute('name', 'star');
            starIcon.setAttribute('aria-hidden', 'true');
            stars.appendChild(starIcon);
        }
    }

}




