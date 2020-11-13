const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  // if (cmd === 'pwd'){
  //   // console.log(__filename);
  //   // console.log('__dirname::',__dirname);
  //   console.log(process.cwd());
  //   console.log('helloooooooooo')
  // }
  const done = (output) =>{
    process.stdout.write(output)
    process.stdout.write("\nprompt > ");
  }

  pwd(cmd,done);
  ls(cmd,done);
  cat(cmd,done);
  curl(cmd,done);
  

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
});

