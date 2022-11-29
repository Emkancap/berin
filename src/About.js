import Bubble from "./Components/Bubble";
import Box from "./Components/Box";
import Carousel from "@itseasy21/react-elastic-carousel";

export default function About() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className="position-relative my-5 overflow-hidden">
      <Bubble top="50%" right="0" />
      <div className="container ">
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
            <div className="text-center position-relative">
              <img src={require("./Assest/About/Arrow 1.png")} alt="Arrow" />
              <img
                src={require("./Assest/About/Bubbles-1.png")}
                alt="Bubbles"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "50%",
                  transform: "translateX(50%)",
                }}
              />
              <img
                src={require("./Assest/About/Bubbles.png")}
                alt="Bubbles"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "50%",
                  transform: "translateX(50%)",
                }}
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
        <div>
          <img
            src={require("./Assest/About/Picture2 1.png")}
            alt="Bottel"
            className="img-fluid"
          />
        </div>

        <div className="row align-items-center justify-content-between my-5">
          <div className="col-md-6">
            <img
              src={require("./Assest/About/Picture3-298x300 1.png")}
              alt="Bottle img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 custom-about-service">
            <Bubble top="50%" right="50%" />
            <p>
              نجعل اختيارك أسهل لمياه الشرب المثالية لك ولعائلتك، بجودة عالمية
              وأحجام تناسب كل الأوقات
            </p>
            <h4 style={{ fontWeight: 600 }}>مياه معبأة بدون أي تدخل بشري</h4>
            <p>
              في بيرين، نعتمد على التقنية والأتمتة بالكامل لإنتاج مياه الشرب
              التي نثق في تقديمها لك ولعائلتك بأمان. جميع خطوط الإنتاج لدينا
              تعمل بأتمتة كاملة. لذلك، تأكد أن يدك هي أول يد تلامس العبوة
            </p>
            <h4 style={{ fontWeight: 600 }}>أحجام متنوعة لاحتياجات مختلفة</h4>
            <p>
              لأننا نفهم احتياجاتكم المتنوعة، ننتج لكم مقاسات مختلفة تبدأ من حجم
              200 مل حتى 12 لتر، لتلبي جميع احتياجاتكم
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-between my-5 custom-about-section">
          <div className="col-md-6 custom-about-service">
            <Bubble top="50%" right="50%" />
            <h4 style={{ fontWeight: 600 }}>مياه شرب مثالية لكل العائلة</h4>
            <p style={{ width: "80%" }}>
              لأن العائلة هي محور اهتمامكم، ننتج لكم مياه الشرب التي يُعتمد
              عليها لتلبية كافة احتياجاتكم
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={require("./Assest/About/about-us-family-300x290 1.png")}
              alt="Bottle img"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-between my-5 custom-about-section custom-about-service-2">
          <div className="col-md-6">
            <img
              src={require("./Assest/About/about-berain-vision 1.png")}
              alt="Bottle img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 custom-about-service ">
            <Bubble top="50%" right="50%" />
            <h4 style={{ fontWeight: 600 }}>الرؤية</h4>
            <p className="custom-p"></p>
            <p style={{ width: "80%" }}>
              تتمثل رؤية الشركة في أن تكون العلامة التجارية الرائدة في مجال
              تصنيع وتعبئة مياه الشرب وذلك من خلال تقديم أعلى مستوى في جودة
              المنتجات وخدمة العملاء.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-between my-5 custom-about-section">
          <div className="col-md-6 custom-about-service">
            <Bubble top="50%" right="50%" />
            <h4 style={{ fontWeight: 600 }}>الرسالة</h4>
            <p className="custom-p"></p>
            <p style={{ width: "80%" }}>
              تقديم منتجات عالية الجودة مع الالتزام بالابتكار وخدمة العملاء
              والعمل بروح الفريق
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={require("./Assest/About/about-berain-mission 1.png")}
              alt="Bottle img"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 style={{ fontWeight: "600" }}>
            شهادات الجودة والعضويات العالمية
          </h1>
          <p style={{ fontWeight: "500" }}>
            تتمتع بيرين بعضوية العديد من المنظمات العالمية والعربية لمياه الشرب
            وسلامة الغذاء. كما حصلت على كثير من شهادات الجودة والتميّز في سلامة
            المياه و الصحة المهنية و إدارة العمليات وجودة المذاق، وغيرها
            الكثير..
          </p>
        </div>
        <div className="carousel-f">
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay
            autoPlaySpeed={2000}
          >
            <div className="custom-card">
              <img src={require("./Assest/About/iso9001 1.png")} alt="fssc2" />
              <div>
                <span>
                  <p>توفر مراقبة مستوى الجودة وإدارة العمليات في الشركة</p>
                </span>
              </div>
            </div>
            <div className="custom-card">
              <img src={require("./Assest/About/itqi 1.png")} alt="fssc2" />
              <div>
                <span>
                  <p>شهادة المذاق الأفضل من المعهد العالمي للتذوق</p>
                </span>
              </div>
            </div>
            <div className="custom-card">
              <img
                src={require("./Assest/About/ohsas18001 1.png")}
                alt="fssc2"
              />
              <div>
                <span>
                  <p>شهادة تطبيق معايير السلامة والصحة المهنية العالمية</p>
                </span>
              </div>
            </div>
            <div className="custom-card">
              <img src={require("./Assest/About/fssc2 1.png")} alt="fssc2" />
              <div>
                <span>
                  <p>من أهم الشهادات لضمان سلامة المنتج لصحة المستهلك</p>
                </span>
              </div>
            </div>
            <div className="custom-card">
              <img src={require("./Assest/About/saso 1.png")} alt="fssc2" />
              <div>
                <span>
                  <p>شهادة مطابقة المنتج للمقاييس السعودية</p>
                </span>
              </div>
            </div>
          </Carousel>
          <p
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            14 / 5{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
