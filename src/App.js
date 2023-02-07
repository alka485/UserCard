import Image from "./Image.js"
import './App.css';
import img from "./image.webp"
import Details from "./Details"


function App() {
  let data = {
    image:img,
    name:"Mary Robins",
    position:"Architect"
  }
  return (
    <div>
      
      <Image mydata = {data}/>
      <Details mydata={data}/>
      
    </div>
  );
}

export default App;
