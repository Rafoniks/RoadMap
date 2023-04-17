import './App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import rocket from './img/rocket.png'
import Up from './img/up.png'
import speaker from './img/speaker-1.png'
import speaker2 from './img/speaker-2.png'
import speaker3 from './img/speaker-3.png'
import speaker4 from './img/speaker-4.png'
import speaker5 from './img/speaker-5.png'
import speaker6 from './img/speaker-6.png'
import ticket from './img/download.jpeg'
import expert from './img/expert.jpg'
import globe from './img/globe.jpeg'






function App() {
  return (
    <>
      <header className='blueWrap'>
        <div className='insideBlue'>
          <div className='logoWrapper'>
            <img src={Up} alt='meetup logo' height='100px' width='170px' />
            <div> <h1 className='text1'> Attend The Most Awaited Conference of 2015 </h1></div>
            <div> <h2 className='text2'> to start you up with your business!</h2></div>
            <div> <p className='text3'> 20 to 22 October, 2015</p></div>
            <div className='buttonWrapper'><button className='button' > buy tickets now </button></div>
          </div>
          <div>
            <img className='blueWrapIMG' src={rocket} alt='rocket' height='200px' width='200px' />
          </div>
        </div>

      </header>

          <div> <h2 className='text4'> Why This Event Is Super Cool?</h2></div>
      <div style={{alignItems:'center', justifyContent:'center'}} className='rowWrapper'>
          <div className='eventImg'>
            <img src={ticket} alt='ticket' height='150px' width='200px' />
            <div> <h3 className='offers'>Buy Early Bird Tickets </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at 
            varius vel pharetra.</p></div>
          </div>

          <div  className='eventImg'>
            <img src={expert} alt='expert' height='150px' width='200px' />
            <div> <h3 className='offers'>Expert speakers </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at
            varius vel pharetra.</p></div>
          </div>
          <div  className='eventImg'>
            <img src={globe} alt='globe' height='150px' width='200px' />
            <div className='offers'> <h3 >People around the globe </h3></div>
            <div  className='text5'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra.</p></div>
          </div>
      </div>

          <div> <h2 className='text4'> Meet the Speakers</h2> </div>
      <div style={{alignItems:'center', justifyContent:'center'}} className='gridContainer'> 
          <div className='speaker'>
            <img src={speaker} alt='Speaker1' height='100px' width='100px' />
            <div> <h3 className='offers'>Simon Colins </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            <div className='Icon'><FacebookIcon style={{color:'darkBlue'}}/><TwitterIcon style={{color:'rgb(44, 146, 230)'}}/><LinkedInIcon style={{color:'blue'}}/></div>
          </div>

          <div className='speaker2'>
            <img src={speaker2} alt='Speaker1' height='100px' width='100px' />
            <div> <h3 className='offers'>Simon Colins </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            <div className='Icon'><FacebookIcon style={{color:'darkBlue'}}/><TwitterIcon style={{color:'rgb(44, 146, 230)'}}/><LinkedInIcon style={{color:'rgb(31, 101, 230)'}}/></div>
          </div>

          <div className='speaker3'>
            <img src={speaker3} alt='Speaker1' height='100px' width='100px' />
            <div> <h3 className='offers'>Simon Colins </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            <div className='Icon'><FacebookIcon style={{color:'darkBlue'}}/><TwitterIcon style={{color:'rgb(44, 146, 230)'}}/><LinkedInIcon style={{color:'rgb(31, 101, 230)'}}/></div>
          </div>

          <div className='speaker4'>
            <img src={speaker4} alt='Speaker1' height='100px' width='100px' />
            <div> <h3 className='offers'>Simon Colins </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            <div className='Icon'><FacebookIcon style={{color:'darkBlue'}}/><TwitterIcon style={{color:'rgb(44, 146, 230)'}}/><LinkedInIcon style={{color:'rgb(31, 101, 230)'}}/></div>
          </div>

          <div className='speaker5'>
            <img src={speaker5} alt='Speaker1' height='100px' width='100px' />
            <div> <h3 className='offers'>Simon Colins </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            <div className='Icon'><FacebookIcon style={{color:'darkBlue'}}/><TwitterIcon style={{color:'rgb(44, 146, 230)'}}/><LinkedInIcon style={{color:'rgb(31, 101, 230)'}}/></div>
          </div>

          <div className='speaker6'>
            <img src={speaker6} alt='Speaker1' height='100px' width='100px' />
            <div> <h3 className='offers'>Simon Colins </h3></div>
            <div> <p className='text5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            <div className='Icon'><FacebookIcon style={{color:'darkBlue'}}/><TwitterIcon style={{color:'rgb(44, 146, 230)'}}/><LinkedInIcon style={{color:'rgb(31, 101, 230)'}}/></div>
          </div>
      </div>

      <div className='yellowWrap'>
          <h2 className='text4'> Buy Tickets</h2>
          <div className='rowTicket'>
        <div className='Window'>
          <h3 className='offers'>Early Bird Ticket</h3>
          <p className='number'> $399 </p>
          <p className='text5'> All days entry pass for all events</p>
          <button className='button2' > buy </button>
        </div>
        <div className='Window'>
          <h3 className='offers'>Early Bird Ticket</h3>
          <p className='number'> $399 </p>
          <p className='text5'> All days entry pass for all events</p>
          <button className='button2' > buy </button>
        </div>   
        </div>
      </div>
      <div>

        <div> <h2 className='text4'> Event Schedule</h2></div>
        <div style={{alignItems:'center', justifyContent:'center'}} className='eventWrapper'>
          <div className='event1'>
            <div>
            <img style={{margin:'10px'}}src={speaker6} alt='Event Speaker' height='70px' width='70px'/>
            </div>
            <div>
              <p className='boldTime'> 10am to 11am </p>
              <p className='boldEvent'> the designer's guide to being essential</p>
              <p className='eventText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
          </div>
          <div className='event2'>
            <div>
            <img style={{margin:'10px'}}src={speaker4} alt='Event Speaker' height='70px' width='70px'/>
            </div>
            <div>
              <p className='boldTime'> 10am to 11am </p>
              <p className='boldEvent'> the designer's guide to being essential</p>
              <p className='eventText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
          </div>
          <div className='event3'>
            <div>
            <img style={{margin:'10px'}}src={speaker2} alt='Event Speaker' height='70px' width='70px'/>
            </div>
            <div>
              <p className='boldTime'> 10am to 11am </p>
              <p className='boldEvent'> the designer's guide to being essential</p>
              <p className='eventText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
          </div>
          <div className='event4'>
            <div>
            <img style={{margin:'10px'}}src={speaker2} alt='Event Speaker' height='70px' width='70px'/>
            </div>
            <div>
              <p className='boldTime'> 10am to 11am </p>
              <p className='boldEvent'> the designer's guide to being essential</p>
              <p className='eventText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
          </div>
        </div>
      </div>

      <div className='formsWrapper'>
        <div className='rowForms'>
          <div className='insideFormsWrapper'>
            <div className='contact'> Contact Form</div>
            <div className='formsData'>
              <div style={{marginRight:'16px'}} className='forms'>Name</div>
              <div><input type='text' className='input'/></div>
            </div>
            <div className='formsData'>
              <div style={{marginRight:'16px'}} className='forms'>Email</div>
              <div><input type='email' className='input'/></div>
            </div>
            <div className='formsData'>
            <div  className='forms'>Your Message</div>
            <div><input type='text' className='message'/></div>
            </div>
            <div className='sendWrapper'><button className='buttonSend'> SEND -></button></div>
          </div>
          <div className='insideSocialWrapper'>
            <div  className='contact'> Twitter Feed</div>
            <div className='underLine'><p className='text6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor</p></div>
            <div className='underLine'><p className='text6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor</p></div>
            <div ><p className='text6' > Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor</p></div>
          </div>
        </div>
        <div className='underFooterWrapper'>
          <p className='rights'> 2015. DesignerDada.com | All rights reserved.</p>
          <div className='underRightsWrapper'>
            <p className='underRights'> About Us</p>
            <p className='underRights'> Privacy Policy</p>
            <p className='underRights'> Terms and Condition</p>
          </div>
        </div>
      </div>

  

  

          


  </>
  );
}

export default App;
