const program = require("commander");
const log = console.log;
const createPassword = require("./utils/createPassword");

program.version("1.0.0").description("Simple password generator");

program
  .option("-l, --length <number>", "length of password", 8)
  .option("-s, --save", "save generated password to passwords.txt")
  .option("-nn, --no-numbers", "Remove numbers from password")
  .option("-ns, --no-symbols", "Remove symbols from password")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// get generate password
const generatedPassword = createPassword(length, numbers, symbols);

// output generated password
log(generatedPassword);
