const Scroll = ({ children }) => {
  return (
    <div
      className="scroll"
      style={{
        border: "5px solid black",
        margin: "10px",
        height: "700px",
        overflowY: "scroll",
      }}
    >
      {children}
    </div>
  );
};
export default Scroll;
