'use strict';

const unifyColor = require('./unify-color'),
      log4js     = require('log4js'),
      logger     = log4js.getLogger('queryHandler');

function queryHandler (req, res) {
  try {
    const query           = req.query,
          unifiedUsername = unifyColor(query.color);

    return res.send(String(unifiedUsername));
  } catch (e) {
    logger.error('Fail', e);

    switch (e.message) {
      case 'Invalid color':
        res.send(e.message);
        break;
      default:
        res.sendStatus(500);
        break;
    }
  }
}

module.exports = queryHandler;
