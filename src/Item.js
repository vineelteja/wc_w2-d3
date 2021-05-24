
import React, { useState, useRef } from 'react';
import { ButtonGroup, Button, Modal } from 'react-bootstrap';

const Item = ({ shopItems, updateQuatity }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currItem = useRef(null);

  return (
    <div className="row">
      {Object.values(shopItems).map((item) => (
        <div key={item.id} className="col-12 p-4 border justify-content">
          <div class="d-flex justify-content-start">
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                currItem.current = item;
                handleShow();
              }}
            >
              <p className="desc">{item.desc}</p>
              <img className="" src={item.image} alt="" />
            </Button>
            <div className="m-5 mt-5">
              <span>
                <ButtonGroup>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      updateQuatity(item.id, true, false);
                    }}
                  >+</Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      if (item.value) {
                        updateQuatity(item.id, false, true);
                      }
                    }}
                  >-</Button>
                </ButtonGroup>
              </span>
              <span>
                <span className="border ml-5 p-2 ">{item.value}</span> quantity
              </span>
            </div>
          </div>
        </div>
      ))}
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="m-2">
              <p className="desc">{currItem.current.desc}</p>
              <img className="" src={currItem.current.image} alt="" />
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};



export default Item;
