import './BodyStats.scss'
import { useState, useEffect } from 'react'

const BodyStats = (props) => {

    const [bf, setBf] = useState()
    const [calculatedCalories, setCalculatedCalories] = useState()

    const bodyStats = {
        "unitType" : null,
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

    const calculateCalories = () => {
        let sexValue = null;
        bodyStats["sex"] == "male" ? sexValue = 5 : sexValue = -151;
        if (bodyStats["bodyFatPercentage"] !== null) {
            setCalculatedCalories()
        } else {
            setCalculatedCalories()
        }

    }


    return (
        <div>
            <h2>Please input your stats</h2>
                <div>
                    <input onClick={setBodyStats} type="radio" name="unitType" value="imperial"></input>Imperial
                    <input onClick={setBodyStats} type="radio" name="unitType" value="metric"></input>Metric
                </div>
            <div>
                <input onClick={setBodyStats} type="radio" name="sex" value="male"></input>Male
                <input onClick={setBodyStats} type="radio" name="sex" value="female"></input>Female
                <input onChange={setBodyStats} type="number" name="age" placeholder="Age"></input>
                <input onChange={setBodyStats} type="number" name="weight" placeholder="Weight"></input>
                <input onChange={setBodyStats} type="number" name="height" placeholder="Height"></input>
                <input onChange={setBodyStats} type="number" name="Body Fat Percentage" placeholder="Body Fat Percentage (Optional)"></input>
                <ul>Activity Level</ul>
                    <li>Sedentary</li>
                    <li>Lightly Active</li>
                    <li>Moderately Active</li>
                    <li>Active</li>
                    <li>Highly Active</li>

                <button>Submit</button>
            </div>

        </div>
    )
}

export default BodyStats
