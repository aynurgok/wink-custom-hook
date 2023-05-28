import { useState, useEffect } from "react";

function useWinkCounter() {
    const [count, setCount] = useState(0);
    const [isWinking, setIsWinking] = useState(false);
  
    useEffect(() => {
      const winkTimeout = setTimeout(() => {
        wink();
      }, 1000);
  
      return () => {
        clearTimeout(winkTimeout);
      };
    }, [count]);
  
    const incrementCount = () => {
      setCount(count => count + 1);
      
    };
  
    const wink = () => {
      setIsWinking(true);
  
      setTimeout(() => {
        setIsWinking(false);
      }, 500);
    };
  
    return { count, incrementCount, isWinking };

}

export default useWinkCounter