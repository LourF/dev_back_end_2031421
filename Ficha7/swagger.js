const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swgger_output.json'
const endpointsFile = ['./server.js']

swaggerAutogen(outputFile, endpointsFile)