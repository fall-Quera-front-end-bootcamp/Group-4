import Form from "../../Components/common/form/Index";
import DynamicInput from "../../Components/common/input";
import { Link } from "react-router-dom";
import DynamicButton from "../../Components/common/button";
import { useState } from "react";
import Modal from "../../Components/common/modal";
import { registerr , fetchAccounts } from "../../../services/account";

function Register() {
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleRegister = async () => {
    try {
      const userData = await registerr(username, email, password);
      console.log("Registration successful:", userData);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  //fetchAccounts();




  const customStyle = {
    width: "640px",
    height: "480px",
    borderRadius: "20px",
  };

  const header = {
    fontWeight: 800,
    fontSize: "32px",
  };

  const link = {
    textDecoration: "underline",
    fontWeight: 400,
    fontSize: "12px",
    paddingTop: "10px",
    color: "#1E1E1E",
  };

  const labels = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontSize: "14px",
  };

  const register = {
    fontWeight: 800,
    fontSize: "16px",
  };

  const notRegister = {
    color: "#1E1E1E",
    fontWeight: 500,
    fontSize: "16px",
  };

  const headerModal = {
    fontWeight: 800,
    fontSize: "32px",
  };

  const rule = {
    fontWeight: 400,
    fontSize: "16px",
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Form style={customStyle}>
        <h1 style={header}>ثبت‌نام در کوئرا تسک منیجر</h1>
        <div className="w-[592px] h-[355px] flex flex-col justify-center items-center">
          <label
            style={labels}
            className="w-full flex flex-col
                     justify-center items-end pt-6"
          >
            نام کاربری
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={username}
            onChange={(value) => setUsename(value)}
            type={"text"}
            style={{ marginTop: "8px" }}
          />
          <label
            style={labels}
            className="w-full flex flex-col
                     justify-center items-end pt-6"
          >
            ایمیل
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={email}
            onChange={(value) => setEmail(value)}
            type={"email"}
            style={{ marginTop: "8px" }}
          />

          <label
            style={labels}
            className="w-full flex flex-col
                    justify-center items-end pt-6"
          >
            {" "}
            رمز عبور
          </label>
          <DynamicInput
            width={592}
            height={40}
            value={password}
            onChange={(value) => setPassword(value)}
            type={"password"}
            style={{ marginTop: "8px" }}
          />

          <div className="w-full flex justify-end py-4">
            <Link
              to="#"
              className="w-[190px] h-[23px] size-[16px] leading-[22.55px] text-right font-medium text-black hover:t pr-1"
              style={register}
              onClick={toggleModal}
            >
              <span className="underline underline-offset-4 hover:text-grey-700">
                قوانین و مقررات{" "}
              </span>
              را میپذیرم
            </Link>
            <input
              className=" border-[#999999] w-[20px] h-[20px]  rounded-[4px] border-[1px]"
              type="checkbox"
            />
          </div>

          <div className="pt-6">
            <DynamicButton
              text="ثبت نام"
              width={592}
              height={40}
              onClick={handleRegister}
              bgColor="blue"
              textColor="white"
              fontWeight={800}
              fontSize="14px"
              borderRadius={6}
            />
          </div>
        </div>
      </Form>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div>
          <h1 style={headerModal}>قوانین و مقررات</h1>
          <p style={rule}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Register;
