const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      description: "This is one of the project that I did in Binar Academy",
      version: "1.0.0",
    },
  },
  apis: ["./src/**/*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification;