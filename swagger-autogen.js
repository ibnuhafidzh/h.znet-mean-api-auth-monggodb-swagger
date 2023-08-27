const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/*.js"];

const config = {
  info: {
    title: "Mean H.Znet Api Auth MonggoDB Swagger",
    description: "Mean H.Znet Api Auth MonggoDB Swagger",
    version: "0.0.1",
  },
  tags: [],
  host: "localhost:8080",
  schemes: ["http", "https"],
};

swaggerAutogen(outputFile, endpointsFiles, config);
