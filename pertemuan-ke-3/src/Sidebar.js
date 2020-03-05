import React, { Component } from "react";
import { Container, Col, Row, Image, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          marginLeft: "3em",
          marginRight: "3em",
          marginTop: "2em"
        }}
      >
        <Image
          src="gambar.jpg"
          height="400px"
          rounded
          style={{
            marginBottom: "1em"
          }}
        />
      </div>
    );
  }
}
