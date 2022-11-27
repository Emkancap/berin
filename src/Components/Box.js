export default function Box(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        width: props.width,
        height: props.height,
        borderBottom: props.borderBottom,
        borderTop: props.borderTop,
        borderLeft: props.borderLeft,
        borderRight: props.borderRight,
        color: props.color,
      }}
    ></div>
  );
}
