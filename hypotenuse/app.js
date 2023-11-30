const userSidesInput = document.querySelectorAll( ".user-side-input" );
const calculateSideButton = document.querySelector( "#hypotenuse-btn" );
const ouputEl = document.querySelector( "#result" );

function calculateSumOfSideSq( a, b ) {
    let sumOfSqSide = a * a + b * b;
    return sumOfSqSide;
}

function calculateHypotenuse() {
    let sideA = Number( userSidesInput[0].value );
    let sideB = Number( userSidesInput[1].value );
    if ( sideA && sideB ) {
        let sumOfSqSide = calculateSumOfSideSq( sideA, sideB );
        let lengthOfHypotenenuse = Math.sqrt( sumOfSqSide );
        ouputEl.innerText =
            "The Length of Hypotenuse of side c is " + lengthOfHypotenenuse.toFixed(2);
    } else {
        ouputEl.innerText =
            "both field is required "
    }

}
calculateSideButton.addEventListener( "click", calculateHypotenuse );
