export default function Modal({ currentBtn, color }) {
  const modalStyle = {
    backgroundColor: color,
  };

  return (
    <div className="modal-main" style={modalStyle}>
      <h1>Btn {currentBtn} is clicked!</h1>
    </div>
  );
}
