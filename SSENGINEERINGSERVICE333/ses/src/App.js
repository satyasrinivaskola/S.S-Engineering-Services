
import './App.css';
//import style from React;
import SESHEADER from './SESHEADER.JS';
function App() {
  return (
  
    <div>
      <header>
        <h1 id='h1c'>Welcome To S.S Engeering Services</h1>
        <img id='imgc' src={require("./SES_DET.jpeg")}></img>
         <p id='aboutc'>We work based cutosmer requirment we all are using technology<br/>
          but sometimes we will some issue while using machine all elctronic gadgets are more <br/>
          expensove we can't bare again,So one solution for all machina repairs 
         </p>
      </header>
      <div class="row">
 
  <table>
    <tr>
      <td>  <div className="column">
    <img src={require("./SES_M1.jpeg")} alt="Mountains"></img>
    </div> 
      </td>
      <td> <img src={require("./SES_M2.jpeg")} alt="Mountains"></img></td>
      <td> <img src={require("./SES_M4.jpeg")} alt="Mountains"></img></td>
      <td> <img src={require("./SES_M3.jpeg")} alt="Mountains"></img></td>
    </tr>
  </table>
</div>
      <div>
        <center><h1 id='chat333'>Let's Chat</h1></center>
        <div id='border'>
        <center><tittle><b>Hours:  </b>    24/7 Availability</tittle>
        <br>

        </br>
        <br>
        
        </br>
          
        
        <b><tittle>Address: </tittle></b>
         <p>H.NO 5-13, Ananadapuram Village ,<br></br>
            SundarayyaPeta GramaPanchayathi<br></br>
            Kannurapalem Post,Kasimakota Mandal,Anakapalli District -531031
          </p>
       
          <b><tittle> Contact Info:</tittle></b>
       
        <p>Phone:9059855729 <br/>
          Email:s.sengineeringservices24@gmail.com.
        </p>
         </center></div>
      </div>
      
    </div>
    
  );
}

export default App;
