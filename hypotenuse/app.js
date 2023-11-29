const userSideInput = document.querySelectorAll( ".user-side-input" );
const calculateSideButton = document.querySelector( "#hypotenuse-btn" );
const ouputEl = document.querySelector(".output");

function calculateSumOfSideSq( a, b ) {
    let sumOfSqSide = a * a + b * b;
    return sumOfSqSide;
}

function calculateHypotenuse() {
    let sumOfSqSide = calculateSumOfSideSq(
        userSideInput[0].value,
        userSideInput[1].value
    );
    ouputEl.innerText = "hypotenuous formed " + sumOfSqSide;
}

calculateSideButton.addEventListener( "click", calculateHypotenuse );
