// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBeUC-9bE8hhdqV9yL8tAUajfM6kgOB7m4",
  authDomain: "chat-application-1310e.firebaseapp.com",
  projectId: "chat-application-1310e",
  storageBucket: "chat-application-1310e.firebasestorage.app",
  messagingSenderId: "683131248387",
  appId: "1:683131248387:web:72baff78ae9e2aaf6c1336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db= getFirestore(app)

const signup = async(username,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await setDoc(doc(db,'users',user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:'',
            avatar:'',
            bio:'Hey,There i am using chat app',
            lastSeen:Date.now()
        })
        await setDoc(doc(db,'chats', user.uid),{
            chatData:[]
        })
    }
    catch(error){
        console.error(error)
        toast.error(error.code)
    }
}

export {signup}