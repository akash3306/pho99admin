import './location.css';
import Button from '../../components/button/button';

import { useRef,useState,useEffect } from 'react';

import l1 from './../../img/jhamsikhel.jpg';
import l2 from './../../img/lazimpat.jpg';
import l3 from './../../img/boudha.jpg';

export default function Location({data}){

  const locationsdata = [
    {
      img: [l1],
      title:"Jhamshikhel",
      contact:"9803203119",
      content:"Satisfy your cravings with our guide to the best food and drink options in Boudha.",
    },
    {
      img: [l2],
      title:"Lazimpat",
      contact:"9803203119",
      content:"Satisfy your cravings with our guide to the best food and drink options in Jorpati.",
    },
    {
      img: [l3],
      title:"Boudha",
      contact:"9803203119",
      content:"Satisfy your cravings with our guide to the best food and drink options in Jhamsikhel.",
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

            <div className='locationboxs'>
              <table>
                <thead>
                  <tr style={{border:"1px solid var(--gray-color)"}}>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Content</th>
                    <th>Contact</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {locationsdata.map((item,i) => (
                  <>
                    <tr>
                      <td style={{background:"none",border:"none",height:"0px",padding:"4px"}}></td>
                    </tr>
                    <tr style={{border:"1px solid var(--gray-color)"}}>
                      <td style={{width:"15%"}}>{item.title}</td>
                      <td style={{width:"15%"}}><img src={item.img} alt='' /></td>
                      <td style={{width:"45%"}}>{item.content.slice(0,150)}...</td>
                      <td style={{width:"15%"}}>{item.contact}</td>
                      <td style={{width:"10%"}}><ion-icon name="trash-outline"></ion-icon><ion-icon name="create-outline"></ion-icon></td>
                    </tr>
                  </>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div ref={blur} className='blur'></div>

        </div>
    );
}