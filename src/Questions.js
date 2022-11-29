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
          className="collapes mb-5"
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
                    02
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    كم يستغرق وقت التوصيل؟{" "}
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
                    يستغرق التوصيل عادة يومي عمل. وقد يكون هناك بعض التأخير
                    لكثرة الطلبات إلا أن معظمها يتم توصيلها قبل ذلك.
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            {/*  */}
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
                    03
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    كيف يمكنني الطلب لقطاع الأعمال سواء مطاعم أو أسواق أو متاجر
                    أغذية أو غيرها؟{" "}
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
                    يمكنك الطلب عن طريق البريد الإلكتروني{" "}
                    <span style={{ color: "#ff0000" }}>
                      <strong>
                        <a
                          style={{ color: " #ff0000" }}
                          href="mailto:Order@berain.com.sa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order@berain.com.sa
                        </a>
                      </strong>
                    </span>
                    أو بالتواصل معنا على الرقم الموحد 920025555
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            {/*   */}
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
                    04
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    أين تتوفر مياه بيرين في المملكة؟
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
                    تغطي خدمة التوصيل أكثر من 42 مدينة ومحافظة في المملكة
                    العربية السعودية مثل: الرياض، جدة، الدمام , الخبر، الجبيل،
                    بريدة , عنيزة , البكيرية ,الرس , ، حفر الباطن، الإحساء، مكة
                    المكرمة، المدينة المنورة ، الباحة، الطائف، نجران، جيزان،
                    الدوادمي، عرعر، بيشة، حائل، الخفجي، القنفذة، تبوك، خميس مشيط
                    , أبها , صامتة ، أحد رفيده، الظهران والخرج.
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            {/*  */}
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
                    05
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    ماهي الأحجام المتوفرة من مياه بيرين؟
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
                    بإمكانك التعرف على الأحجام المتوفرة والأسعار من خلال صفحة
                    المنتجات في
                    <strong>
                      <span style={{ color: "#ff0000" }}>
                        <a
                          style={{ color: "#ff0000" }}
                          href="https://berain.onelink.me/QL3X"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          هذا الرابط
                        </a>
                      </span>
                    </strong>
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            {/*  */}
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
                    06
                  </span>
                  <h4 className={`accordion-title fw-bold`}>
                    قمت بعمل طلب وتم الدفع إلكترونياً، ثم أُلغي الطلب، كيف
                    أستعيد المبلغ؟
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
                    يمكنك التواصل مع مركز خدمة العملاء على الرقم الموحد
                    920025555 لمتابعة عملية الاسترداد.
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
