import React from 'react'
import './radioBtnComponent.scss'

// handler = the hanfler function in the parent element in which the values has to be passed
// elementList = the element names 
// checked = current selected radio button

const RadioElement = ({handler, elementList, checked}) =>{
    if(elementList.length > 3){
        throw new Error('max 3 element in radio or use dropdown')
        // ui/ux guidelines
    }

    // passing the selected option back to parent
    const handleChange = (event) =>{
        gender(event.target.value)
    }

    return(
        <ul className="radio-elem">
            {
                elementList.map(elem =>(
                    <li>
                        <label id="label">
                        <input
                        type="radio"
                        value={elem.toLowerCase()}
                        checked={checked === elem.toLowerCase()}
                        onChange={handleChange}
                        />
                        {elem}
                        </label>
                    </li>
                ))
            }

        </ul>
    )
}

export default RadioElement