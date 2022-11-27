export default function Bubble(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,

        background: " rgba(45, 93, 243, 0.08)",
        filter: "blur(100px)",
        transform: "translate(50%, -50%)",
        height: "400px",
        width: "400px",
      }}
    ></div>
  );
}
