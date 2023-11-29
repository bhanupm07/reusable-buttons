import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const arr = ["yellow", "green", "blue", "pink", "orange", "purple", "red"];

export default function ContentPage() {
  const [modalInfo, setModalInfo] = useState({
    currentBtn: 1,
    color: "yellow",
  });

  const renderedButtons = arr.map((color, i) => (
    <Button i={i + 1} color={color} key={i} setModalInfo={setModalInfo} />
  ));

  return (
    <div className="main">
      <Modal currentBtn={modalInfo.currentBtn} color={modalInfo.color} />
      <div className="buttons-main">{renderedButtons}</div>
    </div>
  );
}
