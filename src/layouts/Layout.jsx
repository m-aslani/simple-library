import styles from "./Layout.module.css";


function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Library App </h1>
        <p>
            <a href="#">SITE</a> | using React.js
        </p>
    </header>
    {children}
    <footer className={styles.footer}>Developed by M</footer>
    </>
  )
}

export default Layout