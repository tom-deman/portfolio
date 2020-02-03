let alreadyDone = false


const numberOne   = document.querySelector( '.number-1' )
const numberTwo   = document.querySelector( '.number-2' )
const numberThree = document.querySelector( '.number-3' )
const numberFour  = document.querySelector( '.number-4' )


let startNumberOne   = 0
let endNumberOne     = 1060

let startNumberTwo   = 0
let endNumberTwo     = 60

let startNumberThree = 0
let endNumberThree   = 22

let startNumberFour  = 0
let endNumberFour    = 80


window.addEventListener( 'scroll', () => {
    const ready = window.scrollY >= 550


    if( ready && !alreadyDone ) {
        alreadyDone = true

        const incrementOne = () =>
            setTimeout(() => {
                startNumberOne ++
                if( startNumberOne <= endNumberOne ) {
                    numberOne.innerText = startNumberOne
                    incrementOne()
                }
            }, 1 )

        const incrementTwo = () =>
            setTimeout(() => {
                startNumberTwo ++
                if( startNumberTwo <= endNumberTwo ) {
                    numberTwo.innerText = startNumberTwo
                    incrementTwo()
                }
            }, 65 )

        const incrementThree = () =>
            setTimeout(() => {
                startNumberThree ++
                if( startNumberThree <= endNumberThree ) {
                    numberThree.innerText = startNumberThree
                    incrementThree()
                }
            }, 180 )

        const incrementFour = () =>
            setTimeout(() => {
                startNumberFour ++
                if( startNumberFour <= endNumberFour ) {
                    numberFour.innerText = startNumberFour
                    incrementFour()
                }
            }, 50 )

            incrementOne()
            incrementTwo()
            incrementThree()
            incrementFour()
        }
})
