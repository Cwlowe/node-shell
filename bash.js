const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  // if (cmd === 'pwd'){
  //   // console.log(__filename);
  //   // console.log('__dirname::',__dirname);
  //   console.log(process.cwd());
  //   console.log('helloooooooooo')
  // }

  pwd(cmd);
  ls(cmd);
  cat(cmd);

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
});

