import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Profile = ({ location }) => {
  // Extracting user data from location prop
  const { state } = location;
  const { email, img } = state || {};

  // Checking if user data exists
  if (!email || !img) {
    return <div>Error: User data not found!</div>;
  }

  // Converting user image data to base64 format
  const imageUrl = `data:${img.contentType};base64,${Buffer.from(
    img.data,
    "binary"
  ).toString("base64")}`;

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12}>
          <Card
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Profile</h2>
              <div className="profile-img-container">
                <img
                  src={imageUrl}
                  alt="Profile"
                  className="profile-img"
                />
              </div>
              <p className="mb-0 mt-3">Email: {email}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
