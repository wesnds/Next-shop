import { fetchJson } from "./api";

const { CMS_URL } = process.env;

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

//change for internationalization API to format currencies
function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: "$" + product.price.toFixed(2),
    image: CMS_URL + product.picture.url,
  };
}
