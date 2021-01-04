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
         }}>About me. . .</h1>
         <Row >
             <Col sm className='about-content'>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut mauris vel tortor ullamcorper sagittis ut ac tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed lacinia lorem. In ultricies egestas justo nec pellentesque. Vestibulum eget ex molestie, laoreet augue at, dapibus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut placerat tempus purus eget auctor. Sed sed sodales sapien. Sed et massa ac magna varius egestas ac in orci.

            Mauris et erat arcu. Curabitur eu convallis purus. </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut mauris vel tortor ullamcorper sagittis ut ac tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed lacinia lorem. In ultricies egestas justo nec pellentesque. Vestibulum eget ex molestie, laoreet augue at, dapibus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut placerat tempus purus eget auctor. Sed sed sodales sapien. Sed et massa ac magna varius egestas ac in orci.

            Mauris et erat arcu. Curabitur eu convallis purus. </p>
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






