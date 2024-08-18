import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Input, Button, Loading } from "../components/index";
import isUserLoggedIn, { editPost, uploadImage, uploadPost } from "../appwrite/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
export default function EditPost() {
  const [isEditorLoaded, setIsEditorLoaded] = useState(true);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [defaultContent, setDefaultContent] = useState("<b>welcome<b>")
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const selector = useSelector((state)=> state.auth)
// Gets data from the AuthSilce 
useEffect(() => {
    if (selector.edit) {
      setTitle(selector.title);
      setDefaultContent(selector.content);
    } else {
      alert("You are not authorised to Edit this post");
      navigate('/allpost');
    }
  }, [navigate, selector.edit, selector.title, selector.content]); // Add selector.title and selector.content
  




  useEffect(() => {
    async function checkLoggin(){
    let promise = await isUserLoggedIn();
    if (promise) {
      dispatch(login({userData: promise , status: true}))
      return null;
    } else {
      alert("Please Login");
      navigate("/");
    }}
    checkLoggin()
  }, []);
  const handleEditorInit = (editor) => {
    setIsEditorLoaded(false);
  };

  async function uploadImageFile(blobInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await uploadImage(blobInfo.filename(), blobInfo.blob());
        if (result) {
          const imageUrl = result;
          console.log(imageUrl);
          resolve(imageUrl); // Resolve with the image URL
        } else {
          reject({ message: "Invalid response from Appwrite" });
        }
      } catch (error) {
        reject({ message: error.message || "Image upload failed" });
      }
    });
  }

  const editorRef = useRef(null);




  async function upload() {
    if (editorRef.current) {
      // Retrieve content from the editor
      const content = editorRef.current.getContent();
      setContent(content); // Set content in state
      console.log("Editor content:", content); // Log the content for debugging
      try {
        // Upload the post
        const stringContent = String(content);
        let promise = await editPost(selector.$id , selector.userData.$id , title , content)
        console.log("Upload response:", promise);
        if (promise) navigate("/allpost");
      } catch (error) {
        console.error("Error uploading post:", error);
      }
    } else {
      console.warn("Editor reference is not available");
    }
  }




  return (
    <div className="w-3/4  m-auto pb-16">
      {isEditorLoaded && (
        <div>
          Loading Editor...
          <Loading loading={isEditorLoaded} />
        </div>
      )}
      <form action="">
        <Input
          label="Title"
          placeholder="Enter Title"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)} // Pass the handleChange function
        />

        <Button onClick={upload}>Submit</Button>
      </form>
      <Editor
        apiKey="nn8vkh80nyhjy5jazxy5wfic6l503c6cwvg4hmzik2muffh5"
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          image_proxy: false,
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          autosave_interval: "30s",
          autosave_retention: "2m",
          quickbars_insert_toolbar: "quickimage quicktable | hr",
          imagetools_toolbar:
            "rotateleft rotateright | flipv fliph | editimage imageoptions",
          save_enablewhendirty: true,
          save_onsavecallback: () => {
            console.log("Content saved!");
          },
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
          setup: (editor) => {
            editor.on("init", () => handleEditorInit(editor));
          },
          height: 1000, // Set the height of the editor
          width: "100%", // Set the width of the editor
          images_upload_handler: uploadImageFile,
        }}
        initialValue={defaultContent}     />
    </div>
  );
}
