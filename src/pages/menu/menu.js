import './menu.css';
import { useRef, useState, useEffect } from 'react';

import Addmenuform from '../../components/menuform/menuform';
import Editmenuform from '../../components/menuform/editmenuform';
import Deletemenuform from '../../components/menuform/deletemenuform';
import Button from '../../components/button/button';

function Menu({data}){

    const moremenudata = [
        {
          name: "Goi Cuon Ga/Heo",
          price: "360",
          content: "(Chicken/Pork summer rolls)",
        },
        {
          name: "Goi Cuon Tep",
          price: "380",
          content: "(Shrimp summer rolls)",
        },
        {
          name: "Cha Gio Chien Rau Cai/Ga",
          price: "300/360",
          content: "Deep fried spring roll w/vege/chicken",
        },
        {
          name: "Deep Fried Pork Spring Rolls",
          price: "360",
          content: "",
        },
        {
          name: "Deep Fried Shrimp Rolls",
          price: "400",
          content: "",
        },
        {
          name: "Nem Lui",
          price: "400",
          content: "Lemongrass skewer w/ minced pork",
        },
        {
          name: "Quanh Thanh Chien Rau/ Ga",
          price: "330/370",
          content: "Deep fried wontons w/ vege/ chicken",
        },
        {
          name: "Stir Fried Crispy & Spicy Shrimps",
          price: "850",
          content: "(8 pcs)",
        },
        {
          name: "Spicy Pork Slices",
          price: "400",
          content: "",
        },
        {
          name: "Crispy Fried Spicy Chicken",
          price: "400",
          content: "",
        },
        {
          name: "Goi Du Du",
          price: "430",
          content: "Green papaya salad",
        },
        {
          name: "Goi Ga Nuong",
          price: "450",
          content: "Grilled chicken salad",
        },
        {
          name: "Bo Tron Cu Hanh",
          price: "630",
          content: "Grilled beef salad",
        },
        {
          name: "Green Papaya Salad w/ Dried Beef",
          price: "600",
          content: "",
        },
        {
          name: "Goi Tau Hu Tron Mien",
          price: "430",
          content: "Tofu salad w/ glass noodles",
        },
        {
          name: "Goi Ga Tron Mien",
          price: "450",
          content: "Chicken salad w/ glass noodles",
        },
        {
          name: "Goi Tep Tron Mien",
          price: "650",
          content: "Shrimp salad w/ glass noodles",
        },
        {
          name: "Canh Ga Nuong Sa",
          price: "430",
          content: "(Chicken Wings 4pcs)",
        },
        {
          name: "Dui Ga Nuong Sa",
          price: "430",
          content: "(Chicken Drumsticks 2pcs)",
        },
        {
          name: "Suong Heo Non Nuong Sa",
          price: "550",
          content: "(Pork Ribs 4pcs)",
        }
    ];

    const addmenubox = useRef();
    const editmenubox = useRef();
    const deletemenubox = useRef();
    const blur = useRef();

    const addmenuboxactive = () => {
      addmenubox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    const editmenuboxactive = () => {
      editmenubox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

    const [menudata,setMenudata] = useState(moremenudata[0]);

    const deletemenuboxactive = () => {
      deletemenubox.current.classList.toggle('active');
      blur.current.classList.toggle('active');
    };

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
  
    const editmenupageboxactive = () => {
        editmenupagebox.current.classList.toggle('active');
        blur.current.classList.toggle('active');
    };

    return(
        <div className='menulist'>
            
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

            <div className='addmenu'>
              <Button btntext="Add Menu" btnfnc={addmenuboxactive} />
            </div>
            <div className='editmenupagebtn'>
              <Button btntext="Edit Page Content" btnfnc={editmenupageboxactive} />
            </div>

            <div ref={addmenubox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={addmenuboxactive}></ion-icon></div>
              <Addmenuform btntext="Add Menu" mmdata={menudata} />
            </div>

            <div ref={editmenubox} className='popupbox' style={{top : (mousePos.y-3)+'px',left:(mousePos.x-3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={editmenuboxactive}></ion-icon></div>
              <Editmenuform btntext="Edit Menu" mmdata={menudata} />
            </div>

            <div ref={deletemenubox} className='popupbox' style={{top : (mousePos.y+3)+'px',left:(mousePos.x+3)+'px'}}>
              <div className='popupboxclose'><ion-icon name="close-outline" onClick={deletemenuboxactive}></ion-icon></div>
              <Deletemenuform btntext="Delete Menu" mmdata={menudata} />
            </div>

            <div ref={blur} className='blur'></div>

            <div className="menuboxs">
              <table>
                <thead>
                  <tr style={{border:"1px solid var(--gray-color)"}}>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {moremenudata.map((item,i) => (
                  <>
                    <tr>
                      <td style={{background:"none",border:"none",height:"0px",padding:"4px"}}></td>
                    </tr>
                    <tr style={{border:"1px solid var(--gray-color)"}}>
                      <td style={{width:"25%"}}>{item.name}</td>
                      <td style={{width:"50%"}}>{item.content}</td>
                      <td style={{width:"15%"}}>{item.price}</td>
                      <td style={{width:"10%"}}><ion-icon onClick={()=>{deletemenuboxactive();setMenudata(moremenudata[i])}} name="trash-outline"></ion-icon><ion-icon onClick={()=>{editmenuboxactive();setMenudata(moremenudata[i])}} name="create-outline"></ion-icon></td>
                    </tr>
                  </>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    );
}

export default Menu;