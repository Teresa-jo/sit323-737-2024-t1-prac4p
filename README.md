Calculator Microservice

This repository contains a simple calculator microservice built using Node.js and Express.

Table of Contents

Introduction
Setup
API Endpoints
Error Handling
Logging
Deployment
Conclusion
Introduction

The aim of this project is to create a microservice offering basic calculator functionality to clients. The microservice handles incoming requests and executes fundamental arithmetic operations (addition, subtraction, multiplication, division) on provided input numbers.

Setup

To set up the development environment and run the microservice locally, follow these steps:

Install Node.js if you haven't already.
Clone this repository to your local machine:
bash
Copy code
git clone git@github.com:Teresa-jo/sit323-737-2024-t1-prac4p.git
Navigate to the project directory:
bash
Copy code
cd calculator-microservice
Install dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm start
The server will start running on http://localhost:3000.
API Endpoints

The microservice provides the following API endpoints:

/add: Addition endpoint
/sub: Subtraction endpoint
/mul: Multiplication endpoint
/div: Division endpoint
Each endpoint accepts two input parameters (n1 and n2) and performs the corresponding arithmetic operation.

Example usage:

sql
Copy code
GET /add?n1=5&n2=3
GET /sub?n1=10&n2=7
GET /mul?n1=4&n2=6
GET /div?n1=12&n2=4
Error Handling

The microservice implements error handling to provide meaningful error messages to clients. 
If the input parameters are not valid numbers or if there's an attempt to divide by zero, appropriate error messages are returned.

Logging

Logging is implemented using the Winston library to log information about each request. 
Requests, along with their parameters, are logged to separate files (error.log for errors and combined.log for all messages).

Deployment

To deploy the microservice, you can host it on a cloud platform like Heroku. 
Ensure that you set up the necessary environment variables and configure the server accordingly.

Conclusion

This project demonstrates the creation of a simple calculator microservice using Node.js and Express. 
It effectively handles incoming requests, performs arithmetic operations, implements error handling, 
and logs relevant information for monitoring and troubleshooting purposes.


