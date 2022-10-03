const links    = document.querySelectorAll( '.links'       )
const navbar   = document.getElementById  ( 'navbar'       )
const sections = document.querySelectorAll( 'section'      )
const fill     = document.querySelectorAll( '.fill-height' )

const linksLoop = ( a ) => {
    for( let i = 0; i < links.length; i ++ )
        links[ i ].classList.remove( 'text-gray-500' )
    links[ a ].classList.add( 'text-gray-500' )
}

const checkScroll = () => {
    if( window.scrollY >= 550 )
        fill.forEach( el => el.style.display = 'none' )

    window.scrollY > 50
        ? navbar.classList.add   ( 'bg-black' )
        : navbar.classList.remove( 'bg-black' )

    sections.forEach( ( el, index ) => {
        const top    = window.scrollY
        const offset = el.offsetTop
        const height = el.offsetHeight

        if( top >= ( offset - 50 ) && top < offset + height )
            linksLoop( index )
    } )
}

window.addEventListener( 'scroll', () => checkScroll() )
window.addEventListener( 'load'  , () => checkScroll() )
