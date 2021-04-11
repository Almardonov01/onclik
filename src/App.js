import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./globalStyles";

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin: 10px;
  background-color: lightgray;
  width: 700px;
  height: 300px;
`;

const Button = styled.button`
  min-width: 100px;
  height: 60px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  border: 1px solid #141414;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  position:relative;
  top: 200px;
  left: 500px;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Remove</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
