import './BattleField.css'
import Header from './Components/Header/Header'
import Section1 from './Components/Section1_NewTab/Section1'
import Section2 from './Components/Section2_JustText/Section2'
import Section3 from './Components/Section3_FindTrend/Section3'
import Section4 from './Components/Section4_AllPlatforms/Section4'
import Section5 from './Components/Section5_BestDealSince1995!/Section5'
import Section6 from './Components/Section6_JoinNow/Section6'
import Footer from './Components/Footer/Footer'

export default function BattleField(){
    return(
        <>
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </>
    )
}