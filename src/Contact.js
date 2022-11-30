import { useState, useRef } from "react";
import axios from "axios";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
        phone: phone,
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
    <div style={{ backgroundColor: "#01305D" }} className="mt-5 pb-5">
      <a
        data-keyboard="false"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalContact"
        ref={ref}
      ></a>

      <div
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        className="modal fade"
        id="exampleModalContact"
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
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
  );
}
