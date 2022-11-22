import React from 'react'
import './MainContent.css'
import me from './assets/me.jpg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import mail from './assets/Mail.svg'
import youtube from './assets/youtube.svg'
import gfrom from './assets/gform.svg'
import whatsapp from './assets/wa.svg'
import mandiri from './assets/mandiri.png'
export default function MainContent(){
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                <img className='main-img' src={me} alt="me" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Raina Meigantari Wahyu</h2>
                    <h3 className='role'>General Banker Staff</h3>
                    <h4 className='web'>KCP Jakarta Cilangkap</h4>
                    <h4 className='web'>085722710933</h4>
                    <h4 className='web'>revrista@yahoo.co.id</h4>
                    <div className='connect'>
                        <a className='mail' href="https://forms.gle/wkS4hV5fxsR9LFih6"><img classname='gform' src={gfrom} alt="mail" /> U-Form</a>
                        <a className='linkedin' href="https://wa.me/6285722710933?text=Hallo!%20Saya%20memerlukan%20bantuan%0A" target='_blank'><img src={whatsapp} alt="" />Whatsapp</a>
                    </div>
                    <div className='about'>
                        <h3>Silahkan lengkapi U-Form agar saya bisa melayani kebutuhan perbankan Anda 😊</h3>
                        {/* <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. </p> */}
                    </div>
                    {/* <div className='interest'>
                        <h3>Interests</h3>
                        <p>Finance. Music. Technology. Sport. Health. I love connecting with new people, give me a shout at Minhvy.ha@outlook.com.</p>
                    </div> */}
                </div>
                <div className='footer'>
                    <a href="https://promo.bankmandiri.co.id/"><img className='facebook' src={mandiri} alt="mandiri" /></a>
                </div>
            </div>
        </>
    )
}
