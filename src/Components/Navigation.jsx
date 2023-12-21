import {useEffect} from "react";
const Navigation = () => {

    useEffect(() => {
        const handleScroll = () => {
          const { hash } = window.location;
          if (hash !== '') {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
    
        window.addEventListener('hashchange', handleScroll);
    
        handleScroll();
    
        return () => {
          window.removeEventListener('hashchange', handleScroll);
        };
      }, []);
    
      return null;
}

export default Navigation