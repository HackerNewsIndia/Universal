import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Product from "./Product";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";
import MetaTags from 'react-meta-tags';

//import "./home.css"; // If you have additional custom styles

const Home = () => {
  const products = [
    // ... (unchanged)
  ];

  const chunkArray = (array, size) => {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };

  // Decide on chunk size based on the number of products
  let chunkSize = 3;
  if (products.length === 4) {
    chunkSize = 2;
  } else if (products.length === 5) {
    chunkSize = 3; // it will automatically split to 3 and 2
  }

  const chunkedProducts = chunkArray([...products], chunkSize);

  return (
   
	
    <div className="home_div">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div
            className="w-full lg:w-1/3 h-64 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://source.unsplash.com/random/640x480')",
            }}
          ></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mb-8 dark:text-violet-400"
            >
              {/* Add your SVG path data here */}
            </svg>
            <h2 className="text-3xl font-semibold leadi">
              Universe Modern solutions to digital self-expression
            </h2>
            <p className="mt-4 mb-8 text-md">
              Pen your Ideas! Through writing articles (blogging), gathering opinions (polling), or documenting personal experiences (journaling)
            </p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900 border">
              Get started
            </button>
          </div>
        </div>
      </section>

      <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          <span className="text-sm font-semibold tracking uppercase dark:text-violet-400">shortcut to your dream</span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">Create a stylish digital self-expression in minutes</h2>
          <p className="mt-4 mb-8 text-md">
            Get a jumpstart to creating your new digital self-expression! With our fully responsive and carefully styled components, you can get the structure of your Blog, Poll, and Personal Journal done with just a couple of clicks.
          </p>
        </div>
    <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3">
  {/* Similar structure for the other div elements */}
  <div className="flex flex-col px-8 py-6">
    <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">DiaryBlog</h2>
    <p className="flex-1 mb-4 text-base leadi dark:text-gray-400">Writing and publishing articles or posts online, sharing thoughts, opinions, and expertise on various topics to engage with an audience or community.</p>
    <Link to="/product" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
      <span>Learn More</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link>
  </div>
    
    
    
    
    
    
    <div class="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
			<h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">Ask</h2>
			<p class="flex-1 mb-4 text-base leadi dark:text-gray-400">Gathering opinions or feedback from individuals through surveys or questionnaires to gauge public sentiment or make informed decisions on specific topics.</p>
			<Link to="/product" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
      <span>Learn More</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link>
		</div>
		<div class="flex flex-col px-8 py-6">
			<h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">My Thoughts</h2>
			<p class="flex-1 mb-4 text-base leadi dark:text-gray-400">Documenting personal experiences, thoughts, and emotions in a private or public format, providing a space for reflection, self-expression, and personal growth.</p>
			<Link to="/product" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
      <span>Learn More</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link>
		</div>
    
		<div class="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
			<h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">TypeIt</h2>
			<p class="flex-1 mb-4 text-base leadi dark:text-gray-400">Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.</p>
			<Link to="/product" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
      <span>Learn More</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link>
		</div>
		<div class="flex flex-col px-8 py-6">
			<h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">Follow</h2>
			<p class="flex-1 mb-4 text-base leadi dark:text-gray-400">Full pages that showcase pieces of what you can achieve with the building blocks that are in this UI kit.</p>
			<Link to="/product" className="inline-flex items-center space-x-2 text-sm dark:text-violet-400">
      <span>Learn More</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link>
		</div>
		
        </div>
      </section>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Followers</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">350</h2>
        <p class="leading-relaxed">Blog Space</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4K</h2>
        <p class="leading-relaxed">Blog Post</p>
      </div>
    </div>
  </div>
</section>
      

     
      <Footer/>
    </div>
 
  );
};

export default Home;
