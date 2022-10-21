import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


const resizer = (callBack:(value:boolean)=> void, setter:(value:number)=>void) =>{
    if (document?.body?.clientWidth < 801) {
        callBack(true);
        setter(document?.body?.clientWidth);
        return;
    }

    if (document?.body?.clientWidth > 800) {
        callBack(false);
        setter(document?.body?.clientWidth);
        return;
    }
}


export const isMobile = () =>{
    const router = useRouter();
    const [showMobileView, setShowMobileView] = useState<boolean>(false);
    const [isMobileView, setIsMobileview] = useState<boolean>(false);
    const [width, setWidth] = useState(0);


    useEffect(()=>{
        if(process.browser && window ){
            window.addEventListener("resize",()=>resizer(setIsMobileview,setWidth), false);

            setIsMobileview((document?.body?.clientWidth || 0) < 801 );
            setWidth(document?.body?.clientWidth);
        }
        return(()=>{
            if(process.browser && window){
                window.removeEventListener("resize",()=> resizer(setIsMobileview,setWidth), false);
            }
        })
    }, [process.browser])

    useEffect(() => {
        setShowMobileView(isMobileView);
      }, [isMobileView]);

      
    return{
        isMobileView
    }
}