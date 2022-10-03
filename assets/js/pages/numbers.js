let alreadyDone = false
const numbers   = document.querySelectorAll( '.number' )

const checkToStart = () => {
    const ready = window.scrollY >= 550 && window.scrollY <= 1250

    if( ready && !alreadyDone ) {
        alreadyDone = true

        const incrementCount = (
            startNumber,
            endNumber,
            number,
            count
        ) =>
            setTimeout( () => {
                startNumber < endNumber &&
                    startNumber ++
                    number.innerText = startNumber
                    incrementCount( startNumber, endNumber, number, count )
            }, count )

        incrementCount( 0, 2160, numbers[ 0 ], 1   )
        incrementCount( 0, 120 , numbers[ 1 ], 86  )
        incrementCount( 0, 44  , numbers[ 2 ], 240 )
        incrementCount( 0, 160 , numbers[ 3 ], 62  )
    }
}

window.addEventListener( 'scroll', () => checkToStart() )
window.addEventListener( 'load'  , () => checkToStart() )
