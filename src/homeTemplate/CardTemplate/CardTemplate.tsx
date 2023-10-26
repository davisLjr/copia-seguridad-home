import Image from "next/image";
import Link from "next/link";
import styles from "../../scss/templates/card-template.module.scss"

interface CardData {
  title: string;
  description: string;
  route: string;
  imgSrc: string;
}

const CardTemplate: React.FC<CardData> = ({ title, description, route, imgSrc }) => {
  return (
    <div id="cards-container" className={`card-container ${styles.cardContainer}`}>
      <Link href={route} className={styles['thumbnail-image-card']}>    
        <div className={styles['box-img']}>
          <Image src={imgSrc} alt={title} width={268} height={357} />
        </div>
        <div className={styles['thumbnail-image-card-body']}>
          <h3>{title}</h3>
          <small>{description}</small>
        </div>
      </Link>
    </div>
  );
};

export default CardTemplate;
