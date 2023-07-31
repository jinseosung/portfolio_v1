import styles from "../utils/styles/testimonial.module.css";
import ThierryImg from "../assets/thierry.png";

const Testimonial = () => {
  return (
    <section className={styles.Container}>
      <h3 className={styles.Title}>
        Témoignages<span className={styles.Divider}></span>
      </h3>
      <ul className={styles.Testimonials}>
        <li className={styles.Testimonial}>
          <img className={styles.AvatarImg} src={ThierryImg} alt="thierry" />
          <div className={styles.Bubble}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis id
              error adipisci corporis incidunt atque quas minima quod numquam!
              Assumenda dolor delectus fuga sit eos animi? Facilis aspernatur
              quis doloribus.
            </p>
            <p>name</p>
          </div>
        </li>
        <li className={styles.Testimonial}>
          <img className={styles.AvatarImg} src={ThierryImg} alt="thierry" />
          <div className={styles.Bubble}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis id
              error adipisci corporis incidunt atque quas minima quod numquam!
              Assumenda dolor delectus fuga sit eos animi? Facilis aspernatur
              quis doloribus.
            </p>
            <p>name</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonial;
