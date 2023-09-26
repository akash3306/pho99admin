import './news.css';
import { useRef,useState,useEffect } from 'react';

import Button from '../../components/button/button';
import Newsform from '../../components/newsform/newsform';

import e1 from './../../img/e1.jpg';
import e2 from './../../img/e2.jpg';
import e3 from './../../img/e3.jpg';

export default function News({data}){

    const newsdata = [
      {
        img: e1,
        title:"Kathmandu's Top 10",
        content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
      },
      {
        img: e2,
        title:"Kathmandu's Top 10",
        content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
      },
      {
        img: e3,
        title:"Kathmandu's Top 10",
        content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
      },
      {
        img: e1,
        title:"Kathmandu's Top 10",
        content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
      },
      {
        img: e2,
        title:"Kathmandu's Top 10",
        content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
      },
      {
        img: e3,
        title:"Kathmandu's Top 10",
        content:"We are proud to announce that our Vietnamese restaurant has been recognized as one of the top 10 restaurants in Kathmandu by a leading food publication, highlighting our commitment to authentic flavors and exceptional dining experiences.",
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

    const editnewspagebox = useRef();
    const blur = useRef();
  
    const editnewspageboxactive = () => {
        editnewspagebox.current.classList.toggle('active');
        blur.current.classList.toggle('active');
    };

    const addnewsbox = useRef();

    const addnewsboxactive = () => {
      addnewsbox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    const editnewsbox = useRef();

    const editnewsboxactive = () => {
      editnewsbox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    const deletenewsbox = useRef();

    const deletenewsboxactive = () => {
      deletenewsbox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    return(
        <div className='newslist'>
          
          <div ref={editnewspagebox} className='editpagebox' style={{top : (mousePos.y+3)+'px',left:(mousePos.x+3)+'px'}}>
              <div className='editpageboxclose' onClick={editnewspageboxactive}><ion-icon name="close-outline"></ion-icon></div>
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
            <Button btntext="Add News" btnfnc={addnewsboxactive} />
          </div>
          <div className='editmenupagebtn'>
            <Button btntext="Edit Page Content" btnfnc={editnewspageboxactive} />
          </div>

          <div ref={addnewsbox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={addnewsboxactive}></ion-icon></div>
              <Newsform btntext="ADD NEWS" />
          </div>

          <div ref={editnewsbox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={editnewsboxactive}></ion-icon></div>
              <Newsform btntext="EDIT NEWS" />
          </div>

          <div ref={deletenewsbox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={deletenewsboxactive}></ion-icon></div>
              <Newsform btntext="DELETE NEWS" />
          </div>
          
          <div ref={blur} className='blur'></div>

          <div className="newsboxs">
            <table>
              <thead>
                <tr style={{border:"1px solid var(--gray-color)"}}>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Content</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {newsdata.map((item,i) => (
                <>
                  <tr>
                    <td style={{background:"none",border:"none",height:"0px",padding:"4px"}}></td>
                  </tr>
                  <tr style={{border:"1px solid var(--gray-color)"}}>
                    <td style={{width:"25%"}}>{item.title}</td>
                    <td style={{width:"15%"}}><img src={item.img} alt='' /></td>
                    <td style={{width:"50%"}}>{item.content.slice(0,150)}...</td>
                    <td style={{width:"10%"}}><ion-icon name="trash-outline" onClick={deletenewsboxactive}></ion-icon><ion-icon name="create-outline" onClick={editnewsboxactive}></ion-icon></td>
                  </tr>
                </>
                ))}
              </tbody>
            </table>
          </div>        
        </div>
    );
}