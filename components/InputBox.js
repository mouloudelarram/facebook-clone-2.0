import Image from "next/image"
import { useSession } from "next-auth/client"
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage, app } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { ref, putString } from 'firebase/storage';
import firebase from "firebase";
function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const imageRef = useRef(null);
    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return ;
         db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          }).then(doc => {
              if (imageToPost) {
                  const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,'data_url')
                  removeImage();

                  uploadTask.on('state_change',null,error => console.log.error(error),() => {
                      //when the upload complete
                      storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                          db.collection('posts').doc(doc.id).set({
                              postImage: url
                          }, {merge: true})
                      })
                  })
              }
          })
        inputRef.current.value = "";
        //imageRef.current.value = "";
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }
    return (
        <div className=" bg-white p-2 rounded-2xl shadow-md text=gray-500 font-medium mt-6">
            <div className="p-5 flex space-x-4 items-center">
                <Image 
                    alt=""
                    className=" rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                    />
                    <form className=" flex flex-l formclass " >
                        <input 
                        className="formclass1 rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                        type="text"
                        ref={inputRef} 
                        placeholder={`What's in your mind, ${session.user.name} ?`}/>
                        <button hidden type="submit" onClick={sendPost}> Submit</button>
                    </form>
                    {imageToPost && (
                        <div onClick={removeImage} className=" flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                            <img className="h-10 object-contain"  src={imageToPost} alt="" />
                            <p className="cursor-pointer text-xs text-red-500 hover:text-green-500 text-center">Remove</p>
                        </div>
                    )}
            </div>
            <div className="flex justify-evenly p-3 border-t"> 
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base"> Live Video</p>
                </div>

                <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400"/>
                    <p className="text-xs sm:text-sm xl:text-base"> Photo/Video</p>
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-500"/>
                    <p className="text-xs sm:text-sm xl:text-base"> Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
/**<input 
                        className="formclass2 rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                        type="text"
                        ref={imageRef} 
                        placeholder={`img URL`}/> */