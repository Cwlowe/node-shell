module.exports = (cmd) => {
    if (cmd === 'pwd'){
      console.log(process.cwd());
      process.stdout.write("\nprompt > ");
    }
}


