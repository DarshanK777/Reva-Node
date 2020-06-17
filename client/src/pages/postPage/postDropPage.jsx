import React from 'react'
import './postDropPage.scss'
import Dropzone from 'react-dropzone'
import {extractImageFileExtensionFromBase64} from '../../utils/functions/imageUtils'


const imageMaxSize = 1000000000 // bytes
const acceptedFileTypesArray = ['image/x-png', 'image/png', 'image/jpg', 'image/jpeg']
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'


class PostDropPage extends React.Component{

    handleOnDrop = (files) => {

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
    render(){
        return(
            <main id="dropZone">
                <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes} multiple={false}>
                    {({getRootProps, getInputProps}) => (
                        <section className="dropzone-container">
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                <span id="a">Drop Image</span>
                                <span id="b">To</span>
                                <span id="c">Upload</span>


                            </div>
                        </section>
                        )}
                </Dropzone>
            </main>
        )
    }
}

export default PostDropPage