import styles from "./User.module.css";

const numbers = [
    {
    id: 1,
    name: "Anna",
    age: "22"
    },
    {
    id: 2,
    name: "Ainazik",
    age: 19
    },{
    id: 3,
        name: "Artur",
        age: 28
    }
];

function User() {
    return (
        <>
            <h2 className={styles.title}>MainPage</h2>
            {
                numbers.map((el, index) =>
                <div key={el.id}>age: {el.age}, name: {el.name}</div>)
            }
         </>
    )
}

export default User