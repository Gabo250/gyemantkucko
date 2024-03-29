import { useState, useEffect, useRef } from "react";

/**
* Listening the current scroll position.
*
* @returns scrollY 
* @returns prevScrollY
*/
function useScroll() {
    const [scrollY, setScrollY] = useState(() => { return window.scrollY });
    const [prevScrollY, setPrevScrollY] = useState(() => { return scrollY });

    const timeOutID = useRef();

    useEffect(() => {
        const handleScroll = () => {
            timeOutID.current = setTimeout(() => {
                setPrevScrollY(scrollY);
                setScrollY(window.scrollY);
            }, 200)            
        }
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {            
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeOutID.current);
        }
    }, [scrollY, prevScrollY]);

    return [scrollY, prevScrollY];
}

export default useScroll;