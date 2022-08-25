const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log(argv); //Para ver como funciona Yargs

//Cuidado porque lo toma por posición y si se pasa cualquier argumento antes por la consola va a tomar ese como el valor arg3

//En process.argv se encuentran los argumentos que vienes desde la consola.
    // const { argv } = require( 'process' );
    // console.log(process.argv);
    // const [ ,, arg3 = 'base=5' ] = process.argv;
    // const [ , base = 5 ] = arg3.split('=');

//const base = 2;

const base = argv.b;
const listar = argv.l;
const limite = argv.h;

crearArchivo( base, listar, limite )
        .then( nombreArchivo => console.log(nombreArchivo, ' creada'))
        .catch( err => console.log(err));

    