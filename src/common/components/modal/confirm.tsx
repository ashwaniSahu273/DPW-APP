import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../buttons/main";
import Modal from "./";

const Dialog = (props: {
  resolve: any;
  reject: any;
  message: string;
  isOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const handleConfirm = () => {
    setIsOpen(false);
    props.resolve();
  };

  const handleCancel = () => {
    props.reject();
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <div className="p-3 font-extralight">{props.message}</div>
      <hr />
      <div>
        <br />
        <Button onClick={handleConfirm}>Confirm</Button>
        &nbsp;
        <Button variant="transparent" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

const confirm = ({ message }: { message: string }) => {
  const wrapper = document.body.appendChild(document.createElement("div"));
  const close = () => {
    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();
  };
  const promise = new Promise((resolve, reject) => {
    const props = { message, isOpen: true, resolve, reject };
    ReactDOM.render(React.createElement(Dialog, props), wrapper);
  });

  return promise.then(
    (_) => close(),
    (res) => {
      close();
      return Promise.reject(res);
    }
  );
};

export default confirm;
