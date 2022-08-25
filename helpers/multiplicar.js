const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    custom: ['green', 'bold'],
    separacion: ['rainbow', 'bold', 'bgWhite']
});


const crearArchivo = async( base = 5, listar, limite ) => {

    //Se debe tratar con un try{} catch{}
    try{
        
        let salida, consola = '';
        

        if( limite ){
            for(let i = 1; i <= limite; i++){
                consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
                salida += `${base} ${'x'} ${i} = ${base * i}\n`;

            }
            
        }else{
            for(let i = 1; i <= 10; i++){
                consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
                salida += `${base} ${'x'} ${i} = ${base * i}\n`;
    
            }
        }

        if( listar ){
            console.log("====================".separacion);
            console.log('Tabla del: ' + `${base}`.custom);
            console.log("====================".separacion);
            console.log( consola );
        }

        fs.writeFileSync(`./salida/tabla-${base}-limite${limite}.txt`, salida);

        return `tabla-${base}-limite${limite}.txt`;

    
    }catch ( err ) {
        throw err;
    }

    
    // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;

    //     console.log(`Tabla de: ${base} creada.`);
    // } )

    //Imprimir la tabla en un archivo de texto en el mismo sitio de la raíz
}



//Para exportar la función.

module.exports = {
    crearArchivo
}