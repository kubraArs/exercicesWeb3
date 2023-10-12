import Statis from "./Statis"
import React from "react"
const Stat = ({good, neutral, bad}) => {
    const all = good+ neutral + bad
    const average = all !=0 ? (good-bad)/all : 0
    const positive = all !=0 ? (good/all)*100 : 0
    if (all == 0){
        return("no value");
    }
    return(
        <table>
            <tbody>
        <Statis text="good" value={good}></Statis>
        <Statis text="neutral" value={neutral}></Statis>
        <Statis text="bad" value={bad}></Statis>
        <Statis text="average" value={average}></Statis>
        <Statis text="positive" value={positive}></Statis>

        </tbody>

        </table>
    )

}
export default Stat