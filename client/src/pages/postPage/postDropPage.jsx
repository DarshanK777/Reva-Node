import React from 'react'
import './postDropPage.scss'
import {DropZone} from './components/components'
import Cropper from 'react-easy-crop'
import ButtonElement from '../../components/btnComponent/btnComponent'
import {extractImageFileExtensionFromBase64} from '../../utils/functions/imageUtils'
import EditPostPage from './editPost/editPostPage'


const imageMaxSize = 1000000000 // bytes
const acceptedFileTypesArray = ['image/x-png', 'image/png', 'image/jpg', 'image/jpeg']
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'


class PostDropPage extends React.Component{

    state={
        imgSrc : null,
        crop: { x: 0, y: 0 },
        aspect: 4 / 4,
        croppedAreaPixels: null,
        croppedImage: null,
        isCropping: false,
        finalCrop: false,
        open: false
    }

    verifyFile = (files) => {
        if (files && files.length > 0){
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if(currentFileSize > imageMaxSize) {
                alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                return false
            }
            if (!acceptedFileTypesArray.includes(currentFileType)){
                alert("This file is not allowed. Only images are allowed.")
                return false
            }
            return true
        }
    }

    handleOnDrop = (files) => {
        console.log('this')
        if (files && files.length > 0){
             const isVerified = this.verifyFile(files)
             if (isVerified){
                 // imageBase64Data 
                 const currentFile = files[0]
                 const myFileItemReader = new FileReader()
                 myFileItemReader.addEventListener("load", ()=>{
                     const myResult = myFileItemReader.result
                     this.setState({
                         imgSrc: myResult,
                         extension: extractImageFileExtensionFromBase64(myResult)
                     })
                 }, false)
                 myFileItemReader.readAsDataURL(currentFile)
             }
        }
    }
    
    onCropChange = crop => {
        this.setState({ crop })
    }
    
    onCropComplete = (croppedArea, croppedAreaPixels) => {
        this.setState({
            croppedAreaPixels,
        })
    }

    handlePostOnClick = () =>{
        this.setState({
            finalCrop: true
        })
    }

    render(){
        const {imgSrc, extension, croppedAreaPixels} = this.state
        return(
            <main id="dropZone">
                {
                    this.state.imgSrc !== null ?
                        this.state.finalCrop === true ?
                            <EditPostPage history={this.props.history} imgSrc={imgSrc} extension={extension} croppedAreaPixels={croppedAreaPixels}  />: 
                            <div className="crop-container">
                                <Cropper
                                    image={this.state.imgSrc}
                                    crop={this.state.crop}
                                    zoom={this.state.zoom}
                                    aspect={this.state.aspect}
                                    onCropChange={this.onCropChange}
                                    onCropComplete={this.onCropComplete}
                                    onZoomChange={this.onZoomChange}
                                />
                                {/* <button className="crop-btn" onClick={this.handlePostOnClick}>Post</button> */}
                                <ButtonElement className="crop-btn" onClick={this.handlePostOnClick} >Post</ButtonElement>
                            </div>
                        :
                        <DropZone onDrop={this.handleOnDrop} accept={acceptedFileTypes} />
                }
            </main>
        )
    }
}

export default PostDropPage