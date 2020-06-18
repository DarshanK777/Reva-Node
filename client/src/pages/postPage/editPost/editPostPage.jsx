import React,{useRef, useEffect} from 'react'
import './editPost.scss'
import { image64toCanvasRef, base64StringtoFile } from '../../../utils/functions/imageUtils'
import ButtonElement from '../../../components/btnComponent/btnComponent'

const EditPostPage = (props) =>{
    
    const refCanvas = useRef(null)
    const refCaption = useRef(null)
    
    useEffect(()=>{
        const canvasRef = refCanvas.current
        const {imgSrc, croppedAreaPixels}  = props
        image64toCanvasRef(canvasRef, imgSrc, croppedAreaPixels)
    })
    
    return(
        <main id="editPost-container">
            <div className="canvas">
                    <canvas className="filter-mayfair" ref={refCanvas}> </ canvas>
            </div>
            <section id="data">
                <h1>
                    Caption
                </h1>
                <textarea ref={refCaption} maxLength="150" row="2" placeholder="Caption here"/>
                <ButtonElement >Post</ButtonElement>
            </section>
        </main>
    )
}

export default EditPostPage