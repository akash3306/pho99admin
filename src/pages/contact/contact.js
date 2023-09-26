import './contact.css';
import Button from '../../components/button/button';

import { useRef,useState,useEffect } from 'react';

export default function Contact({data}){

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

    const editmenupagebox = useRef();
    const blur = useRef();
  
    const editmenupageboxactive = () => {
        editmenupagebox.current.classList.toggle('active');
        blur.current.classList.toggle('active');
    };

    return(
        <div className='dashboard'>

            <div ref={editmenupagebox} className='editpagebox' style={{top : (mousePos.y+3)+'px',left:(mousePos.x+3)+'px'}}>
                <div className='editpageboxclose' onClick={editmenupageboxactive}><ion-icon name="close-outline"></ion-icon></div>
                <form className='menuform'>
                    <div className='menuformbox'>
                        <label>Title</label>
                        <input type='text' />
                    </div>
                    <div className='menuformbox'>
                        <label>Content</label>
                        <textarea></textarea>
                    </div>
                    <div className='menuformbutton'>
                        <Button btntext="Update" />
                    </div>
                </form>
            </div>

            <div className='title'>{data.title}</div>

            <div className='editmenupagebtn'>
              <Button btntext="Edit Page Content" btnfnc={editmenupageboxactive} />
            </div>
            
            <div ref={blur} className='blur'></div>

        </div>
    );
}