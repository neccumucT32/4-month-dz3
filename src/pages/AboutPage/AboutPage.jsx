import Description from "../../components/Description";
import styles from "./AboutPage.module.css";

function AboutPage () {
    return (
        <div className = {styles.aboutPage}>
            <h1>About Page</h1>
            <Description/>
        </div>
    )
}


export default AboutPage