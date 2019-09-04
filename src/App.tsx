import React, { useEffect } from "react"
import useCountDown from "common/useCountDown"

function App () {
    var helloText: Haha = "Hello Richole"
    const {
        count, isEnd
    } = useCountDown(10)
    return (
        <div className="App">
            {helloText}
            <div>
                {isEnd ? "-" : count}
            </div>
        </div>
    )
}

export default App
