import styles from "./Hero.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Hero() {
  const images = [
    "./slide1.png",
    "./slide2.png",
    "./slide3.png",
    "./slide4.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.flexcontainer}>
          <div>
          <img src="freeshipping.png" />
            <p>
            FREE SHIPPING & RETURN
            </p>
          </div>
          <div className={styles.flexcontainercenter}>
          <img src="247.png" />
            <p>
            ONLINE SUPPORT 24/7
            </p>
          </div>
          <div>
          <img src="moneyback.png" />
            <p>
            MONEY BACK GUARANTEE
            </p>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Slide>
          <div className={styles.eachslideeffect}>
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
          </div>
          <div className={styles.eachslideeffect}>
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
          </div>
          <div className={styles.eachslideeffect}>
            <div style={{ backgroundImage: `url(${images[2]})` }}></div>
          </div>
          <div className={styles.eachslideeffect}>
            <div style={{ backgroundImage: `url(${images[3]})` }}></div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
