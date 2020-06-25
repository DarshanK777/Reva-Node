import React,{useRef, useEffect} from 'react'
import './editPost.scss'
import { image64toCanvasRef, base64StringtoFile} from '../../../utils/functions/imageUtils'
import ButtonElement from '../../../components/btnComponent/btnComponent'
import {postImage} from '../../../utils/functions/postApiCalls'

const EditPostPage = (props) =>{
    
    const refCanvas = useRef(null)
    const refCaption = useRef(null)
    
    const handlePost = async (event) =>{
        event.preventDefault()
        const canvasRef = refCanvas.current
        const {extension} = props
        const filename = "previewFile." + extension
        const croppedImgSrc = canvasRef.toDataURL('image/' + filename)

        // cropped file
        const newCroppedFile = base64StringtoFile(croppedImgSrc, filename)
        const caption = refCaption.current.value

        // uploading the post
        const post = await postImage(newCroppedFile, caption)
        if(post==='success'){
            props.history.push('/feed')
        }
    }

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
                <ButtonElement onClick={handlePost}>Post</ButtonElement>
            </section>
        </main>
    )
}

export default EditPostPage 