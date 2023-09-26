import Button from "./../button/button";
import './eventform.css';

function Eventform({btntext}){
    return(
            <form className='eventform'>
                <div className='eventformbox'>
                    <label>Event Title</label>
                    <input type='text' />
                </div>
                <div className='eventformbox'>
                    <label>Event Start Date</label>
                    <input type='date' />
                </div>
                <div className='eventformbox'>
                    <label>Event End Date</label>
                    <input type='date' />
                </div>
                <div className='eventformbox'>
                    <label>Event Description</label>
                    <textarea></textarea>
                </div>
                <div className='eventformbox'>
                    <label>Event Image</label>
                    <input type='file' />
                </div>
                <img src='' alt='' />
                <div className='eventformbutton'>
                    <Button btntext={btntext} />
                </div>
            </form>
    );
}

export default Eventform;