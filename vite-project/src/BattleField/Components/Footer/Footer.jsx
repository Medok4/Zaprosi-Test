import './Footer.css'
import Logo from '../../../assets/Footer/Logo.png'

export default function Footer(){
    return(
        <>
            <footer>
                <img src={Logo} alt="" />
                <div className='footer_links'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms and Conditions</a>
                    <a href="">Contact Us</a>
                    <a href="">Careers</a>
                </div>
            </footer>
        </>
    )
}