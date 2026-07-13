// ==============================
// KONFIGURASI TOKO
// ==============================

const WHATSAPP = "6283164008645"; // Ganti dengan nomor WhatsApp kamu
const SHOPEE = "https://shopee.co.id/"; // Ganti dengan link toko Shopee kamu

// ==============================
// DATA PRODUK
// ==============================

const PRODUCTS = [

    {
        id:1,
        name:"Kaos Crop Top Bratz",
        cat:"Atasan",
        price:60000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju1.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

    {
        id:2,
        name:"Kaos Crop Top Grafis Sacred",
        cat:"Atasan",
        price:60000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju2.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

    {
        id:3,
        name:"Kardigan Rajut Biru",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju3.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

    {
        id:4,
        name:"Kardigan Rajut Abu-abu",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju4.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:5,
        name:"Kaos Crop Top New York",
        cat:"Atasan",
        price:60000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju5.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:6,
        name:"Kardigan Rajut Merah",
        cat:"Atasan",
        price:30000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju6.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

    {
        id:7,
        name:"Beige Ribbed Drawstring Crop Top",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju7.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

    {
        id:8,
        name:"White Tom & Jerry Graphic Crop Top",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju8.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

    {
        id:9,
        name:"White Ringer T-Shirt Born Broke Die Rich",
        cat:"Atasan",
        price:70000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju9.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:10,
        name:"Navy Striped Knit Sweater Vest",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju10.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:11,
        name:"White Mardi Daisy Graphic Crop Top",
        cat:"Atasan",
        price:60000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju11.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:12,
        name:"White Snoopy F1 Racing Ringer T-Shirt",
        cat:"Atasan",
        price:60000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju12.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:13,
        name:"Black V-Neck Button-Up Cardigan",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju13.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:14,
        name:"Light Green V-Neck Oversized Knit Sweater",
        cat:"Atasan",
        price:25000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju14.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:15,
        name:"Dark Green Brasil Graphic Crop Top",
        cat:"Atasan",
        price:60000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju15.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:16,
        name:"Royal Blue Button-Up Cardigan",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju16.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:17,
        name:"Royal Blue Button-Up Cardigan",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju17.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:18,
        name:"Navy and Gray Striped Long-Sleeve Shirt",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju18.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:19,
        name:"Striped Long-Sleeve V-Neck Thermal Top",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju19.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:20,
        name:"White V-Neck Button-Up Knit Cardigan",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju20.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:21,
        name:"Black V-Neck Oversized Knit Sweater",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju21.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:22,
        name:"Black Long-Sleeve V-Neck Top with Floral Embroidery",
        cat:"Atasan",
        price:30000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju22.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    },

        {
        id:23,
        name:"Blue Button-Up Cardigan with Lace Back Detail",
        cat:"Atasan",
        price:40000,
        oldPrice:120000,
        size:"M",
        cond:"Like New",
        image:"images/baju23.jpeg",
        badge:"NEW",
        sold:false,
        shopee:"https://shopee.co.id/xxxxxxxx"
    }
];

// ==============================
// ELEMENT
// ==============================

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");
const menuButtons = document.querySelectorAll(".menu button");

let currentCategory = "Semua";

// ==============================
// FORMAT RUPIAH
// ==============================

function rupiah(number){

    return new Intl.NumberFormat("id-ID",{
        style:"currency",
        currency:"IDR",
        minimumFractionDigits:0
    }).format(number);

}

// ==============================
// CARD PRODUK
// ==============================

function productCard(product){

return `

<div class="card ${product.sold ? 'sold' : ''}">

    <div class="image-box">

    <button
        class="fav-btn"
        onclick="toggleFavorite(${product.id},this)">

        🤍

    </button>

        ${product.badge ? `
        <span class="badge">
            ${product.badge}
        </span>
        ` : ""}

        ${product.sold ? `
        <span class="sold-badge">
            SOLD OUT
        </span>
        ` : ""}

        <img
            src="${product.image}"
            onclick="openLightbox('${product.image}')"
            alt="${product.name}">

    </div>

    <div class="info">

        <h3>${product.name}</h3>

        <div class="price-box">

            ${
                product.oldPrice
                ?
                `<span class="old-price">
                    ${rupiah(product.oldPrice)}
                </span>`
                :
                ""
            }

            <span class="price">

                ${rupiah(product.price)}

            </span>

        </div>

        <div class="detail">
            Ukuran : ${product.size}
        </div>

        <div class="detail">
            Kondisi : ${product.cond}
        </div>

        <div class="button-group">

            <a
            class="wa"
            target="_blank"
            href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
`Halo Admin,
Saya ingin membeli:

${product.name}

Harga : ${rupiah(product.price)}`
            )}">

            WhatsApp

            </a>

            <a
            class="shop"
            target="_blank"
            href="${product.shopee}">

            Shopee

            </a>

        </div>

    </div>

</div>

`;

}

// ==============================
// RENDER PRODUK
// ==============================

function renderProducts(){

    let data = PRODUCTS;

    if(currentCategory !== "Semua"){

        data = data.filter(item => item.cat === currentCategory);

    }

    const keyword = searchInput.value.toLowerCase().trim();

    if(keyword !== ""){

        data = data.filter(item =>
            item.name.toLowerCase().includes(keyword)
        );

    }

    if(data.length === 0){

        productGrid.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                Produk tidak ditemukan.
            </h2>
        `;

        return;

    }

    productGrid.innerHTML = data.map(productCard).join("");

}

// ==============================
// FILTER KATEGORI
// ==============================

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        menuButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        if(button.id === "allBtn"){

            currentCategory = "Semua";

        }else{

            currentCategory = button.dataset.cat;

        }

        renderProducts();

    });

});

// ==============================
// SEARCH
// ==============================

searchInput.addEventListener("input", renderProducts);

// ==============================
// LIGHTBOX
// ==============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

function openLightbox(image){

    lightbox.style.display = "flex";

    lightboxImg.src = image;

}

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

// ==============================
// LOAD AWAL
// ==============================

renderProducts();

//==============================
// FAVORITE
//==============================

let favorites =
JSON.parse(localStorage.getItem("favorite")) || [];

function toggleFavorite(id,btn){

if(favorites.includes(id)){

favorites =
favorites.filter(item=>item!=id);

btn.classList.remove("active");

btn.innerHTML="🤍";

}else{

favorites.push(id);

btn.classList.add("active");

btn.innerHTML="❤️";

}

localStorage.setItem(

"favorite",

JSON.stringify(favorites)

);

}

//============================
// PROMO
//============================

setTimeout(()=>{

promo.style.display="flex";

},2000);

closePromo.onclick=()=>{

promo.style.display="none";

};