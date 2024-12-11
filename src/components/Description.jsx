import styles from './Description.module.css'

function Description(data) {
    return (
        <div className={styles.description}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default Description