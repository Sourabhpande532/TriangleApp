const angleInputs = document.querySelectorAll( ".user-angle-input" );
const isTriangleButton = document.querySelector( "#is-button-triangle" );
const showResultEl = document.querySelector( ".display-output" );

function calculateSumOfAngles( A1, A2, A3 ) {
    const sumOfAngles = A1 + A2 + A3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(
        Number( angleInputs[0].value ),
        Number( angleInputs[1].value ),
        Number( angleInputs[2].value )
    );
    if(sumOfAngles===180){
        showResultEl.innerText = "Yehh!😍 The Angle is forming Triangle"
    }else{
        showResultEl.innerText = "Oohh!😔 Sadly The Angle not Formed Triangle"
    }
}

isTriangleButton.addEventListener( "click", isTriangle );
