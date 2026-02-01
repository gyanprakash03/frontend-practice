import { useState, useEffect } from "react"

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleResize() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [])
    
    
  return width;
}

export default useWindowWidth