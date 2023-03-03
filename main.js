console.log( 'hello world' )

const amplitue = 1;

var time = 0.01

function angular_freq( f ) {
    return 2 * Math.PI * f;
}

function sine_wave( amp, hz, phase ) {
    return amp * Math.sin( angular_freq( hz ) + phase );
}

let intervalID = 0;
let cnt = 0;
const t0 = performance.now();
let td = 0;

function startTimer() {
    intervalID = setInterval( msg, 1000 );
}

function msg(){
    cnt += 1;
    console.log( `${cnt}` );
    console.log( `Time in ms: ${Date.now() }`);
    console.log( performance.now() );
    td = performance.now() - t0;    
    console.log( td );
    console.log( `y = ${Math.sin(td)}` );
   
    if( cnt == 4 ) {
        clearInterval( intervalID );
        console.log( 'Ending Interval' );
        console.log( `Time in ms: ${Date.now() }`);
    } 
}
