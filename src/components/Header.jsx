/* eslint-disable jsx-a11y/alt-text */
import image from '../assets/investment-calculator-logo.png'
import '../index.css'
function Header(){
    return(
        <header id='header'>
            <img  src={image}/>
            <h2>investmet calculator</h2>
        </header>
    )
}

export default Header;