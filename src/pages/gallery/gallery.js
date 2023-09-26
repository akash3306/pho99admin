import './gallery.css';
import Button from '../../components/button/button';

import { useRef,useState,useEffect } from 'react';

import img1 from './../../img/e1.jpg';
import img2 from './../../img/e2.jpg';
import img3 from './../../img/e3.jpg';

export default function Gallery({data}){

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
            <div className='head'>{data.content.slice(0,110)}...</div>

            <div className='editmenupagebtn'>
              <Button btntext="Edit Page Content" btnfnc={editmenupageboxactive} />
            </div>

            <div className='galleryboxs'>
              <div className='gallerybox'>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img1} /></div>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img2} /></div>
              </div>
              <div className='gallerybox'>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img1} /></div>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img2} /></div>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img1} /></div>
              </div>
              <div className='gallerybox'>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img1} /></div>
                <div className='gbbox'><div className='gbedit'><ion-icon name='create-outline'></ion-icon></div><div className='gbdelete'><ion-icon name='trash-outline'></ion-icon></div><img src={img2} /></div>
              </div>
            </div>
            
            <div ref={blur} className='blur'></div>

        </div>
    );
}