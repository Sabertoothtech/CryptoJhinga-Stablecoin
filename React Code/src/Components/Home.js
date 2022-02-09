import Navbar from "./Navbar";
import HomePage from "./HomePage";
import '../App.css';

export default function Home(){
    return(
        
        <div className="homeContainer">
            <Navbar/>
            <HomePage/>
        </div>      
       );
}