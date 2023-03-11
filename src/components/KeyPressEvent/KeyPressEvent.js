import { useEffect, useState } from 'react';
import { useParagraphStore } from '../../store/useParagraphStore';

export const KeyPressEvent = (callBack, callBack2, targetKey) => {

    const { startSpotWatch, setStartSpotWatch, activeElement } = useParagraphStore();
    //const [isFocus, setIsFocus] = useState(false);
    //console.log(document.selection);
    

    useEffect(() => {
        //let text = document.getElementById("text");
        // text = document.activeElement;
        //text === document.activeElement ? setIsFocus(true) : setIsFocus(false);

        //console.log(isFocus);,
        //console.log(activeElement);

        const keyPressHandler = (e) => {
            
            if((activeElement === false) && (e.key === targetKey)){
                if((startSpotWatch === false)){
                    callBack();
                    setStartSpotWatch(true);
                }else{
                    callBack2();
                    setStartSpotWatch(false);
                }
                    
            }
            
        }
        if(activeElement === false){
            window.addEventListener("keydown", keyPressHandler);
        }
        return () => {
            window.removeEventListener("keydown", keyPressHandler);
        }
    }, [callBack, callBack2, targetKey, startSpotWatch, setStartSpotWatch, activeElement]);

}

