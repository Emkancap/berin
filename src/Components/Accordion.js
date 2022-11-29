import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

export default function Accordions(props) {
  return (
    <AccordionItem>
      <AccordionHeader>
        <div
          style={{
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "10%",
          }}
          data-custom="circle"
        >
          <span
            style={{
              width: "20px",
              height: "20px",
              border: "1px rgba(27, 27, 31, 0.5) solid ",
              borderRadius: "50%",
              fontWeight: "bold",
            }}
          ></span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "30px",
            flex: "1",
          }}
        >
          <span className="fw-bold" style={{ fontSize: "20px" }}>
            {props.number}
          </span>
          <h4 className={`accordion-title fw-bold`}>{props.title}</h4>
        </div>
        <img
          src={require("../Assest/Questions/Vector.png")}
          alt="arrow"
          style={{
            marginLeft: "20px",
            transition: "0.3s",
          }}
        />
      </AccordionHeader>

      <AccordionBody>
        <div className="accordion-body">
          <p className="fw-normal">{props.paragraph}</p>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
}
