


/**
 * Una funcion que suma
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
function sumar(a, b) {
    return a + b
}

sumar(123, 123);

/**
 * @type {AfterDone}
 */
const cb = (a, b) => {
    return `${a}, ${b}`
};

/**
 * 
 * @param {number[]} params 
 * @param {AfterDone} cb 
 */
function doStuff(params, cb) {

}

doStuff([123], () => { })