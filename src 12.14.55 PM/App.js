
import Header from "./components/Header"
import Mission from "./components/Mission"
import Model from "./components/Model"
import Plan from "./components/Plan";
import Future from "./components/Future";
import Sale from "./components/Sale";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <>
    <body>

    <Header/>

    {/* mission starts */}
    <Mission/>
    {/* mission ends  */}

    {/* model starts */}
    <Model/>
    {/* model ends */}

    {/* plan starts */}
    <Plan/>
    {/* plan ends */}

    {/* future starts */}
    <Future/>
    {/* future ends */}

     {/* sale starts */}
     <Sale/>

     {/* sale ends */}

     {/* footer starts */}
     <Footer/>

     {/* footer ends */}

 

    
    </body>

    </>
  );
}

export default App;
