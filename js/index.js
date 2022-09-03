function getPin () {
    const pin = generatePin();
    const pinString = pin + ''

    if ( pinString.length === 4 ) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin () {
    const random = Math.round( Math.random() * 10000 );
    return random;
}

// Finding Value by Id
function findValueById ( id ) {
    const element = document.getElementById( id );
    const elementValue = element.value;

    return elementValue;
}

document.getElementById( 'get-Pin' ).addEventListener( 'click', function () {
    const pin = getPin();

    const pinInput = document.getElementById( 'pin-input' );
    pinInput.value = pin;
} )

// Calculator button event
document.getElementById( 'calculator' ).addEventListener( 'click', function ( e ) {
    const charecter = e.target.innerText;
    const calculatorInput = document.getElementById( 'calc-screen' );
    const previousNumber = calculatorInput.value;
    if ( isNaN( charecter ) ) {
        if ( charecter === 'C' ) {
            calculatorInput.value = ''
        } else if ( charecter === '<' ) {
            const digits = previousNumber.split( '' );
            digits.pop();
            const remaining = digits.join('');

            calculatorInput.value = remaining;
        }
    }
    else {
        const newNumber = previousNumber + charecter;
        calculatorInput.value = newNumber;
    }
} )

// Comparing Pin and show message
document.getElementById( 'btn-submit' ).addEventListener( 'click', function () {
    const generatePin = findValueById( 'pin-input' );
    const calculatorDispaly = findValueById( 'calc-screen' );

    const pinSucess = document.getElementById( 'success-message' );
    const wrongMessage = document.getElementById( 'wrong-message' );
    if ( generatePin === calculatorDispaly ) {
        pinSucess.style.display = 'block';
        wrongMessage.style.display = 'none';
    } else {
        wrongMessage.style.display = 'block';
        pinSucess.style.display = 'none';
    }

})