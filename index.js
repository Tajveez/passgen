const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePasswordToFile = require("./utils/savePassword");

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

if (save) {
  savePasswordToFile(generatedPassword);
}

// copy password to clipboard
clipboardy.writeSync(generatedPassword);

// output generated password
log(
  chalk.blue("Generated password: "),
  chalk.bold(chalk.green(generatedPassword))
);
log(chalk.yellow("Password has copied to clipbaord!"));
