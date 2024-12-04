import './Header.css'
import Nav from '../Nav/Nav'
import Texty from '../../../assets/Header/Texty.png'
import Comments from '../../../assets/Header/Comments.png'

export default function Header(){
    return(
        <>
            <header>
                <Nav/>

                <div className='Header_WorkSpace'>
                    <p className='Header_Title'>Minimize your tabs. <br/> Find the trends!</p>
                    <p className='Header_SubTitle'>Don’t let your computer memories consumes all of those browser tabs. <br/> Findtrend  let you gathers all of your favorite website into one place.</p>
                    <div className='Header_But_n_Text'>
                        <button className='Header_But'><p>Get Started 🔥</p></button>
                        <img src={Texty} alt="" />
                    </div>
                    <img src={Comments} alt="" />
                </div>
                
            </header>
        </>
    )
}