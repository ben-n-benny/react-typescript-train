interface User {
    name: string;
}

export const User = (props: User) => {
    return (
    <div>
        <h1>Person: {props.name}</h1>
        <p>name: Vite</p>
        <p>age: 1</p>
        <p>isMarried: false</p>
    </div>
    )
}