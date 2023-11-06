import React, { useEffect, useState } from 'react';

const Blog = () => {
   
  console.log('1.Program started in Blog Comp');
  const [topicName, setTopicName] =  useState('React Hook Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  console.log('2. Before use effect in blog comp');
  // In useEffect hook, first param: effect , second param: dependent list
  useEffect ( () => {
    // Runs after every initial rendering
    // and also upon state update as well -- only if dep changed
    console.log('4. Inside useEffect');
    //This is an alternative to lifecycle hooks ( componentDidMount and componentDidUpdate)
    // Ideal place for your REST API calls
    document.title = topicName;
  }, [ topicName ]); // second argument is dependancy, It can be an array -- it is optional
  // If the dependancy is changed by any means, then effect callback will be called
  
  const handleChangeTopic = () => {
    console.log('5. Inside handleChangeTopic');
    setTopicName('Demo of useEffect and useState Hook');
  };

  const handleUpdatePublishedDate = () => {
    setPublishedDate(new Date());
  };

  console.log('3.Program ended in Blog comp');

  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type='button' onClick={handleChangeTopic}>Change Topic</button>

      <p>Published Date: {publishedDate.toString()}</p>
      <button type='button' onClick={handleUpdatePublishedDate}>Updated Published Date</button>
    </div>
  );
};

export default Blog;