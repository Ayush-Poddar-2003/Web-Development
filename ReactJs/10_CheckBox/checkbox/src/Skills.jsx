import { useState } from "react";

function Skills()
{
    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }
        else{
            setSkills([skills.filter((item)=>item!=event.target.value)])
        }
    }

    return(
        <div>
            <h3>Learning CheckBoxes</h3>

            <input type="checkbox" id="php" value="php" onChange={handleSkills}/>
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" id="js" value="js" onChange={handleSkills}/>
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" id="node" value="node" onChange={handleSkills}/>
            <label htmlFor="node">NODE</label>
            <br />
            <br />
            <input type="checkbox" id="java" value="java" onChange={handleSkills}/>
            <label htmlFor="java">JAVA</label>

        </div>
    )
}

export default Skills; 