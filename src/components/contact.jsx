import styles from "../utils/styles/contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LogoImg from "../assets/calligraphy.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kbpzcge",
        "template_cdc2gl9",
        form.current,
        "RmH_JfSx9euNPSf8k"
      )
      .then(
        () => {
          alert("Votre message a été bien envoyé 🎉✨");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={styles.Container} id="contact">
      <div className={styles.Wrapper}>
        <div className={styles.SectionContainer}>
          <div className={styles.LogoContainer}>
            <h3 className={styles.Title}>
              Contact<span className={styles.Divider}></span>
            </h3>
            <p className={styles.Description}>
              N'hésitez pas à me contacter via ce formulaire, ou par&nbsp;
              <a className={styles.Link} href="mailto:jinseosung15@gmail.com">
                mail
              </a>
              &nbsp;!
            </p>
            <img
              className={styles.LogoImg}
              src={LogoImg}
              alt="calligraphy Jinseo Sung"
            />
          </div>
          <form ref={form} onSubmit={sendEmail} className={styles.Form}>
            <div className={styles.FormContainer}>
              <label>Nom</label>
              <input
                className={styles.Input}
                type="text"
                name="from_name"
                required
              />
            </div>
            <div className={styles.FormContainer}>
              <label>Email</label>
              <input
                className={styles.Input}
                type="email"
                name="from_email"
                required
              />
            </div>
            <div className={styles.FormContainer}>
              <label>Sujet</label>
              <input
                className={styles.Input}
                type="text"
                name="ask_title"
                required
              />
            </div>
            <div className={styles.FormContainer}>
              <label>Votre message</label>
              <textarea
                className={`${styles.Input} ${styles.Textarea}`}
                type="text"
                name="message"
                required
              ></textarea>
            </div>
            <div className={styles.BtnContainer}>
              <input className={styles.Btn} type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
