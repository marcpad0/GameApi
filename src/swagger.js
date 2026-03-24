import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Game API',
      version: '1.0.0',
      description: 'REST API backend for game management with API key authentication'
    },
    servers: [
      {
<<<<<<< HEAD
        url: 'https://super-winner-44rvj74gjv5fqjrj-3000.app.github.dev/',
=======
        url: 'https://fluffy-sniffle-x9r9jvjx76g36jxr-3000.app.github.dev/',
>>>>>>> fcfbf2ae284ad760084e717bbf9c41de48953e18
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-API-Key',
          description: 'API Key for authenticated routes'
        }
      }
    },
    security: []
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
