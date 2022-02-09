import {Button} from '@mui/material';
import Icon from '../Icon.png';
export default function HomePage(){
    return(
        <>
          
            <div className="div-image-logo">
                <div className='boldText-home'>
                    <h2 className="headingHome">
                        Let's things Go Better <br/>
                        With Cryptocurrency
                    </h2>
                    <small style={{fontWeight: 480}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> 
                    eiusmod tempor incididunt ut labore. 
                    </small>
                    <Button className="buttonStart">
                        Let's get started
                    </Button>
                </div>
               
                    <img src={Icon} className="logo-css"/>
                    {/* style={{objectFit:'cover', height:'24vh', marginTop:'3vh', marginLeft:'11vw'}} */}

                <div>

                </div>
            </div>
        
        </>
    )
}