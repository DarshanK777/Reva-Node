import React from 'react'
import './detailsPage.scss'
import {InputElement} from '../../components/inputComponent/inputComponent'


const DetailsPage = () => {

    const elements = [
        1,1,1,,11,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    return(
        <main id="details-container">
          <section id="detail-content">
            <img src="./images/01.jpg" alt=""/>
                <section id="details-content">
                    <span id="details">
                        <img src="/images/01.jpg" alt=""/>
                        <h1>
                            k.darshan
                        </h1>
                    </span>
                    <span id="actions">
                        
                    </span>
                </section>
            <div className="comment-box">
               
               <div>
               {
                    elements.map(()=>{
                        return(
                            <span id="comments">
                                <h6>username : </h6>
                                commentsasdasdasdasd
                            </span>
                        )
                    })
                }
               </div>

                <span id="comment-input"> 
                    <InputElement type="text"/>
                    <button>
                        ent
                    </button>
                </span>
            </div>
            </section>

        </main>
    )
}

export default DetailsPage