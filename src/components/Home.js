import React, { Suspense } from "react";
import Product from "./Products";
import Testimonials from "./Testimonials";
import "./Home.css";

const Counter = React.lazy(() => import("counter/Counter"));

const Home = () => {
  const products = [
    {
      id: 1,
      name: "DiaryBlog",
      description: "Create a new DiaryBlog",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBFQ5_pVKac7dne5d0mnA8q9sV1e14PLnZA&usqp=CAU",
      price: 19.99,
    },
    {
      id: 2,
      name: "TypeIt",
      description: "Pen your opinion here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vff3FoYwHFWZUueBVNWMumO2nG09IgF-3A&usqp=CAU",
      price: 29.99,
    },
    {
      id: 3,
      name: "Ask",
      description: "Poll your opinion here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiKuQD1roBYu8L_aLOt4ZvytuNFNMRWmtZw&usqp=CAU",
      price: 29.99,
    },
    {
      id: 4,
      name: "Follow",
      description: "Get to know your followers here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H4inCxRkr6GQgH6c8KmQtW52sCvfBQgLeBnpsf7RTER5T2BngbHBB92VAiMe74QF7V0&usqp=CAU",
      price: 1.0,
    },
  ];
  const chunkArray = (array, size) => {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };

  // Decide on chunk size based on number of products
  let chunkSize = 3;
  if (products.length === 4) {
    chunkSize = 2;
  } else if (products.length === 5) {
    chunkSize = 3; // it will automatically split to 3 and 2
  }

  const chunkedProducts = chunkArray([...products], chunkSize);
  return (
    <div className="home_div">
      {/* <h2>Welcome to Universe </h2> */}

      <Suspense fallback={"loading..."}>
        <Counter />
      </Suspense>

      <p className="home_para">Web Components that just works !</p>
      <div className="home_container">
        {chunkedProducts.map((chunk, index) => (
          <div className="home_row row" key={index}>
            {chunk.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ))}
        <div className="home_testimonials">
          <h2 className="testimonial-heading">
            Don't Take Our Words See Who Are Using Ore Web Products
          </h2>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
