let alreadyDone = false
const numbers   = document.querySelectorAll( '.number' )

window.addEventListener( 'scroll', () => {
    const ready = window.scrollY >= 550

    if( ready && !alreadyDone ) {
        alreadyDone = true

        const incrementCount = (startNumber, endNumber, number, count) => 
            setTimeout(() => {
                startNumber < endNumber &&
                    startNumber ++
                    number.innerText = startNumber
                    incrementCount(startNumber, endNumber, number, count)
            }, count )

        incrementCount( 0, 1160, numbers[ 0 ], 2   )
        incrementCount( 0, 60  , numbers[ 1 ], 96  )
        incrementCount( 0, 22  , numbers[ 2 ], 260 )
        incrementCount( 0, 80  , numbers[ 3 ], 70  )
    }
})
