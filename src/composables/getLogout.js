 import { auth } from "../firebase/config";
 import { ref } from "vue"
 let error = ref("");
 let uselogout=async()=>{
           try{
             await auth.signOut();   
             
           }catch(err){
              error.value=err.value;
           }
}
let getLogout=()=>{
    return {uselogout,error}
}

export default getLogout;