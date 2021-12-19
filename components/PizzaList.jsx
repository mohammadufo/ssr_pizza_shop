import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import { pizzaData } from "./../data";
import Link from "next/link";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaData.map((i) => (
          <PizzaCard key={i.id} title={i.title} price={i.price} img={i.img} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
