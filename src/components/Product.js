import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

//import "./Product.css";

const Product = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col p-6">
          <h2 className="py-4 text-3xl font-bold text-center">Let's Start DiaryBlog</h2>
          {/* ... (Your existing HTML code for the steps) ... */}
          <div class="divide-y dark:divide-gray-700">
			<div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div class="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-16 h-16">
						<path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
						<path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
						<path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
					</svg>
				</div>
				<div class="flex flex-col justify-center max-w-3xl  col-span-full lg:col-span-3 lg:text-left">
					<span class="text-sm tracki uppercase dark:text-violet-400">Step 1 - DiaryBlog Space</span>
					<span class="text-xl font-bold md:text-2xl">Create DiaryBlog Space</span>
					<span class="mt-4 dark:text-gray-300">Your Own Space to for your followers. Bootstrap your Community of followers.</span>
				</div>
			</div>
			<div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div class="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-16 h-16">
						<path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
						<path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
					</svg>
				</div>
				<div class="flex flex-col justify-center max-w-3xl  col-span-full lg:col-span-3 lg:text-left">
					<span class="text-sm tracki uppercase dark:text-violet-400">Step 2 -  DiaryBlog Post</span>
					<span class="text-xl font-bold md:text-2xl">Publish DiaryBlog Post </span>
					<span class="mt-4 dark:text-gray-300">Publish DiaryBlog Post for your followers. Build a world class Blog experience </span>
				</div>
			</div>
			<div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div class="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-16 h-16">
						<path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
						<path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
					</svg>
				</div>
				<div class="flex flex-col justify-center max-w-3xl  col-span-full lg:col-span-3 lg:text-left">
					<span class="text-sm tracki uppercase dark:text-violet-400">Step 3 - Grow</span>
					<span class="text-xl font-bold md:text-2xl">Grow Follower</span>
					<span class="mt-4 dark:bg-gray-800 dark:text-gray-300">Keep expanding your followers for your space.</span>
				</div>
			</div>
			<div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div class="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-16 h-16">
						<polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
						<polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
						<polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
					</svg>
				</div>
				<div class="flex flex-col justify-center max-w-3xl  col-span-full lg:col-span-3 lg:text-left">
					<span class="text-sm tracki uppercase dark:text-violet-400">Step 4 - Monetize</span>
					<span class="text-xl font-bold md:text-2xl">Monetize</span>
					<span class="mt-4 dark:text-gray-300">Keep hitting follower and viewer count to earn.</span>
				</div>
			</div>
		</div>
        </div>
      </section>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-tight text-center">Sign up now</h1>
          <p className="text-xl font-medium text-center">Get your Blogging on Air!</p>
          {/* ... (Your existing HTML code for the sign-up section) ... */}
          <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
			<button class="px-8 py-3 text-lg font-semibold border rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
		</div>
        </div>
      </section>

     
        
      <Footer/>
    </div>
  );
}

export default Product;
