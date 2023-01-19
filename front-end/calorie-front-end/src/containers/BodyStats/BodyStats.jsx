import './BodyStats.scss'
import { useState, useEffect } from 'react'

const BodyStats = (props) => {

    const [calculatedCalories, setCalculatedCalories] = useState()
    const [output, setOutput] = useState('')

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
        if (event.target.name == "unitType" || event.target.name == "sex" || event.target.name == "activityLevel") {
            bodyStats[event.target.name] = event.target.value
        } else {
            bodyStats[event.target.name] = Number(event.target.value)
        }
        console.log(bodyStats)
    }

    const convertUnits = () => {
        if (bodyStats["unitType"] == "imperial") {
            bodyStats["weight"] = bodyStats["weight"]/2.205
            bodyStats["height"] = bodyStats["height"] * 2.54
        }
    }
    
    const numerifyActivityLevel = () => {
        switch(bodyStats["activityLevel"]) {
            case "sedentary":
                bodyStats["activityLevel"] = 1.2;
                break;
            case "lightly active":
                bodyStats["activityLevel"] = 1.375;
                break;
            case "moderately active":
                bodyStats["activityLevel"] = 1.55;
                break;
            case "active":
                bodyStats["activityLevel"] = 1.725;
                break;
            case "highly active":
                bodyStats["activityLevel"] = 1.9;
                break;
            default:
        }
    }

    const calculateCalories = () => {
        convertUnits()
        if (bodyStats["unitType"] !== null || bodyStats["sex"] !== null || bodyStats["age"] !== null || bodyStats["weight"] !== null || bodyStats["height"] !== null || bodyStats["activityLevel"] !== null) {
            if (bodyStats["bodyFatPercentage"] == null) {
                numerifyActivityLevel()
                let sexValue = null;
                bodyStats["sex"] == "male" ? sexValue = 5 : sexValue = -151;
                setCalculatedCalories(Math.round(bodyStats["activityLevel"] * ((10*bodyStats["weight"]) + (6.25*bodyStats["height"]) - 5*bodyStats["age"] - sexValue)))
            } else {
                const leanBodyMass = (1 - bodyStats["bodyFatPercentage"]/10) * bodyStats["weight"]
                setCalculatedCalories(Math.round(370 + (21.6 * leanBodyMass)))
            }
        
        } else {
            setOutput("Hey, fill out all the forms")
        }
    }

    const determineDisplayedMessage = () => {
        setOutput(calculatedCalories)
    }

    useEffect(determineDisplayedMessage, [calculatedCalories])


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
                <h3>Activity Level</h3>
                    <input onClick={setBodyStats} type="radio" name="activityLevel" value="sedentary"></input>Sedentary
                    <input onClick={setBodyStats} type="radio" name="activityLevel" value="lightly active"></input>Lightly Active
                    <input onClick={setBodyStats} type="radio" name="activityLevel" value="moderately active"></input>Moderately Active
                    <input onClick={setBodyStats} type="radio" name="activityLevel" value="active"></input>Active
                    <input onClick={setBodyStats} type="radio" name="activityLevel" value="highly active"></input>Highly Active
                <button onClick={calculateCalories}>Submit</button>
            </div>
            <div>
                {output ? output : ''}
            </div>

        </div>
    )
}

export default BodyStats
