const products = [
    {
      id: '1',
      name: 'Iphone 12',
      price: 1000,
      category: 'celular',
      img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a047mzkfaro/gallery/ar-galaxy-a04s-a047-sm-a047mzkfaro-536822793?$2052_1641_PNG$',
      stock: 25,
      description: 'Descripción de Iphone 12'
    },
    {
      id: '2',
      name: 'Samsung 521',
      price: 868,
      category: 'celular',
      img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a047mzkfaro/gallery/ar-galaxy-a04s-a047-sm-a047mzkfaro-536822793?$2052_1641_PNG$',
      stock: 15,
      description: 'Descripción de Samsung 521'
    },
    {
      id: '3',
      name: 'Ipad 8va generación',
      price: 1280,
      category: 'tablet',
      img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a047mzkfaro/gallery/ar-galaxy-a04s-a047-sm-a047mzkfaro-536822793?$2052_1641_PNG$',
      stock: 7,
      description: 'Descripción de Ipad 8va generación'
    }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500) 
    })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500) 
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsInCategory = products.filter(prod => prod.category === categoryId);
      resolve(productsInCategory);
    }, 500);
  });
};