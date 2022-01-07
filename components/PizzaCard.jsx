import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container} style={{ textAlign: "center" }}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image
            src={pizza.img}
            alt=""
            width="500"
            height="500"
            className={styles.image}
          />
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>{pizza.prices[0]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
        </a>
      </Link>
    </div>
  );
};

export default PizzaCard;
