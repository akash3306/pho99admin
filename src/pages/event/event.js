import './event.css';
import Button from './../../components/button/button';
import Eventform from '../../components/eventform/eventform';

import e1 from './../../img/e1.jpg';
import e2 from './../../img/e2.jpg';
import e3 from './../../img/e3.jpg';
import { useRef,useState,useEffect } from 'react';

export default function Event({data}){

    const eventsdata = [
        {
          img: e1,
          from:"29 Dec, 2023",
          to:"2 Jan, 2023",
          title:"Lunar New Year Celebration",
          content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
        },
        {
          img: e2,
          from:"29 Dec, 2023",
          to:"2 Jan, 2023",
          title:"Lunar New Year Celebration",
          content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
        },
        {
          img: e3,
          from:"29 Dec, 2023",
          to:"2 Jan, 2023",
          title:"Lunar New Year Celebration",
          content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
        },
        {
          img: e1,
          from:"29 Dec, 2023",
          to:"2 Jan, 2023",
          title:"Lunar New Year Celebration",
          content:"Join us for ourlsdfkjjsf dlfkjsdlfjs fsjkfsdjf  s sdjfhsdfklshf upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prospejsdlfjs fsjkfsdjf  s sdjfhsdfklshf upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
        },
        {
          img: e2,
          from:"29 Dec, 2023",
          to:"2 Jan, 2023",
          title:"Lunar New Year Celebration",
          content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
        },
        {
          img: e3,
          from:"29 Dec, 2023",
          to:"2 Jan, 2023",
          title:"Lunar New Year Celebration",
          content:"Join us for our upcoming Lunar New Year celebration, where we will be featuring traditional Vietnamese dishes, festive decorations, and cultural performances to ring in the Year of the Tiger with joy and prosperity.",
        },
    ];

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

    const editeventpagebox = useRef();
    const blur = useRef();
  
    const editeventpageboxactive = () => {
        editeventpagebox.current.classList.toggle('active');
        blur.current.classList.toggle('active');
    };

    const addeventbox = useRef();

    const addeventboxactive = () => {
      addeventbox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    const editeventbox = useRef();

    const editeventboxactive = () => {
      editeventbox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    const deleteeventbox = useRef();

    const deleteeventboxactive = () => {
      deleteeventbox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    return(
        <div className='eventlist'>

          <div ref={editeventpagebox} className='editpagebox' style={{top : (mousePos.y+3)+'px',left:(mousePos.x+3)+'px'}}>
              <div className='editpageboxclose' onClick={editeventpageboxactive}><ion-icon name="close-outline"></ion-icon></div>
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

          <div className='addmenu'>
            <Button btntext="Add Event" btnfnc={addeventboxactive} />
          </div>
          <div className='editmenupagebtn'>
            <Button btntext="Edit Page Content" btnfnc={editeventpageboxactive} />
          </div>

          <div ref={addeventbox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={addeventboxactive}></ion-icon></div>
              <Eventform btntext="ADD EVENT" />
          </div>

          <div ref={editeventbox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={editeventboxactive}></ion-icon></div>
              <Eventform btntext="EDIT EVENT" />
          </div>

          <div ref={deleteeventbox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={deleteeventboxactive}></ion-icon></div>
              <Eventform btntext="DELETE EVENT" />
          </div>
          
          <div ref={blur} className='blur'></div>

          <div className="eventboxs">
            <table>
              <thead>
                <tr style={{border:"1px solid var(--gray-color)"}}>
                  <th>Title</th>
                  <th>Image</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {eventsdata.map((item,i) => (
                <>
                  <tr>
                    <td style={{background:"none",border:"none",height:"0px",padding:"4px"}}></td>
                  </tr>
                  <tr style={{border:"1px solid var(--gray-color)"}}>
                    <td style={{width:"13%"}}>{item.title}</td>
                    <td style={{width:"13%"}}><img src={item.img} alt='' /></td>
                    <td style={{width:"13%"}}>{item.from}</td>
                    <td style={{width:"13%"}}>{item.to}</td>
                    <td style={{width:"40%"}}>{item.content.slice(0,120)}...</td>
                    <td style={{width:"8%"}}><ion-icon name="trash-outline" onClick={deleteeventboxactive}></ion-icon><ion-icon name="create-outline" onClick={editeventboxactive}></ion-icon></td>
                  </tr>
                </>
                ))}
              </tbody>
            </table>
          </div>        
        </div>
    );
}