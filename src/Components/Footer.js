import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer-parent">
        <div className="footer container">
          <div className="d-flex justify-content-center flex-column" style={{}}>
            <div className="logo-footer text-center mb-4">
              <img
                src={require("../Assest/Footer/Berain 2.png")}
                className="img-fluid"
                alt="logo"
              />
            </div>
            <p className="text-center">
              نجعل اختيارك أسهل لمياه الشرب المثالية لك ولعائلتك،<br></br> بجودة
              عالمية وأحجام تناسب كل الأوقات
            </p>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <li>
                <Link>
                  <i class="fa-brands fa-square-whatsapp"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-square-instagram"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="end-footer d-flex justify-content-evenly align-items-center p-3">
        <Link>
          <p className="m-0">شهادة ضريبة القيمة المضافة</p>
        </Link>
        <Link>
          <p className="m-0">الخصوصية وسياسة الاسترجاع</p>
        </Link>
      </div>
    </div>
  );
}
