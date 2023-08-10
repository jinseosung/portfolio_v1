import styles from "../utils/styles/profile.module.css";
import ProfileImg from "../assets/profile.png";
import TypeIt from "typeit-react";

const Profile = () => {
  return (
    <section className={styles.Container} id="profile">
      <div className={styles.Wrapper}>
        <img className={styles.ProfileImg} src={ProfileImg} alt="profile" />
        <div>
          <div className={styles.TitleContainer}>
          <h2
            className={styles.Title}
            aria-label="Bonjour, je suis développeuse web, Jinseo"
          >
            Bonjour <br /> je suis{" "}
            <TypeIt options={{ loop: true, spped: 7 }}>
              <strong className={styles.DescriptionStrong}>
                développeuse web,
              </strong>
            </TypeIt>{" "}
            Jinseo
          </h2>
          </div>
          <p className={styles.Description}>
            Passionnée par le développement web, apprentie infatigable et rapide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
