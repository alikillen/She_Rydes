import React, { Component, useEffect } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/AboutScreenImg/opacity-fifty.png"
          })`,
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 id='about-header'>About She Rydes</h1>
        </div>

        <div sm className='about-content'>
          <p>
            She Rydes is an Australian owned, Gold Coast based company dedicated
            to providing women riders with quality protective gear. Our vision
            is to empower your ride with gear that is affordable and
            effortlessly stylish. She Rydes is inspired by the new wave of
            independent women riders embracing individuality and liberty. We
            ride our own bikes, care about the protection of our bodies, and we
            push the boundaries to explore new roads and ways of living. At She
            Rydes we aim to embody the freedom of the open road. Our collection
            allows women to feel safe and stylish whether they’re riding into
            the great unknown or into the urban jungle. We hope you find some
            quality pieces for your biker wardrobe..
          </p>
        </div>

        <div id='about-button-container'>
          <Button size='lg' id='about-button'>
            Shop the range now
          </Button>{" "}
        </div>
      </Container>
    </>
  );
};

export default AboutScreen;
