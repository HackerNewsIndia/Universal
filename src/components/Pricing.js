import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";


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
						<h4 class="text-2xl font-bold">Basic (Free):</h4>
						<span class="text-2xl font-bold">Tier:</span>
					</div>
					{/* <p class="mt-3 leadi dark:text-gray-400">Access to DiaryBlog, Ask, My Thoughts, TypeIt, and Follow components.</p> */}
					<ul class="flex-1 mb-6 dark:text-gray-400">
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span> DiaryBlog, Newsletter, Follow, Comment, Polls, Questionnaires: Limited features with basic customization.
</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Email Marketing: Basic tools with limited features.
</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Social Media Manager: Basic tools with limited capabilities.
</span>
						</li>
						
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Business Message Manager: Basic tools for managing business messages.

</span>
						</li>
					</ul>
					<button type="button" class="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-gray-300 hover:bg-gray-400">Price : Free - 5 days</button>
				</div>
			</div>
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
			<div class="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Standard/Professional</h4>
						<span class="text-2xl font-bold">Tier:
							
						</span>
					</div>
					{/* <p class="leadi">Full access to DiaryBlog, Ask, My Thoughts, TypeIt, and Follow components.
</p> */}
					<ul class="flex-1 mb-6 dark:text-gray-400">
					<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>DiaryBlog, Newsletter, Follow, Comment, Polls, Questionnaires: Expanded features with advanced customization and priority support.
</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Email Marketing: Enhanced features including automation, segmentation, and analytics.
</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Social Media Manager: Advanced features including analytics, team collaboration, and scheduled posting.
</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Business Message Manager: Advanced features including chatbots, CRM integration, and API access.
</span>
						</li>
						{/* <li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Access to premium resources and tutorials for self-improvement.

</span>
						</li> */}
					</ul>
					<button type="button" class="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-gray-300 hover:bg-gray-400">Price : Pay Per Use for each channel
</button>				</div>
			</div>
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Enterprise:</h4>
						<span class="text-2xl font-bold"> Tier:
						</span>
					</div>
					{/* <p class="leadi dark:text-gray-400">All features included in the Pro plan.
</p> */}
					<ul class="space-y-2 dark:text-gray-400">
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span> DiaryBlog, Newsletter, Follow, Comment, Polls, Questionnaires: Custom solutions with dedicated account management and premium support.

</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span> Email Marketing: Custom solutions for large-scale campaigns and 24/7 support.
</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Social Media Manager: Tailored solutions for enterprise-level social media management, brand monitoring, and compliance.
</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Business Message Manager: Custom solutions with advanced security features and dedicated support.
</span>
						</li>
						{/* <li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>API access for seamless integration with existing systems.
</span>
						</li> */}
					</ul>
					<button type="button" class="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-gray-300 hover:bg-gray-400">Price : Contact us </button>				</div>
			</div>
          </div>
        </div>
      </section>

      
      <Footer/>
    </div>
  );
};

export default Pricing;
