import React, { Component, useEffect } from 'react'
import {Row, Col, Container, Image} from "react-bootstrap"


const AboutScreen = () => {

    return (
    
        <Container className="custom-about-page" style={{
             backgroundImage: 'url(/images/AboutScreen/Blue-bird-front-lifestyle.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            
            
            // width:'100vw',
            // height: '100vh'
        }}>
       
         <h1 style={{
             color: '#eb8934',
         }}>About us. . .</h1>
         <Row >
             <Col sm className='about-content'>
             <p>She Rydes is an Australian owned, Gold Coast based company dedicated to providing women riders with quality protective gear. Our vision is to empower your ride with gear that is affordable and effortlessly stylish.

She Rydes is inspired by the new wave of independent women riders embracing individuality and liberty. We ride our own bikes, care about the protection of our bodies, and we push the boundaries to explore new roads and ways of living.

At She Rydes we aim to embody the freedom of the open road. Our collection allows women to feel safe and stylish whether they’re riding into the great unknown or into the urban jungle. We hope you find some quality pieces for your biker wardrobe.
</p>
             </Col>
             <Col>

             </Col>
         </Row>
         
        
            {/* <Row>
                <Col sm>
                <Image src="/images/AboutScreen/Blue-bird-front-lifestyle.png" className='about-img'/>
                </Col>
                <Col sm>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut mauris vel tortor ullamcorper sagittis ut ac tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed lacinia lorem. In ultricies egestas justo nec pellentesque. Vestibulum eget ex molestie, laoreet augue at, dapibus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut placerat tempus purus eget auctor. Sed sed sodales sapien. Sed et massa ac magna varius egestas ac in orci.

                        Mauris et erat arcu. Curabitur eu convallis purus. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut mauris vel tortor ullamcorper sagittis ut ac tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed lacinia lorem. In ultricies egestas justo nec pellentesque. Vestibulum eget ex molestie, laoreet augue at, dapibus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut placerat tempus purus eget auctor. Sed sed sodales sapien. Sed et massa ac magna varius egestas ac in orci.

                        Mauris et erat arcu. Curabitur eu convallis purus. </p>
                </Col>
            </Row>  */}
            </Container>    
          
        

    )
}



export default AboutScreen






