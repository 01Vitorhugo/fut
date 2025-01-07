import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Coletes from "../pages/Colestes";
import Home from '../pages/Home';
import Jogador from '../pages/Jogador';


export default function Routs() {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/coletes" element={<Coletes />} />
                    <Route path="/jogador" element={<Jogador/>} />

                </Routes>
            </div>
        </Router>
    );
}