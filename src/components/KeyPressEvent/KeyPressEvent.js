import { useEffect } from 'react';
import { useParagraphStore } from '../../store/useParagraphStore';

export const KeyPressEvent = (callBack, callBack2, targetKey) => {
    const { startSpotWatch, setStartSpotWatch, activeElement } = useParagraphStore();

    useEffect(() => {
        const keyPressHandler = (e) => {
            if (activeElement === false && e.key === targetKey) {
                if (startSpotWatch === false) {
                    // Check if the active element is an input or textarea
                    const isInputActive = document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA';
                    
                    if (!isInputActive) {
                        callBack();
                        setStartSpotWatch(true);
                    }
                } else {
                    callBack2();
                    setStartSpotWatch(false);
                }
            }
        }

        if (activeElement === false) {
            window.addEventListener("keydown", keyPressHandler);
        }
        
        return () => {
            window.removeEventListener("keydown", keyPressHandler);
        }
    }, [callBack, callBack2, targetKey, startSpotWatch, setStartSpotWatch, activeElement]);
}


