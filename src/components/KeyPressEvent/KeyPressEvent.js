import { useEffect } from 'react';
import { useParagraphStore } from '../../store/useParagraphStore';

export const KeyPressEvent = (callBack,callBack2, targetKey) => {

    const { startSpotWatch, setStartSpotWatch } = useParagraphStore();

    useEffect(() => {
        const keyPressHandler = (e) => {
            if(e.key === targetKey){
                if(startSpotWatch === false){
                    callBack();
                    setStartSpotWatch(true);
                }else{
                    callBack2();
                    setStartSpotWatch(false);
                }
                
            }
        }
        window.addEventListener("keydown", keyPressHandler);
        return () => {
            window.removeEventListener("keydown", keyPressHandler);
        }
    }, [callBack, callBack2, targetKey, startSpotWatch, setStartSpotWatch]);

}

