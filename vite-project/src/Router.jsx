import { Route, Routes } from 'react-router-dom';

import { Inicial , SobreNos, Erro404} from './pages';
import { LayoutPadrao } from './layouts';

const Router = () => {
    return(
    <Routes>
        <Route path="/" element={<LayoutPadrao />}>
            <Route path="/" element={<Inicial />} />
            <Route path="*" element={<Erro404 />}></Route>
            <Route path="/sobre-nos" element={<SobreNos />} />
        </Route>        
    </Routes>
    );  
};

export { Router };
