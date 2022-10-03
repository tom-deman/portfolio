const links  = document.querySelectorAll( '.links' )
const navbar = document.getElementById  ( 'navbar' )

links[ 0 ].classList.add( 'text-gray-500' )

const linksLoop = ( a ) => {
    for( let i = 0; i < links.length; i ++ )
        links[ i ].classList.remove( 'text-gray-500' )
    links[ a ].classList.add( 'text-gray-500' )
}

window.addEventListener( 'scroll', () => {
    const isTop = window.scrollY > 50

    isTop
        ? navbar.classList.add   ( 'bg-black' )
        : navbar.classList.remove( 'bg-black' )

    switch( true ) {
        case ( window.scrollY < 700 ):
            linksLoop( 0 )
            break
        case ( window.scrollY > 700  && window.scrollY < 1450 ):
            linksLoop( 1 )
            break
        case ( window.scrollY > 1400 && window.scrollY < 2400 ):
            linksLoop( 2 )
            break
        case ( window.scrollY > 2250 && window.scrollY < 3100 ):
            linksLoop( 3 )
            break
        case ( window.scrollY > 3100 ):
            linksLoop( 4 )
            break
        default:
            //
    }
})
