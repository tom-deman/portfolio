let alreadyDone = false

const numberOne   = document.querySelector( '.number-1' )
const numberTwo   = document.querySelector( '.number-2' )
const numberThree = document.querySelector( 'number-3' )
const numberFour  = document.querySelector( 'number-4' )

window.addEventListener( 'scroll', () => {
    const ready = window.scrollY >= 550

    if( ready && !alreadyDone ) {
        alreadyDone = true

        const startNumberOne = 0
        const endNumberOne = 1060

        const startNumberTwo = 0
        const endNumberTwo = 60

        const startNumberThree = 0
        const endNumberThree = 22

        const startNumberFour = 0
        const endNumberFour = 80

        const incrementOne = () => 
            setTimeout(() => {
                startNumberOne ++
                if( startNumberOne <= endNumberOne ) {
                    numberOne.innerHTML = startNumberOne
                    incrementOne()
                }
            }, 1)
        incrementOne()

        const incrementTwo = () =>
            setTimeout(() => {
                startNumberTwo ++
                if( startNumberTwo <= endNumberTwo ) {
                    numberTwo.innerHTML = startNumberTwo
                    incrementTwo()
                }
            }, 65)
        incrementTwo()

        const incrementThree = () =>
            setTimeout(() => {
                startNumberThree ++
                if( startNumberThree <= endNumberThree ) {
                    numberThree.innerHTML = startNumberThree
                    incrementThree()
                }
            }, 180)
        incrementThree()

        const incrementFour = () =>
            setTimeout(() => {
                startNumberFour ++
                if( startNumberFour <= endNumberFour ) {
                    numberFour.innerHTML = startNumberFour
                    incrementFour()
                }
            }, 50)
        incrementFour()
    }
})
