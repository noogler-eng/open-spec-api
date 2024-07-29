import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { app } from "./firebase-config";
const db = getFirestore(app);

const addUser = async(username: string, email: string): Promise<string> =>{
        try{
            const docRef = await addDoc(collection(db, "users"), {
                username: username,
                email: email,
                points: 0
            });

            return docRef.id;
        }catch(error){
            throw new Error(`Failed to add user: ${error}`);
        }
}

export default addUser;