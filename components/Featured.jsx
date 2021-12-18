import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const slider = [
    { id: 1, img: "/img/featured.png", desc1: "HOT & SPICY", desc2: "PIZZA" },
    { id: 1, img: "/img/featured2.png", desc1: "BUY 2 GET 3", desc2: "" },
    {
      id: 1,
      img: "/img/featured3.png",
      desc1: "SPECIAL PIZZA",
      desc2: "05% OFF",
    },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {slider.map(({ id, img, desc1, desc2 }) => (
          <div className={styles.imgContainer} key={id}>
            <Image
              src={img}
              alt=""
              layout="fill"
              objectFit="contain"
              className={styles.image}
            />
            <div className={styles.decs}>
              <h5 className={styles.h5}>{desc1}</h5>
              <h1 className={styles.h1}>{desc2}</h1>
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
