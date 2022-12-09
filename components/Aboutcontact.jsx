import styles from "./Aboutcontact.module.css";

export default function Aboutcontact() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.header}>ABOUT US</div>
        <div className={styles.content}>
          <p>
            Liz Wheels Manufacturing, Corporation. is a <br />
            professional bicycle manufacturer which is located in <br />
            Imus City, Cavite Province, Philippines. We mainly <br />
            engaged in the production and sales of all kinds of <br />
            bicycles with well-equipped testing facilities and <br />
            strong technical force.
          </p>
          <p>
            Our product mainly including balance bike, kids bike, <br />
            BMX bike, MTB bike, leisure bike, road bike, bike <br />
            accessory and so on, meanwhile, we also supply all <br />
            kinds of plastic raw material for bike spare parts, such <br />
            as PP, PE granules and so on, our bike product size <br />
            from 10 inch to 27.5 inch.
          </p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.header}>CONTACT US</div>
        <div className={styles.contactcontainer}>
          <div className={styles.card}>
            <p>LizWheels</p>
            <img src="image 29.png" />
          </div>
          <div className={styles.card}>
            <p>LizWheels</p>
            <img src="image 31.png" />
          </div>
          <div className={styles.card}>
            <p>09070321743</p>
            <img src="image 32.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
