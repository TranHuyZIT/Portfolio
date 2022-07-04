import React, {useState} from 'react'
import Typical from 'react-typical'
import axios from 'axios'
import {toast} from 'react-toastify'
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'
import './ContactMe.css'
function ContactMe(props){
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        return Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [bool, setBool] = useState(false);

    const handleNameInput = (e) => {
        setName(e.target.value);
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handleMessageInput = (e) => {
        setMessage(e.target.value);
    }
    const submitForm = async (e) => {
        e.preventDefault();
    try {
        let data ={
            name, 
            email,
            message,
        };
        setBool(true)
        const res = await axios.post(`/contact`, data);
        if(name.length === 0 || email.length === 0 || message.length === 0){
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)
        }else if(res.status === 200){
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)

            setName("")
            setEmail("")
            setMessage("")

        }
    } catch (error) {
        console.log(error)
    }
        
    }

    return(
        <div className='main-container screen-container fade-in' id= {props.id||''}>
            <ScreenHeading subHeading={"Let's keep in touch"} title={'Contact Me'}/>
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Get In Touch!", 1000,
                        ]}
                        >
                        </Typical>
                    </h2>
                    <a href='https://www.facebook.com/tony.huy.9083'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/tgiahui/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCNiZqjuAdvTdDTkvg1lQgnA'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt='Img not found'/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleNameInput} value={name}/>

                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={handleEmailInput} value={email}/>

                        <label htmlFor='message'>Message</label>
                        <textarea type='text' onChange={handleMessageInput} value={message}/>
                        
                        <div className='send-btn'>
                            <button type='submit'>
                                send<i className='fa fa-paper-plane'/>
                                {bool ?  (<b className='load'>
                                    <img src={load1} alt='img not responding'/>
                                </b>) : ('')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default ContactMe;