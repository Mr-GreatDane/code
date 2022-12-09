import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logocontainer}>
        <img src="logo.png" />
      </div>
      <div className={styles.buttoncontainer}>
        <div className={styles.leftbutton}>
          <button><a href="/@LizWheels">HOME</a></button>
          <button><a href="/roadbikes">ROAD BIKES</a></button>
          <button><a href="/mountainbikes">MOUNTAIN BIKES</a></button>
          <button><a href="/fixedgearbikes">FIXED GEAR BIKES</a></button>
        </div>
        <div className={styles.rightbutton}>
        <button>About</button>
        <button>Blog</button>
        </div>
      </div>
    </div>
  );
}
