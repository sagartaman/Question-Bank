const samplePosts = [
    {
      topic: "JavaScript",
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that retains access to its outer scope even after the outer function has finished executing."
    },
    {
      topic: "JavaScript",
      question: "What is the difference between var, let, and const?",
      answer: "var is function-scoped, let and const are block-scoped, and const cannot be reassigned."
    },
    {
      topic: "Node.js",
      question: "What is middleware in Express.js?",
      answer: "Middleware functions are functions that have access to the request and response objects and can modify them or end the request-response cycle."
    },
    {
      topic: "Node.js",
      question: "What is the purpose of the HTTP module in Node.js?",
      answer: "The HTTP module allows Node.js to create an HTTP server and handle HTTP requests and responses."
    },
    {
      topic: "MongoDB",
      question: "What is Mongoose?",
      answer: "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js that helps manage relationships between data."
    },
    {
      topic: "MongoDB",
      question: "What is the difference between find() and findOne() in Mongoose?",
      answer: "find() returns an array of documents, while findOne() returns a single document that matches the query."
    },
    {
      topic: "Express.js",
      question: "What is the difference between app.use() and app.get()?",
      answer: "app.use() applies middleware to all routes, whereas app.get() handles GET requests for a specific route."
    },
    {
      topic: "JavaScript",
      question: "What is event delegation?",
      answer: "Event delegation is a technique where a parent element listens for events on its child elements using event bubbling."
    },
    {
      topic: "JavaScript",
      question: "What is the difference between synchronous and asynchronous code?",
      answer: "Synchronous code executes line by line, while asynchronous code allows operations to run in the background without blocking execution."
    },
    {
      topic: "Node.js",
      question: "What is the purpose of the package.json file?",
      answer: "The package.json file stores metadata about a Node.js project, including dependencies, scripts, and project details."
    },
    {
      topic: "JavaScript",
      question: "What are promises in JavaScript?",
      answer: "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value."
    },
    {
      topic: "MongoDB",
      question: "What is the purpose of indexing in MongoDB?",
      answer: "Indexing improves query performance by allowing MongoDB to locate documents faster."
    },
    {
      topic: "Express.js",
      question: "What is CORS and why is it important?",
      answer: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts how resources on a web page can be requested from another domain."
    },
    {
      topic: "JavaScript",
      question: "What is the difference between null and undefined?",
      answer: "null is an explicitly assigned value indicating 'no value', while undefined means a variable has been declared but not assigned a value."
    },
    {
      topic: "Node.js",
      question: "What is the difference between require() and import?",
      answer: "require() is used in CommonJS modules, while import is used in ES6 modules."
    }
  ];
  
  module.exports = {data:samplePosts};
  