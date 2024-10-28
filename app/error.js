"use client"
const Error = ({ error, reset }) => {
    return (
        <div>
            <h1>{error.message}</h1>
            <button onClick={() => reset()}>再試行する</button>
        </div>
    )
}

export default Error