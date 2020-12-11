const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    dest: 'public',
    runtimeCaching,
  },
})