import React from 'react';
import { useNavigate, Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracki uppercase dark:text-violet-400">Pricing</span>
            <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {/* ... Rest of the pricing section */}
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Beginner</h4>
						<span class="text-6xl font-bold">Free</span>
					</div>
					<p class="mt-3 leadi dark:text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul class="flex-1 mb-6 dark:text-gray-400">
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" class="inline-block px-5 py-3 font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900">Get Started</button>
				</div>
			</div>
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-400 dark:text-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Pro</h4>
						<span class="text-6xl font-bold">$24
							<span class="text-sm tracki">/month</span>
						</span>
					</div>
					<p class="leadi">Morbi cursus ut sapien sit amet consectetur.</p>
					<ul class="flex-1 space-y-2">
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Everything in Free</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Phasellus tellus</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Praesent faucibus</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Aenean et lectus blandit</span>
						</li>
					</ul>
					<button type="button" class="inline-block px-5 py-3 font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900">Get Started</button>				</div>
			</div>
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Team</h4>
						<span class="text-6xl font-bold">$72
							<span class="text-sm tracki">/month</span>
						</span>
					</div>
					<p class="leadi dark:text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p>
					<ul class="space-y-2 dark:text-gray-400">
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Everything in Pro</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Fusce sem ligula</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Curabitur dictum</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Vivamus ut lectus ex</span>
						</li>
					</ul>
					<button type="button" class="inline-block px-5 py-3 font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900">Get Started</button>				</div>
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
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                {/* ... SVG path for the first social media icon */}
				<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* ... Repeat for other social media icons */}
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

export default Pricing;
