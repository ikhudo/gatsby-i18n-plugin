// const fs = require('fs-extra');
// const path = require('path');
// const ghpages = require('gh-pages');
//
// const STARTER_DIR = 'starters';
//
// fs.readdir(STARTER_DIR, (err, files) => {
//   files
//     .filter(file => file.startsWith('gatsby-starter'))
//     .forEach(async starter => {
//       const dist = path.join(STARTER_DIR, starter, 'public');
//       const dest = path.join(STARTER_DIR, starter);
//       ghpages.publish(dist, { dest: starter }, function(err) {
//         console.error(err);
//       });
//     });
// });
