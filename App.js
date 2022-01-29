//type one is just startup learn
import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={() => setIsGoingOut(prevState => prevState===true?"yes":'no')} className="state--value">
                <h1>{isGoingOut}</h1>
            </div>
        </div>
    )
}
//type two is just simple learn but good
import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut?"Yesss":"noo"}</h1>
            </div>
        </div>
    )
}
//type three is just awesome learn good for reactjs concept
import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}


