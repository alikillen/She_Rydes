import React, { Component, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <Container
      className="custom-about-page"
      style={{
        backgroundImage:
          "url(/images/AboutScreen/Blue-bird-front-lifestyle.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        // width:'100vw',
        // height: '100vh'
      }}
    >
      <h1
        style={{
          color: "#eb8934",
        }}
      >
        About me. . .
      </h1>
      <Row>
        <Col sm className="about-content">
          <p>
            We are a generation of freedom. We can speak, love and create our
            own idyllic world for ourselves and our community. Gone are the days
            where we sit on the back of a motorcycle wearing singlets and short,
            shorts - looking like a groupie. We ride our own bikes, we care
            about the protection of our bodies and we push the boundaries to
            explore new roads, avenues and ways of living. She Rydes is a brand
            that has been inspired by the new wave of empowered female riders.
            The ones that want to embrace individuality and liberty. To wear
            clothing that isn’t made by men or Chinese factories. Founded in
            Australia and being brought to the wider world. We hope you find
            some quality pieces for your biker wardrobe. A girl can never have
            too many clothes.
          </p>
        </Col>
        <Col></Col>
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
  );
};

export default AboutScreen;
