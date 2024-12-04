import './Section1.css'
import Text1 from '../../../assets/NewTab/Text1.png'
import Text2 from '../../../assets/NewTab/Text2.png'
import Img1 from '../../../assets/NewTab/Img1.png'


export default function Section1(){
    return(
        <>
            <section className='Section1'>
                <p className='Sec1_title'>Open new tabs is sh*t </p>
                <div className='Sec1_3pic'>
                    <img src={Text1} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Text2} alt="" />
                </div>
                <p className='Sec1_SubTitle'>A solution for your browser tabs and don’t make your device get slower over time. Get <br/> ease and faster to discover a trend with just one tab.</p>
            </section>
        </>
    )
}