import Description from "../../components/Description";
import styles from './MainPage.module.css';

function MainPage () {
    return (
        <div className={styles.mainPage}>
            <h1>Main Page</h1>
            <Description/>
        </div>
    )
}


export default MainPage