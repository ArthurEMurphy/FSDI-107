var catalog = [
    {
        _id: "5f40a6baac77a903d8f682c6",
        price: 10.01,
        stock: 33,
        title: "Small Basket",
        image: "small_basket_300x200.jpg",
        discount: 0,
        category: "berries",
      },
      {
        _id: "5f40a6ba41d9e5044ced586c",
        price: 20.01,
        stock: 11,
        title: "Medium Basket",
        image: "medium_basket.jpg",
        discount: 0,
        category: "berries",
      },
      {
        _id: "5f40a6baa9e6e22fa1d5fac4",
        price: 30.01,
        stock: 6,
        title: "Large Basket",
        image: "big_basket.jpg",
        discount: 0,
        category: "berries",
      },
      {
        _id: "5f40a6bbb9e6e22fa1df120",
        price: 8.00,
        stock: 11,
        title: "Blueberry Jam",
        image: "jam.jpg",
        discount: 0,
        category: "goods",
      },
      {
        _id: "5f40a6bbb9e6e22fa1df123",
        price: 13.00,
        stock: 7,
        title: "Blueberry Gelato",
        image: "blueberry_gelato.jpg",
        discount: 0,
        category: "goods",
      },
    ]


    class DataService{
      getCatalog(){
        //some instructions to retrieve data from the actual server

        return catalog;
      }
    }

    export default DataService;