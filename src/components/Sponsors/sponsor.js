import React from 'react'
import './sponsor.css'
import client01 from '../../assets/svg/client-01.svg'
import client02 from '../../assets/svg/client-02.svg'
import client03 from '../../assets/svg/client-03.svg'
import client04 from '../../assets/svg/client-04.svg'
import client05 from '../../assets/svg/client-05.svg'
import client06 from '../../assets/svg/client-06.svg'

export default function Sponsor(){
    return(
        <section className="sponsor">
            <div className="sponsor-wrapper">
                <img src={client01} alt="" />
                <img src={client02} alt="" />
                <img src={client03} alt="" />
                <img src={client04} alt="" />
                <img src={client05} alt="" />
                <img src={client06} alt="" />
            </div>
        </section>
    )
}