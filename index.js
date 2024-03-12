import fs from "fs";

import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// //desencadear métodos texto, cor de fundo e texto em negrito
// console.log(chalk.blue.bgWhite.bold("SENAI"));

// //receber múltiplos argumentos
// console.log(chalk.blue('Curso','de','Node.JS'));

// //métodos aninhados
// console.log(chalk.red('vermelho',chalk.underline.bgBlue('azul')));

// //uso de templates e strings
// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

//2)tratamento de erros, função para tratar erros 
function trataErro(erro){
    throw new Error(chalk.red(erro.code,'não há arquivo no diretório. Por favor, verifique o caminho e o diretório novamente'));
}

//1) escrever uma function que traga arquivos .md
function pegaArquivo(caminhoDoArquivo){
    const encoding="utf-8";
    fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md');
//calback(erro,texto)