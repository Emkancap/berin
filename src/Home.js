import Box from "./Components/Box";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Home() {
  return (
    <div>
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
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("./Assest/Home/1.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/2.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/3.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/4.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./Assest/Home/5.jpg")}
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
                    href="https://api.whatsapp.com/send?phone=966558590684&text="
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
      {/* Bottels */}
      <div className="container py-4">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 gutter-md-y-1">
          <a
            href="https://api.whatsapp.com/send?phone=966558590684&text="
            data-aos="fade-right"
            className="col-12 col-md-4"
            style={{
              height: "150px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              className=" d-flex align-items-center justify-content-start gap-4 p-1 h-100 ms-1"
              style={{
                border: "1px solid  #c5c5c5",
                borderRadius: "10px",
                height: "150px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <img
                src={require("./Assest/Home/Basic.png")}
                alt="Basic Group Bottles"
                style={{
                  objectFit: "cover",
                  width: "80px",
                  transform: "rotate(-90deg)",
                }}
              />
              <h3 className="m-0">المجموعة الاساسية</h3>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=966558590684&text="
            data-aos="fade-right"
            className="col-12 col-md-4  "
            style={{
              height: "150px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              className=" d-flex align-items-center justify-content-start gap-4 p-1 h-100 ms-1"
              style={{
                border: "1px solid  #c5c5c5",
                borderRadius: "10px",
                height: "150px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <img
                src={require("./Assest/Home/Big.png")}
                alt="Bottle Big"
                style={{ objectFit: "cover", width: "80px" }}
              />
              <h3 className=" m-0">المجموعة الكبيرة</h3>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=966558590684&text="
            data-aos="fade-right"
            className="col-12 col-md-4 "
            style={{
              height: "150px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              className=" d-flex align-items-center justify-content-start gap-4 p-1 h-100"
              style={{
                border: "1px solid  #c5c5c5",
                borderRadius: "10px",
                height: "150px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <img
                src={require("./Assest/Home/Glass.png")}
                alt="Berin Glass"
                style={{ objectFit: "cover", width: "80px" }}
              />
              <h3 className=" m-0">بيرين فوارة زجاج</h3>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=966558590684&text="
            data-aos="fade-right"
            className="col-12 col-md-4 "
            style={{
              height: "150px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              className=" d-flex align-items-center justify-content-start gap-4 p-1 h-100"
              style={{
                border: "1px solid  #c5c5c5",
                borderRadius: "10px",
                height: "150px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <img
                src={require("./Assest/Home/justGlass.png")}
                alt="Berin Glass"
                style={{ objectFit: "cover", width: "80px" }}
              />
              <h3 className=" m-0">بيرين زجاج</h3>
            </div>
          </a>
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
            <div className="fount-parent" data-aos="fade-right"></div>
          </div>
        </div>
      </div>
      {/* End Map */}
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
