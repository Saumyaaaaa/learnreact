import React from "react";
const LearnToUseMap = () => {
  const products = [
    {
      id: 1,
      title: "MacBook Pro",
      category: "Laptops",
      price: 100000.0,
      quantity: 2,
      description: "A high-performance laptop.",
      manufactureDate: "2023-05-15T08:30:00",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Nike",
      category: "Running Shoes",
      price: 5000,
      quantity: 3,
      description: "Running shoes designed for speed and comfort.",
      manufactureDate: "2023-02-20T14:45:00",
      isAvailable: true,
    },
    {
      id: 3,
      title: "Python",
      category: "Books",
      price: 500,
      quantity: 1,
      description: "A language for AI",
      manufactureDate: "1925-04-10T10:10:00",
      isAvailable: false,
    },
    {
      id: 4,
      title: "Javascript",
      category: "Books",
      price: 700,
      quantity: 5,
      description: "A language for Browser",
      manufactureDate: "1995-12-04T12:00:00",
      isAvailable: false,
    },
    {
      id: 5,
      title: "Dell XPS",
      category: "Laptops",
      price: 120000.0,
      quantity: 2,
      description: "An ultra-slim laptop with powerful performance.",
      manufactureDate: "2023-04-25T09:15:00",
      isAvailable: true,
    },
  ];
  let category = products.map((value, index) => {
    return value.category;
  });
  let getTotalPrice = () => {
    let availableProduct = products.filter((value, i) => {
      if (value.isAvailable === true) {
        return true;
      } else {
        return false;
      }
    });
    let totalPrice = availableProduct.reduce((pre, cur) => {
      return pre + cur.price;
    }, 0);
    return totalPrice;
  };
  // let totalPrice=availableProduct.reduce((pre,cur)=>{
  //   return pre+cur.price
  // },0)
  // return totalPrice
  // }
  let uniqueCategory = [...new Set(category)];
  return (
    <div>
      <br />
      <h1>the product in our shop(unique category)</h1>
      {uniqueCategory.map((value, index) => {
        return <div>{value}</div>;
      })}
      <br />
      <h1>the products in our shop(Unique Category)</h1>
      {[...new Set(products.map((product) => product.category))]}
      <div>
        <h1>Products are:</h1>
        <div>
          {products.map((value, i) => {
            return <div> {value.title}</div>;
          })}
          <h2>Product in our shop:</h2>
          {products.map((value, i) => {
            return (
              <div>
                {value.title} costs {value.price} and its category is{" "}
                {value.category}
              </div>
            );
          })}
          <h2>Products whose price is greater than 2000</h2>
          {products.map((value, i) => {
            if (value.price > 2000)
              return (
                <div>
                  {value.title} costs {value.price} and its category is{" "}
                  {value.category}
                </div>
              );
          })}
          <h2>products who category are books</h2>
          <div>
            {products
              .filter((value, i) => value.category === "Books")
              .map((value, i) => {
                return (
                  <div>
                    {value.title} costs NRS {value.price} and its category is{" "}
                    {value.category}
                  </div>
                );
              })}
            <h2>
              total price of all products :
              {products.reduce((prev, curr) => prev + curr.price, 0)}
            </h2>
            <h2>Price of each item</h2>
            <div>
              {products.map((value, i) => {
                return (
                  <div>
                    <div>
                      {value.title} costs {value.price}
                    </div>
                  </div>
                );
              })}
              Total price of all products :
              {products.reduce((prev, curr) => prev + curr.price, 0)}
            </div>
          </div>
          <h2>Manufactured at</h2>
          <div>
            {products.map((value, i) => {
              return (
                <div>
                  {value.title} is manufactured at {value.manufactureDate}
                </div>
              );
            })}
          </div>
          <h3>Product title which are available</h3>
          {products.map((value, i) => {
            if (value.isAvailable === true) {
              return <div>these are the products available {value.title}</div>;
            }
          })}
          <h2>Display a total price of product which is available</h2>
          <div>
            <p>the total price is{getTotalPrice()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearnToUseMap;
