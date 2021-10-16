import React, {useState} from 'react';
import './App.css';
import StartWindow from "./views/StartWindow/StartWindow";
import PopUp from "./views/Pop-up/Pop-up";

function App() {

    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className="App">
            <StartWindow setIsOpen={setIsOpen} isOpen={isOpen}/>
            <PopUp setIsOpen={setIsOpen} isOpen={isOpen}/>
        </div>
    );
}

export default App;
