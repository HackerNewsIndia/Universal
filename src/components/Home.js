import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Product from "./Product";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Faq from "./Faq";
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
      

      <footer className="border-t border-gray-200">
        <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0">
            {/* Similar structure for the social media icons */}
            <a>
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6 text-blue-300" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6 text-pink-400" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-6 h-6 text-blue-500" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
