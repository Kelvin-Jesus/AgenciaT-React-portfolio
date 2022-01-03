import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import ServiceSocialMedia from './pages/ServiceSocialMedia.jsx';
import ServiceIdVisual from './pages/ServiceIdVisual.jsx';
import ServiceEditing from './pages/ServiceEditing.jsx';
import NotFound from './pages/NotFound.jsx'

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="social-media" element={<ServiceSocialMedia />} />
                <Route path="id-visual" element={<ServiceIdVisual />} />
                <Route path="edicao" element={<ServiceEditing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
