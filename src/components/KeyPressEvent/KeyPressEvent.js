import { useEffect, useState } from 'react';

export const KeyPressEvent = (callBack,callBack2, targetKey) => {

    const [callBackStatus, setCallBackStatus] = useState(false);

    useEffect(() => {
        const keyPressHandler = (e) => {
            if(e.key === targetKey){
                if(callBackStatus === false){
                    callBack();
                    setCallBackStatus(true);
                }else{
                    callBack2();
                    setCallBackStatus(false);
                }
                
            }
        }
        window.addEventListener("keydown", keyPressHandler);
        return () => {
            window.removeEventListener("keydown", keyPressHandler);
        }
    }, [callBack, callBack2, targetKey, callBackStatus]);

}

