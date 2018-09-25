const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado completado de la tarea', { descripcion, completado })
    .command('borrar', 'Elimina un elemento por hacer', { descripcion })
    .help()
    .argv


module.exports = {
    argv
}