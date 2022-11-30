export default function Contact() {
  return (
    <div style={{ backgroundColor: "#01305D" }} className="mt-5 pb-5">
      <div style={{ height: "40vh", backgroundColor: "white" }}></div>
      <div className="container position-relative">
        <div
          style={{
            top: "-200px",
            textAlign: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={require("./Assest/Contact/unsplash_WEDDt-u3q3o.png")}
            alt="img"
            className="contact-img"
          />
        </div>
        <div className="text-white">
          <h3 className="fw-bold">لنبقى على تواصل ....</h3>
          <p>لطلب منتجات بيرين أو للإقتراحات و الملاحظات يرجى التواصل</p>
          <div className="d-flex align-items-center justify-content-between color-white text-white w-50 ">
            <div
              className="fw-bold pb-1"
              style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
            >
              <a
                href="mailto:info@water-sa.online"
                style={{ textDecoration: "none", color: "white" }}
                className="ms-2"
              >
                info@water-sa.online
              </a>
              <img
                src={require("./Assest/Contact/directinbox.png")}
                alt="icon"
              />
            </div>
            <div className="fw-bold">
              <span className="ms-2"> 966583806995</span>
              <img src={require("./Assest/Contact/Vector.png")} alt="icon" />
            </div>
          </div>
          <p>للمبيعات خارج المملكة العربية السعودية والتصدير</p>
          <div className="fw-bold pb-1">
            <a
              href="mailto:Export@berain.com.sa"
              style={{ textDecoration: "none", color: "white" }}
              className="ms-2"
            >
              Export@water-sa.online
            </a>
            <img src={require("./Assest/Contact/directinbox.png")} alt="icon" />
          </div>
        </div>
        <form
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
              placeholder="966583806995"
            ></input>
          </div>
          <div
            className="py-2"
            style={{ borderBottom: "1px solid rgba(246, 246, 246, 0.5)" }}
          >
            <label htmlFor="message" className="py-3 d-block text-white">
              الرسالة...
            </label>
            <textarea
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
  );
}
