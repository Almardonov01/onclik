import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./globalStyles";

const Container = styled.div`
  display: flex;
  padding: 20px 50px;
  background-color: lightgray;
  width: 100%;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Click me</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
