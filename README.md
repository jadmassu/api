
# Repository Pattern

This repository contains a sample project that demonstrates the implementation of the Repository Pattern in a Node.ts framework. The project showcases the separation of concerns between the data access layer and the business logic layer, promoting modularity and maintainability.




## Features

- **Repository Abstraction:** The project utilizes the Repository Pattern to abstract the data access operations, providing a consistent interface for querying, inserting, updating, and deleting data.
- **Data Storage Flexibility:** The repository implementations can be easily switched or extended to work with different data storage technologies, such as databases, APIs, or file systems.
- **Separation of Concerns:** The project clearly separates the business logic from the data access layer, enabling developers to focus on implementing the core application logic without being tightly coupled to specific data storage mechanisms.
- **Modularity and Reusability:** The Repository Pattern encourages modularity and reusability of code. The repository implementations can be used across different parts of the application, promoting code reuse and reducing duplication.
- **View Model:** The project also includes a view model layer that encapsulates the data and behavior required for the user interface. The view models facilitate the interaction between the business logic and the presentation layer, promoting a separation of concerns and enhancing the maintainability of the application.
 


## Tech Stack


- **Framework:** The project is built using Node.js and Express, providing a robust and scalable foundation for web application development.
- **Language:** The project is implemented using Typescript, a statically typed superset of JavaScript, which enhances code quality, maintainability, and developer productivity.
- **ORM:** The project utilizes Sequelize, an Object-Relational Mapping (ORM) library, to interact with the database. Sequelize simplifies database operations by providing an intuitive API and handles the mapping between object-oriented models and relational database tables.
- **Database:** The project employs MySQL as the underlying database system. MySQL is a popular and reliable relational database management system, known for its performance, scalability, and wide community support.






## Run Locally

Clone the project

```bash
  git clone git@github.com:jadmassu/api.git
```

Go to the project directory

```bash
  cd api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Acknowledgements

 - [Node Typescript](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)
 - [Express](https://expressjs.com/en/5x/api.html)
 - [Sequelize for Typescript](https://sequelize.org/docs/v6/other-topics/typescript/)

