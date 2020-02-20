import React, { Component } from "react";
import { Container, Col, Row, Image, Form } from "react-bootstrap";

export default class Biodata extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: "50px" }}>
          <Row style={{ marginTop: "50px" }}>
            <Col sm="4">
              <Image src="IMG_20180413_0004.jpg" width="200px" height="300px" />
            </Col>
            <Col sm="8">
              <Row style={{}}>Faisal Wafa</Row>
            </Col>
          </Row>
          {/* <Row>
            <Col sm="4">Kelas</Col>
            <Col sm="8">TI-3G</Col>
          </Row>
          <Row>
            <Col sm="4">TTL</Col>
            <Col sm="8">Malang, 04 November 1999</Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}
