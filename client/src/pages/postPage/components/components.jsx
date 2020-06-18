import React from 'react'
import Dropzone from 'react-dropzone'


export const DropZone = ({onDrop, accept}) =>{
    return(
        <Dropzone onDrop={onDrop} accept={accept} multiple={false}>
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
    )
}

