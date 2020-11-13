const fs = require('fs');

module.exports = (cmd,done) => {
  if (cmd.includes('cat')){
    let filePath = cmd.split(' ')[1];
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err){
        console.error(err);
        return;
      }
      done(data);
    })
  }
}
