import React, { Component } from "react";
import { Container, Col, Row, Image, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Biodata extends Component {
  render() {
    return (
      <div style={{ marginLeft: "2em" }}>
        <Row style={{ marginBottom: "3em", marginTop: "2em" }}>
          <h1
            style={{
              color: "#2980b9",
              fontSize: "80px",
              fontWeight: "bold"
            }}
          >
            Faisal Wafa
          </h1>
          <h4
            className="text-left"
            id="dark-blue"
            style={{
              marginTop: "1em"
            }}
          >
            I'm a college student who currently studying Informatics Engineering
            at Politeknik Negeri Malang
          </h4>
        </Row>
        <hr />
        <Row>
          <Col sm="4">
            <Row id="content">
              <h4 id="bold">Place, Date of Birth</h4>
            </Row>
            <Row id="content">
              <h4 id="bold">Phone</h4>
            </Row>
            <Row id="content">
              <h4 id="bold">Email</h4>
            </Row>
          </Col>
          <Col sm="1"></Col>
          <Col sm="7">
            <Row style={{ marginBottom: "3em" }}>
              <h4 id="dark-blue">Malang, 04 November 1999</h4>
            </Row>
            <Row style={{ marginBottom: "3em" }}>
              <h4 id="dark-blue">089633781442</h4>
            </Row>
            <Row style={{ marginBottom: "3em" }}>
              <h4 id="dark-blue">faisalwafa10@gmail.com</h4>
            </Row>
          </Col>
        </Row>
        <Row>
          <h3 id="title">Projects</h3>
        </Row>
        <hr />
        <Row style={{ paddingTop: "1em" }}>
          <Col sm="4">
            <div className="text-center">
              <Image src="WebLogo.png" fluid />
            </div>
            <h4
              className="text-center"
              id="dark-blue"
              style={{ marginTop: "1em" }}
            >
              Mentor Koding
            </h4>
            <hr />
            <p className="text-left" id="dark-blue">
              Website that help people who want to find programming mentor's
            </p>
            <div className="text-center">
              <Button
                href="https://github.com/faisalwafa/mentorkoding-frontend"
                variant="outline-warning"
              >
                See Project
              </Button>
            </div>
          </Col>
          <Col sm="4">
            <div className="text-center">
              <Image src="smartkos.png" fluid />
            </div>
            <h4
              className="text-center"
              id="dark-blue"
              style={{ marginTop: "1em" }}
            >
              Smartkos
            </h4>
            <hr />
            <p className="text-left" id="dark-blue">
              Mobile app that help people who have a boarding house to manage
              their boarders
            </p>
            <div className="text-center">
              <Button
                href="https://github.com/faisalwafa/smartkos-android"
                variant="outline-warning"
                style={{
                  marginBottom: "1em"
                }}
              >
                See Projects
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
