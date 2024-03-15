import styles from "./LikedBooks.module.css";

function LikedBooks({data:{title,image}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default LikedBooks