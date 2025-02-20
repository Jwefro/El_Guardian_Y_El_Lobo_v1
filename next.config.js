/* eslint-disable no-undef */
// next.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  });
  
   
  module.exports = withPWA({
    // Otras configuraciones de Next.js
  });