/** @format */

import { Container, Row, Col } from "react-bootstrap";

import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Header from "./Header";
import Learn from "./Learn";

const Profile = () => {
  /* const params = useParams();

  const [getExperience, setGetExperience] = useState([]); */

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNjMTZmYjRjYzU2YzAwMTU2ZjE5NmMiLCJpYXQiOjE2NjQ4ODI0MjcsImV4cCI6MTY2NjA5MjAyN30.2RDte3wVXvN0Cr-WCkw2llKFBIfW0ToegCCaQ9pNqyI",
          },
        }
      );
      let data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {
    fetchUser(params.id);
  }, [params]);

  useEffect(() => {
    fetchUser(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <>
      {user && (
        <Container className="whole-section">
          <Row className="hero-section">
            <Col md={9} className="px-0">
              <Header />
            </Col>
            <Col md={3} className="px-0">
              <SideBar />
              <Learn />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Profile;
