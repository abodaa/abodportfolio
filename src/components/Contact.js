import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import "../styles/contact.scss";
import emailjs from "@emailjs/browser";
import { useSpring, animated } from "react-spring";
import HashLoader from "react-spinners/HashLoader";


export default function Contact() {
  const form = React.useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vl4dpd",
        "template_sy4v17n",
        form.current,
        "Rw2i8gn1M8ATvoT2H"
      )
      .then(
        (result) => {
          alert("Message Successfully Sent!");
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
    e.target.reset();
  };
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 700 },
  });
  const style2 = useSpring({
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 700 },
  });
  const style3 = useSpring({
    from: { opacity: 0, marginBottom: 100 },
    to: { opacity: 1, marginBottom: 0 },
    config: { duration: 1000 },
  });

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return loading ? (
    <HashLoader
      className="loader"
      size={150}
      color={"#ffffff"}
      loading={loading}
    />
  ) : (
    <div className="contact-page-container">
      <div className="contact-header-description">
        <animated.div style={style}>
          <h1 className="contact-header">Got a problem to solve?</h1>
          <p className="contact-description">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
        </animated.div>
      </div>
      <form onSubmit={sendEmail} ref={form}>
        <ul className="form-fields-container">
          <animated.div style={style2}>
            <div className="name-email">
              <li>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>

              <li>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
            </div>
          </animated.div>
          <div className="subject-message">
            <animated.div style={style3}>
              <div className="name-email">
                <li>
                  <input
                    className="input"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </li>

                <li>
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
              </div>
            </animated.div>
            <li>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </li>
          </div>
          <li>
            <input className="submit-btn" type="submit" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  );
}
