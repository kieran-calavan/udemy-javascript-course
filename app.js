class Product {
  // title = "DEFAULT";
  // imageUrl;
  // price;
  // description;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log(this.product);
    console.log("This adds the product to your cart!");
  }

  render() {
    const prodElement = document.createElement("li");
    prodElement.className = "product-item";
    prodElement.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
      </div>
      `;
    const addCartBtn = prodElement.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
    return prodElement;
  }
}

class ProductList {
  products = [
    new Product("A Pillow", "https://images-us-prod.cms.dynamics365commerce.ms/cms/api/cncgmclkfv/imageFileData/search?fileName=/Products%2F142955P_000_001.png", "A super soft pillow", 19.99),
    new Product("A Carpet", "https://yanadecor.my/wp-content/uploads/2021/02/IMG_20201224_113931_715-1.jpg", "A beautiful carpet", 89.95),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodElement = productItem.render();
      prodList.append(prodElement);
    }
    renderHook.append(prodList);
  }
}

// console.log(new Product());

const productList = new ProductList();
productList.render();
