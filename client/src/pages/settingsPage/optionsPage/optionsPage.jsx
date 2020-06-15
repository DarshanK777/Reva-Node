import React, {useState, Fragment} from 'react'
import './optionsPage.scss'

const OptionsPage = ({handler})=>{

    const optionList = ['Edit Profile', 'Change Password']
    const [active, setActive] = useState(0)
    
    const handleOnClick = (index) =>{
        setActive(index)
        handler(index)
    }

    return(

        <div className="options-container">
            {
                    optionList.map((option, index)=>(
                        <div className={active === index ? "option active" : "option" }  key={index} onClick={() => handleOnClick(index)}>
                            {
                                active === index ?
                                <Fragment>
                                    <div className="option-active-left"></div> 
                                    <div className="option-active-right"></div>
                                </Fragment>
                                : <div></div>
                            }
                            {option}
                        </div>
                    ))
                }
        </div>
    )
}

export default OptionsPage