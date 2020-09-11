import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/*
function App() {
  return (
      <div>
         <ProductList/>
      </div>
  );
}
*/

function RevStr(e){  
  e.preventDefault();
 // return alert('Name: ' + e.target.  + " - $" + );
  
  var i = 0;
  var j = 0;
  var reversedString = "";
  //var originalString = "";
  //var originalString = this.setState({ Paragraph: event.target.value });
  //var No = this.setState({ no: event.target.value }) ;
  //return alert(originalString);
  //var No = no;
  //var originalString = 'This is a coding test. I like java so much. This is my day.';
  var originalString = "Hi there. My name is Sam. This is my lucky day. i like coding so much. This is it.";
  //return alert(""+ originalString.trim().length);
  if (originalString != null && originalString.trim().length > 0)
   {
      const lines = [] = originalString.split(".");
      //return alert(lines);
      if (null != lines && lines.length > 0) 
      {
        reversedString = "";
        for ( i = 0; i <= lines.length - 1; i++) 
        {
          if (lines[i] != null && lines[i].trim().length > 0) 
          {
            const words= [] = lines[i].trim().split(" ");
            
            if (null != words && words.length > 2) 
            {
              for (j = words.length - 3; j >= 0; j--) 
              {
                reversedString += " " + words[j];
              }

              for (j = words.length - 2; j <= words.length - 1; j++) 
              {
                reversedString += " " + words[j];
              }
              reversedString += ".";
            } 
            else 
            {
              reversedString += lines[i] + ". ";
            }
          }
        }
        return alert( "Reversed String: " + reversedString.trim());
      }
    } 
    else 
    {
      return alert("Please Enter Valid String.");
    }
  return alert("Reversed String:");
}

function StringRev(){
  return(
    <div>
      <form>
        Enter Paragraph:  <input type="text" placeholder="Enter Paragraph" name="Paragraph"/><br/><br/>
        Skip last  <input type="text" placeholder="Enter no of" style={{ width:"70px" }} name="no"/>  words in a sentence.<br/><br/>
        <button onClick={RevStr}>Submit</button>
      </form>
    </div>
  )
}

class App extends React.Component{
  render(){
    return(
      <div>
        <StringRev/>
      </div>
    )
  }
}

export default App;