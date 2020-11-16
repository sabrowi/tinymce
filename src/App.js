import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './App.css'

function App() {
  return (
    <div className="App">
       <Editor
         initialValue=""
         apiKey='w0wselq9wnb0snnpcw34hkhxvs8dg13nwsl3d7639t911cfd'
         init={{
           height: 500,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
         }}
       />
    </div>
  );
}

export default App;
