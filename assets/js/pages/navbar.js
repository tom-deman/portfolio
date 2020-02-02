const links  = document.querySelectorAll( '.links' )
const navbar = document.getElementById( 'navbar' )

links[0].classList.add( 'text-gray-500' )

const linksLoop = ( a ) => {
    for( let i = 0; i < links.length; i ++ ) 
        links[ i ].classList.remove( 'text-gray-500' )
    links[ a ].classList.add( 'text-gray-500' )
}

window.addEventListener( 'scroll', () => {
    const isTop = window.scrollY > 50

    isTop
    ? navbar.classList.add( 'bg-black' )
    : navbar.classList.remove( 'bg-black' )

    const one   = ( window.scrollY < 700 )
    const two   = ( window.scrollY > 700  && window.scrollY < 1450 )
    const three = ( window.scrollY > 1450 && window.scrollY < 2400 )
    const four  = ( window.scrollY > 2400 && window.scrollY < 3100 )
    const five  = ( window.scrollY > 3100 )

    switch( true ) {
        case one:
            linksLoop( 0 )
            break
        case two:
            linksLoop( 1 )
            break
        case three:
            linksLoop( 2 )
            break
        case four:
            linksLoop( 3 )
            break
        case five:
            linksLoop( 4 )
            break
    }
})
