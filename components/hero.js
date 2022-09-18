import styles from "styles/hero.module.scss"
import Image from "next/image"
// import cube from 'images/cube.jpg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

const cube = {
  src: 'https://images.microcms-assets.io/assets/4078255b8bf44279b739a86d1384e4ef/84feea8270064396b687baaac2138553/cube.jpg',
  height: 1300,
  width: 1500,
  blurDataURL: 'data:image/jpeg;base64'
}

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && (
          <figure className={styles.image}>
            <Image
              src={cube}
              alt=""
              layout="responsive"
              sizes="(min-width: 1152px) 576px,(min-width: 768px) 50vw,100vw"
              priority
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    </div>
  )
}
