import Button from "./../button/button";
import './menuform.css';

function Addmenuform({btntext}){

    return(
            <form className='menuform'>
                <div className='menuformbox'>
                    <label>Product Name</label>
                    <input type='text' />
                </div>
                <div className='menuformbox'>
                    <label>Product Description</label>
                    <textarea></textarea>
                </div>
                <div className='menuformbox'>
                    <label>Product Price</label>
                    <input type='number'/>
                </div>
                <div className='menuformbutton'>
                    <Button btntext={btntext} />
                </div>
            </form>
    );
}

export default Addmenuform;