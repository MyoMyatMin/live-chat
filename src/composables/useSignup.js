import { ref } from '@vue/reactivity'
import { auth } from '../firebase/config'

let error = ref("");
     let createAcount = async(email,password,displayName) => {
        try{
            let res = await auth.createUserWithEmailAndPassword(email,password)
            if(!res){
                throw new Error("Could not create new user!!!")
            }
            res.user.updateProfile({displayName})
            return res;
       }catch(err){
           error.value = err.message
       }
       
     }
     let useSignup = () => {
    return { error, createAcount}
}
export default useSignup;