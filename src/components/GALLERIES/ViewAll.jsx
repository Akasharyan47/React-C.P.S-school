import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const ViewAllModal = ({ isOpen, onClose, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "80%",
          maxHeight: "80%",
          overflow: "auto",
          padding: "20px",
          border: "none",
          borderRadius: "10px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <CloseButton onClick={onClose} className="btn btn-danger">Close</CloseButton>
      <MasonryContainer>
        {images.map((image, index) => (
          <MasonryItem key={index} className="column">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="img-fluid rounded"
              onClick={() => handleImageClick(index)}
            />
          </MasonryItem>
        ))}
      </MasonryContainer>
      <ImageModal
        isOpen={selectedImage !== null}
        onRequestClose={() => setSelectedImage(null)}
      >
        {selectedImage !== null && (
          <img
            src={images[selectedImage]}
            alt={`Image ${selectedImage + 1}`}
            className="img-fluid"
          />
        )}
      </ImageModal>
    </Modal>
  );
};

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const MasonryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MasonryItem = styled.div`
  width: calc(25% - 8px); /* Four columns with gap */
`;

const ImageModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
`;

export default ViewAllModal;
