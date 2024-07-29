import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase-config"; 

const db = getFirestore(app);

const getAllUser = async(): Promise<any[]> =>{
    try{
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return users; 
    }catch(error){
        console.log(error);
        throw new Error(`some error in fetching users ${error}`);
    }
}

export default getAllUser;