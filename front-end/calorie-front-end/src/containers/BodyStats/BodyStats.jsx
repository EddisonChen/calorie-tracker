import './BodyStats.scss'
import { useState, useEffect } from 'react'

const BodyStats = (props) => {
    const [sex, setSex] = useState()
    const [age, setAge] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [activity, setActivity] = useState()
    const [bf, setBf] = useState()

    const bodyStats = {
        "sex": null,
        "age": null,
        "weight": null,
        "height": null,
        "activityLevel": null,
        "bodyFatPercentage": null
    }

    const setBodyStats = (event) => {
        bodyStats[event.target.name] = event.target.value
        console.log(bodyStats)
    }

    const determineSex = (event) => {
        bodyStats[event.target.name] = event.target.value
        console.log(bodyStats)
    }

    // const selectSex = () => {
    //     if (bodyStats[sex] =
    // }

    const calculateCalories = () => {

    }


    

    return (
        <div>
            <h2>Please input your stats</h2>
            <div>
                <input onClick={setBodyStats} type="radio" name="sex" value="male"></input>Male
                <input onClick={setBodyStats} type="radio" name="sex" value="female"></input>Female
                <input onChange={setBodyStats} type="textbox" name="age" pattern="[[0-9]|[1-9][0-9]|[1-9][0-9][0-9]]"></input>
                <input onChange={setBodyStats} type="textbox" name="weight"></input>
                <input onChange={setBodyStats} type="textbox" name="height"></input>
                <input onChange={setBodyStats} type="textbox" name="Body Fat Percentage"></input>
                <button>Submit</button>
            </div>

        </div>
    )
}

export default BodyStats
