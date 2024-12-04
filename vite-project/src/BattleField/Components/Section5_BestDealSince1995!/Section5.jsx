import './Section5.css'
import Save10 from '../../../assets/BestDeal/Save10.png'
import { useState } from 'react'


export default function Section5(){

    const [circle, SetCircle] = useState(false)

    function Circle(){
        if (circle == false){
            document.getElementById('cir').style.marginLeft='55%'
            document.getElementById('moy1').style.color='gray'
            document.getElementById('moy2').style.color='white'
            SetCircle(true);
        }
        else{
            document.getElementById('cir').style.marginLeft='10%'
            document.getElementById('moy1').style.color='white'
            document.getElementById('moy2').style.color='gray'
            SetCircle(false);
        }
    }

    function Of1(){
        document.getElementById('Of1').style.backgroundColor='#A8FF35'
        document.getElementById('Ob1').style.backgroundColor='black'
        document.getElementById('ot1').style.color='white'
        document.getElementById('Of2').style.backgroundColor='white'
        document.getElementById('Ob2').style.backgroundColor='#A8FF35'
        document.getElementById('ot2').style.color='black'
        document.getElementById('Of3').style.backgroundColor='white'
        document.getElementById('Ob3').style.backgroundColor='#A8FF35'
        document.getElementById('ot3').style.color='black'
    }

    function Of2(){
        document.getElementById('Of1').style.backgroundColor='white'
        document.getElementById('Ob1').style.backgroundColor='#A8FF35'
        document.getElementById('ot1').style.color='black'
        document.getElementById('Of2').style.backgroundColor='#A8FF35'
        document.getElementById('Ob2').style.backgroundColor='black'
        document.getElementById('ot2').style.color='white'
        document.getElementById('Of3').style.backgroundColor='white'
        document.getElementById('Ob3').style.backgroundColor='#A8FF35'
        document.getElementById('ot3').style.color='black'
    }

    function Of3(){
        document.getElementById('Of1').style.backgroundColor='white'
        document.getElementById('Ob1').style.backgroundColor='#A8FF35'
        document.getElementById('ot1').style.color='black'
        document.getElementById('Of2').style.backgroundColor='white'
        document.getElementById('Ob2').style.backgroundColor='#A8FF35'
        document.getElementById('ot2').style.color='black'
        document.getElementById('Of3').style.backgroundColor='#A8FF35'
        document.getElementById('Ob3').style.backgroundColor='black'
        document.getElementById('ot3').style.color='white'
    }

    return(
        <>
            <section className='Section5'>
                <p className='Sec5_Title'>Get your best deal</p>
                <div className='Sec5_MoY'>
                    <p id='moy1' className='MoY1'>Monthly</p>
                    <div id='GoRight' className='Sec5_Switch'>
                        <div id='cir' className='Sec5_Circle' onClick={Circle}></div>
                    </div>
                    <p id='moy2' className='MoY2'>Yearly</p>
                    <img src={Save10} alt="" />
                </div>
                <div className='Sec5_Tarif'>
                    <div id='Of1' className='Sec5_Offer'>
                        <p className='Offer_Title'>Personal</p>
                        <p className='Offer_Desc'>Special first packet for all</p>
                        <div className='Offer_GL'></div>
                        <p className='Offer_Price'>$8 <span>/Month</span></p>
                        <ul>
                            <li>Up to 5 page each group</li>
                            <li>Up to 10 group page</li>
                            <li>5 Days group page saved</li>
                        </ul>
                        <button onClick={Of1} id='Ob1' className='Offer_Button'><p id='ot1' className='loh'>Start Free Trial</p></button>
                    </div>
                    <div id='Of2' className='Sec5_Offer'>
                        <p className='Offer_Title'>Regular</p>
                        <p className='Offer_Desc'>Recommended for personal pro</p>
                        <div className='Offer_GL'></div>
                        <p className='Offer_Price'>$20 <span>/Month</span></p>
                        <ul>
                            <li>Up to 5 page each group</li>
                            <li>Download page up to 20 page</li>
                            <li>Up to 10 group page</li>
                            <li>15 Days group page saved</li>
                        </ul>
                        <button onClick={Of2} id='Ob2' className='Offer_Button'><p id='ot2' className='loh'>Start Free Trial</p></button>
                    </div>
                    <div id='Of3' className='Sec5_Offer'>
                        <p className='Offer_Title'>Premium</p>
                        <p className='Offer_Desc'>Packet for Startup & Company</p>
                        <div className='Offer_GL'></div>
                        <p className='Offer_Price'>$48 <span>/Month</span></p>
                        <ul>
                            <li>Unlimited group pages</li>
                            <li>Unlimited download page</li>
                            <li>Unlimited page each group</li>
                            <li>Customize sorting group pages</li>
                            <li>Customize group page name</li>
                            <li>30 Days group page saved</li>
                        </ul>
                        <button id='Ob3' onClick={Of3} className='Offer_Button'><p id='ot3' className='loh'>Start Free Trial</p></button>
                    </div>
                </div>
            </section>
        </>
    )
}