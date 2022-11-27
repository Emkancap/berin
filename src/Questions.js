import { useRef, useState, useEffect } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

export default function Questions() {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // 👇️ (better) use a ref

    const el2 = ref.current;
    const collection = el2.getElementsByTagName("button");
    for (let i = 0; i < collection.length; i++) {
      const tag = collection.item(i);
      const attr = collection.item(i).getAttribute("aria-expanded");

      tag.childNodes.forEach((element) => {
        element.setAttribute("aria-expanded", attr);
        if (
          element.getAttribute("aria-expanded") === "true" &&
          element.getAttribute("alt") === "arrow"
        ) {
          element.style.transform = "rotate(180deg)";
        } else {
          element.style.transform = "rotate(360deg)";
        }
        if (
          element.getAttribute("aria-expanded") === "true" &&
          element.getAttribute("data-custom") === "circle"
        ) {
          element.firstChild.style.backgroundColor = "blue";
        }
        if (
          element.getAttribute("aria-expanded") === "false" &&
          element.getAttribute("data-custom") === "circle"
        ) {
          element.firstChild.style.backgroundColor = "white";
        }
      });
    }
  }, [toggle]);

  return (
    <div className="" style={{ marginTop: "5rem" }}>
      <div className="container">
        <div>
          <div className="d-flex position-relative">
            <img
              src={require("./Assest/Questions/Abstract-01.png")}
              alt="Circle"
            />
            <h1
              className="fw-bold position-absolute"
              style={{ marginRight: "80px" }}
            >
              الأسئلة الاكثر شيوعاً....
            </h1>
          </div>
        </div>
        {/* Collapes */}
        <div
          className="collapes"
          onClick={() => setToggle((prev) => !prev)}
          ref={ref}
        >
          <Accordion>
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
                      border: "1px blue solid ",
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
                    01
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    هل يوجد خدمة توصيل للمنازل ؟
                  </h4>
                </div>
                <img
                  src={require("./Assest/Questions/Arrow 3.png")}
                  alt="arrow"
                  style={{
                    marginLeft: "20px",
                    transition: "0.3s",
                  }}
                />
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body">
                  <p>
                    نعم يتوفر لدينا خدمة توصيل المياه للمنازل حيث يمكنك الطلب من
                    هذا الرابط بسهولة من خلال تطبيق بيرين لأجهزة أبل وأندرويد أو
                    زيارة موقعنا الإلكتروني، وكما يمكنك الطلب مباشرة بالاتصال
                    على الرقم الموحد 920025555
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>

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
                      border: "1px blue solid ",
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
                    01
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    هل يوجد خدمة توصيل للمنازل ؟
                  </h4>
                </div>
                <img
                  src={require("./Assest/Questions/Arrow 3.png")}
                  alt="arrow"
                  style={{
                    marginLeft: "20px",
                    transition: "0.3s",
                  }}
                />
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body">
                  <p>
                    نعم يتوفر لدينا خدمة توصيل المياه للمنازل حيث يمكنك الطلب من
                    هذا الرابط بسهولة من خلال تطبيق بيرين لأجهزة أبل وأندرويد أو
                    زيارة موقعنا الإلكتروني، وكما يمكنك الطلب مباشرة بالاتصال
                    على الرقم الموحد 920025555
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
