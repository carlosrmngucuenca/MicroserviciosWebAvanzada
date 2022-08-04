import Eureka from 'eureka-js-client';
 
// Or, if you're not using a transpiler:
const Eureka = require('eureka-js-client').Eureka;
 
// example configuration
const client = new Eureka({
  // application instance information
  instance: {
    app: 'Posicionservice',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: 3700,
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    // http://52.73.98.2:8099/eureka/
    host: '52.73.98.2',
    port: 8099,
  },
});