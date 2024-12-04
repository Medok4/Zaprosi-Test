import './Nav.css'
import Logo from '../../../assets/Header/Logo.png'

export default function Nav(){
    return(
        <>
            <nav>
                <div className='Nav_25'>
                    <img src={Logo} alt="" />
                </div>
                <div className='Nav_50'>
                    <a href="">About</a>
                    <a href="">How it work</a>
                    <a href="">Pricing</a>
                    <a href="">Solution</a>
                    <a href="">Features</a>
                </div>
                <div className='Nav_25'>
                    <button className='Nav_But1'><p>Login</p></button>
                    <button className='Nav_But2'><p>Register</p></button>
                </div>
            </nav>
        </>
    )
}