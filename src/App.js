
import Header from "./components/header"
import SectionOne from "./components/sectionOne"
import SectionTwo from "./components/sectionTwo"
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

import './App.css';

function App() {
  return (
    <>
    <body>

    <Header/>

    {/* sectionOne starts */}
    <SectionOne/>
    {/* sectionOne ends  */}

    {/* sectionTwo starts */}
    <SectionTwo/>
    {/* sectionTwo ends */}

    {/* sectionThree starts */}
    <SectionThree/>
    {/* sectionThree ends */}

    {/* sectionThree starts */}
    <SectionFour/>
    {/* sectionThree ends */}

 

    
    </body>

    </>
  );
}

export default App;
