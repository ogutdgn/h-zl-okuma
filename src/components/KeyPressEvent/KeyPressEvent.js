import { useEffect } from 'react';

export const KeyPressEvent = (callBack, targetKey) => {

    useEffect(() => {
        const keyPressHandler = (e) => {
            if(e.key === targetKey){
                callBack();
            } 
        }
        window.addEventListener("keydown", keyPressHandler);
        return () => {
            window.removeEventListener("keydown", keyPressHandler);
        }
    }, [callBack, targetKey]);

}

