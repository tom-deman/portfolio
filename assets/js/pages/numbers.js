let alreadyDone = false

const numberOne   = document.querySelector( '.number-1' )
const numberTwo   = document.querySelector( '.number-2' )
const numberThree = document.querySelector( '.number-3' )
const numberFour  = document.querySelector( '.number-4' )

window.addEventListener( 'scroll', () => {
    const ready = window.scrollY >= 550

    if( ready && !alreadyDone ) {
        alreadyDone = true

        const incrementCount = (startNumber, endNumber, number, count) => 
            setTimeout(() => {
                startNumber ++
                if( startNumber <= endNumber ) {
                    number.innerText = startNumber
                    incrementCount(startNumber, endNumber, number, count)
                }
            }, count )

        incrementCount( 0, 1160, numberOne, 2 )
        incrementCount( 0, 60, numberTwo, 96)
        incrementCount( 0, 22, numberThree, 260 )
        incrementCount( 0, 80, numberFour, 70 )
    }
})
