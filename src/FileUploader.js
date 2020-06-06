import React from 'react';

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    readSingleFile = (e) => {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = (e) => {
            let contents = e.target.result;
            this.props.onLoadedLog(JSON.parse(contents));
        };
        reader.readAsText(file);
    }

    /* dropHandler = (e) => {
        e.preventDefault();
        console.log('File(s) dropped');
    }

    dragOverHandler = (e) => {
        console.log('File(s) in drop zone'); 
      
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
    } */
    
    render() {
        return (
            /*<div class='fileButtonContainer' onDrop={(e) => this.dropHandler(e)} onDrag={(e) => this.dragOverHandler(e)}>*/
            <div className='fileButtonContainer'> 
                <input type='file' id='hiddenUpload' className='categoryButton' onChange={this.readSingleFile} />
                <a onClick={() => document.getElementById('hiddenUpload').click()} id='upload' className='categoryButton'>upload</a>
            </div>
        );
    }
}

export default FileUploader;