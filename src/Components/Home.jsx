import React from 'react'
import '../Styles/Home.scss';
import Service from '../Assests/service.png';
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Home = () => {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
      <div>
        <div>
          <div>
            <div className='iconsbtn'>
              <button><MdMessage/> VIA SUPPORT CHAT</button>
            </div>
            <div className='iconsbtn'>
              <button> <FaPhoneAlt/> VIA CALL</button>
            </div>
          </div>
          <div>
            <button><HiMail  fontSize="1rem"/> VIA EMAIL FORM</button>
          </div>
          <form>
            <div>
            <label>Name</label>
            <input type='text'/>
            </div>
            <div>
            <label>Email</label>
            <input type='email'/>
            </div>
            <div>
            <label>Text</label>
            <textarea></textarea>
            </div>
            <div>
              <button className='btnsub' type='submit'>SUBMIT</button>
            </div>
          </form>
        </div>
        <div>
          <img src={Service} />
        </div>
      </div>
    </main>
  )
}

export default Home