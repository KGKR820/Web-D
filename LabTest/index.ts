interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
}
function printProductDetails(product: Product) {
    console.log(product.id);
  console.log(product.name);
  console.log(product.price);
if(product.category !== undefined){
    console.log(product.category);
}
}
let p1: Product = {
  id: 1,
  name: "product1",
  price: 90,
};
let p2: Product = {
  id: 2,
  name: "product2",
  price: 280,
  category: "Soap",
};
printProductDetails(p2);
printProductDetails(p1);
export{}
