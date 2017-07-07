const logger = require('../lib/logger')

const PORT = 3000

logger.info('Starting server...')
require('../../server/main').listen(PORT, () => {
  logger.success(`Server is running at http://localhost:${PORT}`)
  logger.success(`Server is also running at http://${getIPAdress()}:${PORT}`)
})

function getIPAdress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
