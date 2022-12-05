import Box from "./Components/Box";
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setvalue] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);

  async function submit(e) {
    e.preventDefault();
    const n = await axios("https://emkanfinances.net/api/add", {
      method: "POST",
      headers: "application/json",
      data: {
        name: name,
        email: email,
        phone: value,
        message: message,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          ref.current.click();
          window.setTimeout(() => {
            window.location.pathname = "/";
          }, 5000);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <a
        data-bs-toggle="modal"
        data-bs-target="#exampleModalHome"
        ref={ref}
      ></a>

      <div
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        className="modal fade"
        id="exampleModalHome"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                تم إرسال الرسالة بنجاح{" "}
              </h5>
              <div class="success-checkmark">
                <div class="check-icon">
                  <span class="icon-line line-tip"></span>
                  <span class="icon-line line-long"></span>
                  <div class="icon-circle"></div>
                  <div class="icon-fix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative parent-home-land">
        <div
          animation="slider"
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <div className="arrow-sliders">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
            </div>
            <div className="bubble-sliders">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("./Assest/Home/بيرين-العذبة.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/IMG_20221127_194403_638.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/من-قلب-الطبيعة.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/بيرين-لحياة-صحية.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div
          className="box container "
          style={{
            padding: "20px 0",
            backgroundColor: "#f7f7f7",
            zIndex: 2,
          }}
        >
          <div className="d-flex align-items-center justify-content-between custom row me-0 ">
            <div
              className="inner-custom  d-flex align-items-center
               justify-content-center flex-wrap
            "
              style={{ gap: "4px", marginBottom: "20px" }}
            >
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="parent-bubbles bg-white col-5"
              >
                <div className="bubbles">
                  <img
                    className="img-b"
                    src={require("./Assest/Home/Bubbles.png")}
                    alt="bubbles"
                  />
                  <img src={require("./Assest/Home/house 1.png")} alt={""} />
                  <p>المنازل</p>
                </div>
              </div>

              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="parent-bubbles bg-white col-5"
              >
                <div className="bubbles">
                  <img
                    className="img-b2"
                    src={require("./Assest/Home/Bubbles.png")}
                    alt="bubbles"
                  />
                  <img src={require("./Assest/Home//school 1.png")} alt={""} />
                  <p>المدارس</p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="800"
                className="parent-bubbles bg-white col-5"
              >
                <div className="bubbles">
                  <img
                    className="img-b3"
                    src={require("./Assest/Home/Bubbles.png")}
                    alt="bubbles"
                  />
                  <img src={require("./Assest/Home/mosque 1.png")} alt={""} />
                  <p>المساجد</p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1100"
                className="parent-bubbles bg-white col-5"
              >
                <div className="bubbles">
                  <img
                    className="img-b4"
                    src={require("./Assest/Home/Bubbles.png")}
                    alt="bubbles"
                  />
                  <img
                    src={require("./Assest/Home/fast-delivery 1.png")}
                    alt={""}
                  />
                  <p>خدمة التوصيل</p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1400"
                className="parent-bubbles bg-white col-5"
              >
                <div className="bubbles">
                  <img
                    className="img-b5"
                    src={require("./Assest/Home/Bubbles.png")}
                    alt="bubbles"
                  />
                  <img
                    src={require("./Assest/Home/payment-method 1.png")}
                    alt={""}
                  />
                  <p>الدفع كاش</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="inner-custom-2 ">
                <p className="inner-p">
                  الطلب صار اسهل مع موقع مياه بيرين نستطيع ايصال طلبكم اينما
                  كنتم{" "}
                </p>
                <div
                  style={{
                    backgroundColor: "var(--seconde-color)",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://wa.me/message/TDUG4FHHP6TPP1"
                  >
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 fw-normal">
                      <img
                        src={require("./Assest/Home/whatsapp.png")}
                        alt="WhatsApp"
                        style={{
                          width: "25px",
                        }}
                      />

                      <p>اطلب الان</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="container ">
        <div className="our-services">
          <h1 className="fw-bold">خدماتنا</h1>
          <p className="custom-p"></p>
          <div className="map d-flex align-items-center justify-content-between">
            <h3 data-aos="fade-down" className="text-black w-50">
              خدمة توصيل المياه إلى كافة المدن السعودية عن طريق مندوبي الشركة.
              <h3> يوجد أكثر من 40 مندوب في كل مدينة لخدمتك</h3>
            </h3>
            <div className="fount-parent" data-aos="fade-right">
              <div id="second-fountain">
                {/* <div class="fountain-animation small">
                <div class="fountain-right">
                  <div class="rotate-center water1"></div>
                  <div class="rotate-center water2"></div>
                  <div class="rotate-center water3"></div>
                </div>

                <div class="fountain-left">
                  <div class="rotate-center2 water4"></div>
                  <div class="rotate-center2 water5"></div>
                  <div class="rotate-center2 water6"></div>
                </div>
              </div> */}
                {/* <div class="fountain-animation big">
                <div class="fountain-right">
                  <div class="rotate-center water1"></div>
                  <div class="rotate-center water2"></div>
                  <div class="rotate-center water3"></div>
                </div>

                <div class="fountain-left">
                  <div class="rotate-center2 water4"></div>
                  <div class="rotate-center2 water5"></div>
                  <div class="rotate-center2 water6"></div>
                </div>
                <div className="block-base"></div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Map */}
      <div className="container">
        <div className="Our-offers mt-5">
          <h1 className="fw-bold">اتصل بنا</h1>
          <p className="custom-p"></p>
          <div style={{ backgroundColor: "#01305D" }} className="mt-5 pb-5">
            <div style={{ backgroundColor: "white" }}></div>
            <div className="container position-relative">
              <form
                onSubmit={submit}
                className="mt-5 position-relative"
                style={{
                  borderTop: "1px solid rgba(246, 246, 246, 0.5)",
                  borderBottom: "1px solid rgba(246, 246, 246, 0.5)",
                }}
              >
                <div
                  className="py-2"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="name" className="py-3 d-block text-white">
                    أدخل اسمك بالكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                    }}
                    placeholder="الاسم الكامل...."
                  ></input>
                </div>

                <div
                  className="py-2"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="email" className="py-3 d-block text-white">
                    البريد الإلكتروني
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id="email"
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                    }}
                    placeholder="Example@gmail.com *"
                  ></input>
                </div>
                <div
                  className="py-2"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="phone" className="py-3 d-block text-white">
                    رقم الجوال ؟
                  </label>
                  <PhoneInput value={value} onChange={setvalue} />
                </div>
                <div
                  className="py-2"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="message" className="py-3 d-block text-white">
                    الرسالة...
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    id="message"
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                      width: "100%",
                    }}
                    placeholder="مرحباً بيرين, هل يمكنكم مساعدتي ب....*"
                  ></textarea>
                </div>
                <button
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{
                    backgroundColor: "#50B065",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    bottom: "-47px",
                    left: "20px",
                    zIndex: "1",
                    cursor: "pointer",
                    userSelect: "none",
                    border: "none",
                  }}
                >
                  <img src={require("./Assest/Contact/send2.png")} alt="icon" />
                  <p className="text-white">إرسال</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us container">
        <div className="row align-items-center justify-content-center custom-about my-4 ">
          <div className="col-md-6">
            <h1 className="custom-h1">من نحن</h1>
            <p className="custom-p"></p>
            <p
              className="custom-p-desc"
              style={{ textAlign: "justify", width: "90%" }}
            >
              منذ إطلاقها ، سعت بيرين جاهدة لقيادة سوق مياه الشرب المعبأة في
              المملكة العربية السعودية باستخدام أفضل التقنيات المتاحة في جميع
              أنحاء العالم واعتماد نفس معايير الجودة الصارمة المستخدمة في مصانع
              مياه الشرب المعبأة الأكثر تقدمًا في العالم ؛ ثم تقديم منتج مثالي
              للمستهلكين المحليين بفضل التقنيات الحديثة مثل الذكاء الاصطناعي
              والتعلم الآلي وأحدث طرق تنقية المياه والتحكم في جميع المكونات.
              لذلك كان من الطبيعي أن تحصل مياه بيرين على أكثر من 15 شهادة جودة
              دولية ومحلية تضمن كفاءة إنتاجها المائي ومطابقتها الكاملة لأعلى
              المواصفات والمعايير العالمية.
            </p>
            <div className="read-more position-relative">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p style={{ marginBottom: "0", textDecoration: "none" }}>
                  اقرأ المزيد
                </p>
                <img
                  style={{ marginTop: "0" }}
                  src={require("./Assest/Home/Arrow 1.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6 position-relative my-5">
            <img
              src={require("./Assest/About/Rectangle 492.png")}
              className="img-fluid"
              alt="about-img"
            />
            <Box
              bottom="-10px"
              right="0"
              width="210.5px"
              height="294px"
              color="#1B1B1F"
              borderRight="2px solid"
              borderBottom="2px solid"
            />
            <Box
              top="-10px"
              left="0"
              width="50%"
              height="100%"
              color="#1B1B1F"
              borderLeft="2px solid"
              borderTop="2px solid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
