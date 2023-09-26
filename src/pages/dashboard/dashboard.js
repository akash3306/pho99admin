import './dashboard.css';

import { useEffect,useState } from 'react';

export default function Dashboard(){

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);



    return(
        <div className='dashboard'>
            <div className='title'>DASHBOARD</div>
            <div className='head'>Watch what's going on</div>     

            <div className='lowerdashboard'>

            </div>

        </div>
    );
}