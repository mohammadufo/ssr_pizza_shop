import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ id, title, price, img }) => {
  return (
    <div className={styles.container}>
      <a href="/product/:id">
        <Image
          src={img}
          alt=""
          width="500"
          height="500"
          className={styles.image}
        />
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{price}</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </a>
    </div>
  );
};

export default PizzaCard;
