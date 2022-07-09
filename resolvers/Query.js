exports.Query = {
  hello: () => {
    return ['Hello', 'world', 'test'];
  },
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, { products }) => {
    const product = products.find((product) => product.id === id);
    return product;
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    const category = categories.find((category) => category.id === id);
    return category;
  },
};
