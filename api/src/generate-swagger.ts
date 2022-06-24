import swaggerAutogen from "swagger-autogen";

const swaggerDoc = {
  info: {
    title: 'Express-ftp-app API'
  }
};

const swaggerOutputFile = './express-ftp-api.swagger.json';
const endpointFiles = [
  './dist/routes/authentication.routes.js',
  './dist/routes/folders.routes.js',
  './dist/routes/files.routes.js'
];

swaggerAutogen()(swaggerOutputFile, endpointFiles, swaggerDoc);