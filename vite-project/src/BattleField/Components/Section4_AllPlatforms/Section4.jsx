import './Section4.css'
import I1 from '../../../assets/AllPlatforms(Sec4)/1.png'
import I2 from '../../../assets/AllPlatforms(Sec4)/2.png'
import I3 from '../../../assets/AllPlatforms(Sec4)/3.png'
import I4 from '../../../assets/AllPlatforms(Sec4)/4.png'
import I5 from '../../../assets/AllPlatforms(Sec4)/5.png'
import I6 from '../../../assets/AllPlatforms(Sec4)/6.png'
import I7 from '../../../assets/AllPlatforms(Sec4)/7.png'
import I8 from '../../../assets/AllPlatforms(Sec4)/8.png'
import T1 from '../../../assets/AllPlatforms(Sec4)/T1.png'
import T2 from '../../../assets/AllPlatforms(Sec4)/T2.png'
import T3 from '../../../assets/AllPlatforms(Sec4)/T3.png'

export default function Section4(){
    return(
        <>
        <section className='Section4'>
            <p className='Sec4_Title'>All platform connect to Findtrend</p>  
            <div className='Soc_icons'>
                <img src={I1} alt="" />
                <img src={I2} alt="" />
                <img src={I3} alt="" />
                <img src={I4} alt="" />
                <img src={I5} alt="" />
                <img src={I6} alt="" />
                <img src={I7} alt="" />
                <img src={I8} alt="" />                
            </div>
            <div className='Sec4_Tweets'>
                <img src={T1} alt="" />
                <img src={T2} alt="" />
                <img src={T3} alt="" />
            </div>
            <button className='Sec4_But'><p>View More Trend</p></button>
        </section>
        </>
            
    )
}