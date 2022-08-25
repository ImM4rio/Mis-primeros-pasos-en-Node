const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'listar la tabla de la base'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Elige hasta qué número multiplica'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número';
        
        }else if( isNaN( argv.h )){
            throw 'El límite tiene que ser numérico';
        }


        return true; //Decimos a Yargs que el argumento pasó el check
    })
    .argv;

module.exports = argv;