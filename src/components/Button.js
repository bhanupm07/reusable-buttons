export default function Button({ i, color, setModalInfo }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  const handleClick = () => {
    setModalInfo({ currentBtn: i, color: color });
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        Btn {i}
      </button>
    </div>
  );
}
