window.addEventListener( 'scroll', () => {

    const ready = window.scrollY >= 550
    let alreadyDone = false

    if( ready && !alreadyDone ) {
        alreadyDone = true

        let startNumberOne = 0
        let endNumberOne = 1060

        let startNumberTwo = 0
        let endNumberTwo = 60

        let startNumberThree = 0
        let endNumberThree = 22

        let startNumberFour = 0
        let endNumberFour = 80

        const increment = () =>
            setTimeout(() => {
                startNumberOne ++
                if( startNumberOne <= endNumberOne ) {
                    document.querySelector( '.number-1' ).innerHTML = startNumberOne
                    increment()
                }
            }, 1)
        increment()

        const incrementTwo = () => 
            setTimeout(() => {
                startNumberTwo ++
                if( startNumberTwo <= endNumberTwo ) {
                    document.querySelector( '.number-2' ).innerHTML = startNumberTwo
                    incrementTwo()
                }
            }, 65)
        incrementTwo()

        const incrementThree = () =>
            setTimeout(() => {
                startNumberThree ++
                if( startNumberThree <= endNumberThree ) {
                    document.querySelector( '.number-3' ).innerHTML = startNumberThree
                    incrementThree()
                }
            }, 180)
        incrementThree()

        const incrementFour = () =>
            setTimeout(() => {
                startNumberFour ++
                if( startNumberFour <= endNumberFour ) {
                    document.querySelector( '.number-4' ).innerHTML = startNumberFour
                    incrementFour()
                }
            }, 50)
        incrementFour()
    }
})
