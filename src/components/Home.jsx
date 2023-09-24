import React from "react";
import Product from "./Products";
import Testimonials from "./Testimonials";
import "./Home.css";

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
    // {
    //   id: 3,
    //   name: "Ask",
    //   description: "Pen your opinion here",
    //   //   imageUrl: "path_to_another_image.jpg",
    //   price: 29.99,
    // },
  ];
  return (
    <div className="home_div">
      {/* <h2>Welcome to Universe </h2> */}
      <p className="home_para">Web Components that just works !</p>
      <div className="home_container">
        <div className="home_row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
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
