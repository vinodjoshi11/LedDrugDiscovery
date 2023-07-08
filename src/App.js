
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./_variables.scss";
import './App.css';  
import Header from './app/components/Header';
import LeadDrug from './app/pages/LeadDrug';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  return (
    <div className="App">
       <ThemeProvider>
      <Header/>
      <LeadDrug/>
      </ThemeProvider>
    </div>
  );
}

export default App;
