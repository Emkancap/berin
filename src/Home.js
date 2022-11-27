import Box from "./Components/Box";

export default function Home() {
  return (
    <div>
      <div className="position-relative">
        <div className="img-landing row me-0"></div>
        <div
          className="box"
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
                    className="img-b"
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
                    className="img-b"
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
                    className="img-b"
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
                    className="img-b"
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
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p>اطلب الان</p>
                    <img
                      src={require("./Assest/Home/whatsapp.png")}
                      alt="WhatsApp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-landing container">
        <h1 className="fw-bold">بيرين</h1>
        <p>افتح الباب لحياة أفضل...</p>
        <h1 className="fw-bold">مياه عالية الجودة لك ولأسرتك</h1>
        <p>
          التركيب والصيانة والاصلاح الاحترافي لأنظمة معالجة المياه المختلفة, بما
          في ذلك أنظمة تقنية المياه{" "}
        </p>
      </div>
      <div className="container">
        <div className="Our-offers mt-5">
          <h1 className="fw-bold">اتصل بنا</h1>
          <p class="custom-p"></p>
          <div style={{ backgroundColor: "#01305D" }} className="mt-5 pb-5">
            <div style={{ backgroundColor: "white" }}></div>
            <div className="container position-relative">
              <form
                className="mt-5 position-relative"
                style={{
                  borderTop: "1px solid rgba(246, 246, 246, 0.5)",
                  borderBottom: "1px solid rgba(246, 246, 246, 0.5)",
                }}
              >
                <div
                  className="py-5"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="name" className="py-3 d-block text-white">
                    الاسم بالكامل ؟
                  </label>
                  <input
                    type="text"
                    id="name"
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                    }}
                    placeholder="نور نعساني"
                  ></input>
                </div>

                <div
                  className="py-5"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="email" className="py-3 d-block text-white">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="text"
                    id="email"
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                    }}
                    placeholder="Nour@n.com *"
                  ></input>
                </div>
                <div
                  className="py-5"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="phone" className="py-3 d-block text-white">
                    رقم الهاتف او الجوال ؟
                  </label>
                  <input
                    type="text"
                    id="phone"
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                    }}
                    placeholder="***********"
                  ></input>
                </div>
                <div
                  className="py-5"
                  style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
                >
                  <label htmlFor="message" className="py-3 d-block text-white">
                    الرسالة...
                  </label>
                  <input
                    type="text"
                    id="message"
                    style={{
                      backgroundColor: "inherit",
                      outline: "none",
                      border: "none",
                      caretColor: "white",
                      color: "white",
                    }}
                    placeholder="مرحباً بيرين, هل يمكنكم مساعدتي ب....*"
                  ></input>
                </div>
                <div
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
                  }}
                >
                  <img src={require("./Assest/Contact/send2.png")} alt="icon" />
                  <p className="text-white">إرسال</p>
                </div>
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
            <div
              className="read-more position-relative"
              style={{ cursor: "pointer" }}
            >
              <p style={{ marginBottom: "0" }}>اقرأ المزيد</p>
              <img
                style={{ marginTop: "0" }}
                src={require("./Assest/Home/Arrow 1.png")}
                alt=""
              />
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
