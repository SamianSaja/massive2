import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor(props) {
  return (
    <div className="App">
        <CKEditor
            editor={ ClassicEditor }
            data={props.fillContent}
            
            onChange={ ( event, editor) => {
                const data = editor.getData();
                props.setFill = setFillContent(data);
                console.log( { event, editor, data } );
            } }

        />
    </div>
  )
}

export default Editor
