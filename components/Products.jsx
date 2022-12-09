import styles from "./Products.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>MOST POPULAR PRODUCTS</div>
      <div className={styles.cardscontainer}>
        <div className={styles.bikecards}>
          <img src="bike1.png" className={styles.image} />
          <div className={styles.overlay}>
    <div className={styles.text}>TRINX M100 ELITE 2022 <br />
SPECIFICATIONS:<br />
FRAME: 27.5 medium alloy frame<br />
STEM: Trinx alloy stem<br />
SHIFTER: Ltwoo A3 rapid fire shifter<br />
DRIVETRAIN: 8x3 speed<br />
BRAKES: Xspark/RSX hydraulic disc brakes<br />
CABLE ROUTING: Internal<br />
HANDLEBAR: Trinx handlebar<br />
FORK: Trinx Lockout suspension fork<br />
RIMS: alloy rims<br />
RD: Ltwoo RD<br />
FD: Ltwoo FD<br />
TIRE: Nylon 27.5x2.10<br />
</div>

  </div>
          <p className={styles.title}>TRINX GRAY/RED</p>
        </div>
        <div className={styles.bikecards}>
          <img src="image 10.png" className={styles.image}  />
          <div className={styles.overlay}>
    <div className={styles.text}>TRINX M100 ELITE 2022<br />
SPECIFICATIONS:<br />
FRAME: 27.5 medium alloy frame<br />
STEM: Trinx alloy stem<br />
SHIFTER: Ltwoo A3 rapid fire shifter<br />
DRIVETRAIN: 8x3 speed<br />
BRAKES: Xspark/RSX hydraulic disc brakes<br />
CABLE ROUTING: Internal<br />
HANDLEBAR: Trinx handlebar<br />
FORK: Trinx Lockout suspension fork<br />
RIMS: alloy rims<br />
RD: Ltwoo RD<br />
FD: Ltwoo FD<br />
TIRE: Nylon 27.5x2.10 <br />
</div>
  </div>
          <p className={styles.title}>TRINX RED</p>
        </div>
        <div className={styles.bikecards}>
          <img src="phoenix green.png" className={styles.image} />
          <div className={styles.overlay}>
    <div className={styles.text}>PHOENIX SWIFT 700C ROADBIKE<br />
SPECIFICATIONS:<br />
FRAME: Alloy frame size 52 top tube<br />
STEM: Phoenix stem alloy<br />
SHIFTER: Shimano shifter 7x2<br />
FORK: Phoenix steel rigid fork<br />
RIMS: Phoenix stock quick release wheels set alloy<br />
RD: Shining tz rd<br />
FD: Unbranded FD<br />
TIRE: 700cx23 tires<br />
</div>
  </div>
          <p className={styles.title}>PHOENIX GREEN</p>
        </div>
        <div className={styles.bikecards}>
          <img src="phoenix black.png" className={styles.image}  />
          <div className={styles.overlay}>
    <div className={styles.text}>PHOENIX SWIFT 700C ROADBIKE<br />
SPECIFICATIONS:<br />
FRAME: Alloy frame size 52 top tube<br />
STEM: Phoenix stem alloy<br />
SHIFTER: Shimano shifter 7x2<br />
FORK: Phoenix steel rigid fork<br />
RIMS: Phoenix stock quick release wheels set alloy<br />
RD: Shining tz rd<br />
FD: Unbranded FD<br />
TIRE: 700cx23 tires<br /></div>
  </div>
          <p className={styles.title}>PHOENIX BLACK</p>
        </div>
        <div className={styles.bikecards}>
          <img src="celt silver.png" className={styles.image}  />
          <div className={styles.overlay}>
    <div className={styles.text}>CELT 2K21<br />
SPECIFICATIONS:<br />
FRAME: Hi-tensile Frameset<br />
RIMS: Arrow 32/32 spokes wheelset<br />
CRANKSET: 48tt celt crankset<br />
COGS: 17tt cogs fixed<br />
TIRE: Kenda Tires<br /></div>
  </div>
         
          <p className={styles.title}>CELT SILVER</p>
        </div>
        <div className={styles.bikecards}>
          <img src="celt cyan.png" className={styles.image}  />
          <div className={styles.overlay}>
    <div className={styles.text}>CELT 2K21<br />
SPECIFICATIONS:<br />
FRAME: Hi-tensile Frameset<br />
RIMS: Arrow 32/32 spokes wheelset<br />
CRANKSET: 48tt celt crankset<br />
COGS: 17tt cogs fixed<br />
TIRE: Kenda Tires<br />
</div>
  </div>
  <p className={styles.title}>CELT CYAN</p>
        </div>
      </div>
    </div>
    
  );
}
