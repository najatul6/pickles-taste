import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import bannerImg from "../../assets/banner/6.jfif";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { useState } from "react";

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic, e.g., send data to a server.
    setIsSent(true);

    // Optionally reset the button state after some time
    setTimeout(() => setIsSent(false), 3000);
  };
  return (
    <section>
      <Helmet>
        <title>Contact Us | Pickles Taste</title>
        <meta name="description" content="Contact Us Page of Asar Market" />
      </Helmet>
      <SectionBanner
        bgImg={bannerImg}
        title="Contact Us"
        description="Would you like to try a dish?"
      />
      <div>
        {/* Location section  */}
        <section>
          <SectionHeading title="OUR LOCATION" subTitle="Visit Us" />
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mx-auto mb-10">
            <div className="flex flex-col justify-center items-center text-white w-full">
              <div className="bg-brand-color/90 w-full flex justify-center items-center py-5">
                <FaPhone size={"32px"} />
              </div>
              <div className="flex flex-col justify-center items-center w-3/4 bg-white/5 gap-4 py-10  h-[200px]">
                <h2 className="text-2xl font-bold">Phone</h2>
                <p>+88 01773 827-414</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white w-full">
              <div className="bg-brand-color/90 w-full flex justify-center items-center py-5">
                <FaMapLocation size={"32px"} />
              </div>
              <div className="flex flex-col justify-center items-center w-3/4 bg-white/5 gap-4 py-10  h-[200px]">
                <h2 className="text-2xl font-bold">Address</h2>
                <p>Rangpur City, Rangpur</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white w-full">
              <div className="bg-brand-color/90 w-full flex justify-center items-center py-5">
                <FaClock size={"32px"} />
              </div>
              <div className="flex flex-col justify-center items-center w-3/4 bg-white/5 gap-4 py-10  h-[200px]">
                <h2 className="text-2xl font-bold">WORKING HOURS</h2>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-10 w-full">
          <SectionHeading title="CONTACT FORM" subTitle="Send Us a Message" />
          <div className="bg-white/5 py-10 lg:py-20 px-5 lg:px-20 w-11/12 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                {/* Name Field  */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <label
                    htmlFor="name"
                    className="text-white text-xl font-bold"
                  >
                    Name*
                  </label>
                  <input
                    className="w-full rounded-xl shadow-xl py-7 px-8 bg-white/10 text-brand-color focus:outline-none focus:font-bold"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </div>

                {/* Email Field  */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <label
                    htmlFor="email"
                    className="text-white text-xl font-bold"
                  >
                    Email*
                  </label>
                  <input
                    className="w-full rounded-xl shadow-xl py-7 px-8 bg-white/10 text-brand-color focus:outline-none focus:font-bold"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              {/* Phone Field  */}
              <div className="w-full flex flex-col justify-center items-start gap-4">
                <label htmlFor="phone" className="text-white text-xl font-bold">
                  Phone*
                </label>
                <input
                  className="w-full rounded-xl shadow-xl py-7 px-8 bg-white/10 text-brand-color focus:outline-none focus:font-bold"
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                />
              </div>

              {/* Message Field  */}
              <div className="w-full flex flex-col justify-center items-start gap-4">
                <label
                  htmlFor="message"
                  className="text-white text-xl font-bold"
                >
                  Message*
                </label>
                <textarea
                  className="w-full h-36 rounded-xl shadow-xl py-7 px-8 bg-white/10 text-brand-color focus:outline-none focus:font-bold"
                  name="message"
                  placeholder="Enter Your Message"
                />
              </div>
              {/* From Uiverse.io by marcelodolza  */}
              <button className="button" type="submit">
                <div className="outline"></div>
                <div className={`state ${isSent ? "state--sent" : "state--default"}`}>
                  <div className="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g style={{ filter: "url(#shadow)" }}>
                        {/* Icon Paths */}
                        <path
                          d={isSent 
                            ? "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                            : "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"}
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>
                    {isSent ? (
                      <>
                        <span style={{ "--i": 5 }}>S</span>
                        <span style={{ "--i": 6 }}>e</span>
                        <span style={{ "--i": 7 }}>n</span>
                        <span style={{ "--i": 8 }}>t</span>
                      </>
                    ) : (
                      <>
                        <span style={{ "--i": 0 }}>S</span>
                        <span style={{ "--i": 1 }}>e</span>
                        <span style={{ "--i": 2 }}>n</span>
                        <span style={{ "--i": 3 }}>d</span>
                        <span style={{ "--i": 4 }}>M</span>
                        <span style={{ "--i": 5 }}>e</span>
                        <span style={{ "--i": 6 }}>s</span>
                        <span style={{ "--i": 7 }}>s</span>
                        <span style={{ "--i": 8 }}>a</span>
                        <span style={{ "--i": 9 }}>g</span>
                        <span style={{ "--i": 10 }}>e</span>
                      </>
                    )}
                  </p>
                </div>
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
