import DateApp from "./DateApp"

const AnotherApp = () => {
    console.log("Hello from component!")
    return (
        <div>
            <p>Learning to build React components</p>
            <App />
            <DateApp />
        </div>
    )
} 

const Hello = () => (
    <div>
        <p>Hello world</p>
    </div>
)

const App = () => (
    <div>
        <h1>Greetings</h1>
        <Hello/>
    </div>
)

export default AnotherApp
