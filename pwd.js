module.exports = (cmd,done) => {
    if (cmd === 'pwd'){
      done(process.cwd());
    }
}


