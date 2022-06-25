import swaggerAutogen from "swagger-autogen";

const swaggerDoc = {
  info: {
    title: 'Express-ftp-app API'
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }
  }
};

const swaggerOutputFile = './express-ftp-api.swagger.json';
const endpointFiles = [
  './dist/routes/authentication.routes.js',
  './dist/routes/folders.routes.js',
  './dist/routes/files.routes.js'
];

swaggerAutogen({openapi: '3.0.0'})(swaggerOutputFile, endpointFiles, swaggerDoc);