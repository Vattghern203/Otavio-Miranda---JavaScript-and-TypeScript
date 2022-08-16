try {
    //É executado quando não há erros.
    console.log('Now loading...')
    console.log(af)
    console.log('Game Loaded!')

} catch(error) {
    // Executado quando há erros.
    console.log('An error was found.\nTrying to fix the error...')

} finally {
    // É executado sempre.
    console.log('Press Star to start or loading the game')
} 