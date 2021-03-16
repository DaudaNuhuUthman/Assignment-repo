import Button from '../app component/button';
import Navbar from '../app component/navbar';
import Inputfield from "../app component/inputfield"
import CheckBox from "../app component/checkbox"
import Dropdown from "../app component/dropdown"
import Textarea from "../app component/textarea"
import Radiobutton from "../app component/radiobutton"
import Topography from "../app component/topography"

function Home(props) {


    return(
        <div class="home">
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>
            <Topography/>
            <CheckBox/>
            <Dropdown/>
            <Inputfield/>
            <Radiobutton/>
            <Textarea/>

        </div>
    )
}

export default Home;