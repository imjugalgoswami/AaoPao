import {useState,useEffect} from "react";
const useOnlineStatus = ()=>{

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        // console.log("useEffectCalled");

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });

    },[]);

    // console.log("onlineStatus returned");
    return onlineStatus;
}

export default useOnlineStatus;