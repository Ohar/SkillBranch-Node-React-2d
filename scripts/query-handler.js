'use strict';

const unifyColor     = require('./unify-color'),
      getColorFormat = require('./get-color-format'),
      log4js         = require('log4js'),
      logger         = log4js.getLogger('queryHandler');

function queryHandler (req, res) {
  try {
    const query        = req.query,
          colorInput   = query.color.trim(),
          format       = getColorFormat(colorInput),
          unifiedColor = unifyColor(colorInput, format);

    return res.send(String(unifiedColor));
  } catch (e) {
    logger.error('Fail', e);
    res.send('Invalid color');
  }
}

module.exports = queryHandler;
