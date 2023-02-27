import src/style/Button.css

function Button({ content }) {
    return (
    <div className="Button disabled">
        Carica Joke: { content }
    </div>
    )
}

export default Button
