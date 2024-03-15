import { BsFillSearchHeartFill } from "react-icons/bs";

import styles from "./SearchBox.module.css"


function SearchBox({searched , setSearched , searchedHandler}) {
  return (
    <div className={styles.search}>
        <input type="text" placeholder="Search Title ..." value={searched} onChange={(e) => setSearched(e.target.value.toLowerCase())} />
        <button onClick={searchedHandler}>
        <BsFillSearchHeartFill fontSize="1.2rem"/>
        </button>
    </div>
  )
}

export default SearchBox