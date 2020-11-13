const fs = require('fs');

module.exports = (cmd, done) => {
  if (cmd === 'ls'){
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err
      } else {
        done(files.join('\n'));
      }
    })
  }
}


