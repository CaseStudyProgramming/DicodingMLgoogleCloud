const postPredictHandler = require('../server/handler');
const PredictHistoriesHandler = require('./PredictHistoriesHandler');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,

      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: PredictHistoriesHandler
  }
]
 
module.exports = routes;