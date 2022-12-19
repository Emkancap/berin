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
                width="150px"
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
                <a href="https://api.whatsapp.com/send?phone=966595587077&text=">
                  <i className="fa-brands fa-square-whatsapp"></i>
                </a>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="end-footer d-flex justify-content-evenly align-items-center p-3">
        <a
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          شهادة ضريبة القيمة المضافة
        </a>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  شهادة ضريبة القيمة المضافة
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-dialog modal-dialog-scrollable">
                  <img
                    src={require("../Assest/Questions/berain_tax_cer.png")}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/policy">
          <p className="m-0">الخصوصية وسياسة الاسترجاع</p>
        </Link>
      </div>
    </div>
  );
}
