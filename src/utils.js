import { faker } from "@faker-js/faker";

function generateProducts() {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    code: faker.commerce.product(),
    price: faker.commerce.price(),
    stock: faker.number.init,
    category: faker.commerce.department(),
    image: faker.image.url(),
  };
}

export { generateProducts };
