
const validateHeightArray = (value) => {
console.log("")
    if (!Array.isArray(value) || value.length !== 2) {
        throw new Error('El campo height debe ser un array con dos valores.');
    }


    if (typeof value[0] !== 'number' || typeof value[1] !== 'number') {
        throw new Error('Los valores en el campo height deben ser números.');
    }


    if (value[0] <= 0) {
        throw new Error('El primer valor en el campo height debe ser mayor que cero.');
    }

  
    if (value[1] >= 150) {
        throw new Error('El segundo valor en el campo height debe ser menor que 150.');
    }

  
    if (value[0] <= value[1]) {
        throw new Error('El primer valor en el campo height debe ser mayor que el segundo.');
    }
};


const validateWeightArray = (value) => {

    if (!Array.isArray(value) || value.length !== 2) {
        throw new Error('El campo height debe ser un array con dos valores.');
    }


    if (typeof value[0] !== 'number' || typeof value[1] !== 'number') {
        throw new Error('Los valores en el campo height deben ser números.');
    }


    if (value[0] <= 0) {
        throw new Error('El primer valor en el campo height debe ser mayor que cero.');
    }

  
    if (value[1] >= 150) {
        throw new Error('El segundo valor en el campo height debe ser menor que 150.');
    }

  
    if (value[0] <= value[1]) {
        throw new Error('El primer valor en el campo height debe ser mayor que el segundo.');
    }
};





module.exports = { validateHeightArray,validateWeightArray }