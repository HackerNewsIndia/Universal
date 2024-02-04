// FAQs.js
import React from 'react';

const FaqItem = ({ question, answer }) => (
  <div className="text-left mb-4"> {/* Use mb-4 for margin-bottom */}
    <h3 className="text-xl font-bold mb-2">{question}</h3> {/* Use text-xl for larger text, font-bold for bold text, mb-2 for margin-bottom */}
    <p className="text-gray-700">{answer}</p> {/* Use text-gray-700 for a darker gray text */}
  </div>
);

const FaqList = ({ faqs }) => (
  <div>
    {faqs.map((faq, index) => (
      <FaqItem key={index} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);

const Faqs = () => {
  const faqsData = [
    {
      question: 'What is this platform about?',
      answer: 'Our platform enables you to effortlessly create a personalized digital presence through features like DiaryBlog, Ask, My Thoughts, TypeIt, and Follow. These components cater to various forms of self-expression, content creation, and community engagement.',
    },
    // Add more FAQ items as needed
    {
        question: ' How does DiaryBlog work?',
        answer:'DiaryBlog is designed for writing and publishing articles or posts online, allowing you to share your thoughts, opinions, and expertise on diverse topics. It provides a space to engage with your audience or community.'
    },
    {
        question:'What is the purpose of the "Ask" feature?',
        answer:'The "Ask" feature is designed for gathering opinions or feedback through surveys or questionnaires. It helps in understanding public sentiment and making informed decisions specific topics by engaging with individuals.'
        
    },
    {
        question:'What does "My Thoughts" entail?',
        answer:'"My Thoughts" is a feature for documenting personal experiences, thoughts, and emotions. You can choose to share these reflections publicly or keep them private. It serves as a space for self-expression and personal growth.'
    },
    {
        question:'What are "TypeIt" building blocks?',
        answer:'"TypeIt" consists of pre-made building blocks that function like Legos. You can easily stack them to construct your website in minutes. These building blocks are fully responsive and styled to ensure a stylish digital presence.'
    },
    {
        question:' What does "Follow" involve?',
        answer:'"Follow" includes full pages showcasing examples of what you can achieve using the building blocks available in our UI kit. It serves as a visual guide to inspire and demonstrate the creative possibilities of our platform.'
    },
    {
        question:'How user-friendly is the platform?',
        answer:' Our platform is designed for ease of use. With fully responsive components and a user-friendly interface, you can structure your Blog, Poll, and Personal Journal with just a few clicks, making the process creating your digital self-expression quick and enjoyable.'
        
    },
    {
        question:' Can I customize my digital space?',
        answer:'Absolutely! The platform offers customization options within the building blocks, allowing you to personalize your digital space according to your preferences and style.'
    },
    {
        question:'Is there a learning curve to using this platform?',
        answer:'No, the platform is user-friendly, and you can create your digital self-expression without any technical expertise. The components are designed to be intuitive, making the process quick and accessible for users of all levels.'
    },
    
  ];

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2> {/* Use text-3xl for larger heading, font-bold for bold text, mb-4 for margin-bottom */}
      <FaqList faqs={faqsData} />
    </div>
  );
};

export default Faqs;
