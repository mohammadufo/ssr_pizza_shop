import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>+98 937 1700 671</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}> HomePage </li>
          </Link>
          <li className={styles.listItem}> Products </li>
          <li className={styles.listItem}> Menu </li>
          <Image src="/img/logoo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}> Events </li>
          <li className={styles.listItem}> Blog </li>
          <li className={styles.listItem}> Contact </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/cart">
            <a>
              <Image src="/img/cart.png" alt="" width="30px" height="30px" />
              <div className={styles.counter}>{quantity}</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
