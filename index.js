import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

//desencadear métodos texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold("SENAI"));
//receber múltiplos argumentos
console.log(chalk.blue('Curso','de','Node.JS'));
//métodos aninhados
console.log(chalk.red('vermelho',chalk.underline.bgBlue('azul')));
//uso de template e strings
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);