import Box from "./Components/Box";

export default function News() {
  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div>
          <div className="d-flex position-relative mb-4">
            <img
              src={require("./Assest/Questions/Abstract-01.png")}
              alt="Circle"
            />
            <h1
              className="fw-bold position-absolute"
              style={{ marginRight: "80px" }}
            >
              الأخبار....
            </h1>
          </div>
        </div>
        <div className="text-center">
          <h1 className="fw-bold">كأس بيرين للسوبر السعودي</h1>
          <p className="news-p1">
            وقّع الاتحاد السعودي لكرة القدم، اليوم الثلاثاء، اتفاقية رعاية لكأس
            السوبر السعودي مع شركة مياه بيرين، حيث تم الاتفاق على بنود الرعاية
            والتي من ضمنها الاسم الرسمي للمسابقة لعام 2021 لمدة موسم واحد “كأس
            بيرين للسوبر السعودي”
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <Box
            top="-10px"
            left="-10px"
            width="30%"
            height="101%"
            borderTop="2px solid black"
            borderLeft="2px solid black"
          />
          <Box
            bottom="-10px"
            right="-10px"
            width="20%"
            height="60%"
            borderBottom="2px solid black"
            borderRight="2px solid black"
          />
          <img
            src={require("./Assest/News/berain-sponsor-kaas 1.png")}
            className="img-fluid"
            alt="berain-sponsor"
          />
        </div>
        <p className="text-center news-p2">
          ومثّل الاتحاد السعودي لكرة القدم الأمين العام للاتحاد إبراهيم القاسم،
          فيما مثل شركة بيرين رئيسها التنفيذي المهندس موفق مباره.
        </p>
        <div
          className="box-news-1 pt-5 pb-5 d-flex"
          style={{
            borderTop: "2px solid rgb(27, 27, 31, 0.7)",
          }}
        >
          <div
            className="d-flex news-parent-box-2"
            style={{
              background: "rgba(246, 246, 246, 0.5)",
              boxShadow: "10px 14px 40px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div>
              <img
                src={require("./Assest/News/berain-g20-summit 1.png")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="text-center w-50 d-flex justify-content-center align-items-center flex-column news-box-2">
              <h1 className="fs-2 fw-bold">بيرين في قمة العشرين</h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                  margin: "30px auto",
                }}
              >
                سعدنا بالتواجد في أبرز حدث عالمي من خلال تقديم منتجاتنا عالية
                الجودة في قمة العشرين
              </p>
            </div>
          </div>
        </div>
        <div
          className="box-news-1 pt-5 pb-5 d-flex"
          style={{
            borderTop: "2px solid rgb(27, 27, 31, 0.7)",
          }}
        >
          <div className="box-slider-news">
            <div className="box-news-qetaf text-align-justify">
              <div className="text-center">
                <img src={require("./Assest/News/qetaf 1.png")} alt="" />
              </div>
              <h2 className="text-center">بيرين تنضم لشركاء برنامج قطاف</h2>
              <p>
                حرصاً منها على تقديم أفضل تجربة وتوفير أفضل وأسهل الخيارات
                والخدمات لعملائها، فقد سعت بيرين للانضمام لشركاء برنامج قطاف من
                شركة الاتصالات السعودية STC لكي يحصل عملاء بيرين على نقاط قطاف
                مقابل كل عملية طلب وشراء من مياه بيرين. حيث يتم إضافة النقاط
                تلقائياً من خلال عند الطلب من خلال تطبيق بيرين أو الموقع
                الالكتروني أو الاتصال على الرقم الموحد 920025555
              </p>
            </div>
            <div className="box-news-tamayoz text-align-justify">
              <div className="text-center">
                <img src={require("./Assest/News/tamayoz 1.png")} alt="" />
              </div>
              <h2 className="text-center ">
                اتفاقية تعاون مع stc وخصم لعملاء التميز
              </h2>
              <p>
                وقّعت بيرين اتفاقية للتعاون المشترك مع شركة الاتصالات السعودية
                stc تتيح لكل عملاء التميز الحصول على خصم خاص 15% على كل منتجات
                بيرين. حيث يمكن للعميل الحصول على الخصم مباشرة من خلال تطبيق
                بيرين وبعد التأكد آلياً من أحقية العميل لخصم عملاء التميز، يتم
                تطبيق الخصم فوراً. كما يمكن الاستفادة من الخصم عن طريق الموقع
                الالكتروني أو بالاتصال على الرقم الموحد 920025555
              </p>
            </div>
            <div className="box-news-apple text-align-justify">
              <div className="text-center">
                <img src={require("./Assest/News/apple-pay 1.png")} alt="" />
              </div>
              <h2 className="text-center">إطلاق Apple Pay في تطبيق بيرين</h2>
              <p>
                في إطار حرصها على مواكبة أحدث التقنيات، أتاحت بيرين إمكانية
                الدفع عن طريق خدمة Apple Pay بعد أن أتمت كافة التجهيزات التقنية
                لذلك. الجدير بالذكر أن طرق الدفع الحالية في تطبيق بيرين تشمل
                البطاقة الائتمانية وبطاقات مدى بالإضافة إلى الدفع عند الاستلام،
                سواءً نقداً أو من خلال بطاقة الصراف بإستخدام جهاز نقاط البيع
                المتوفر مع مندوبي التوصيل
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
