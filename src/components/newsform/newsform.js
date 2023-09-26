import Button from "./../button/button";
import './newsform.css';

function Newsform({btntext}){
    return(
            <form className='newsform'>
                <div className='newsformbox'>
                    <label>News Title</label>
                    <input type='text' />
                </div>
                <div className='newsformbox'>
                    <label>News Content</label>
                    <textarea></textarea>
                </div>
                <div className='newsformbox'>
                    <label>News Image</label>
                    <input type='file' />
                </div>
                <img src='' alt='' />
                <div className='newsformbutton'>
                    <Button btntext={btntext} />
                </div>
            </form>
    );
}

export default Newsform;