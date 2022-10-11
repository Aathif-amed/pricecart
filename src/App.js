import './App.css';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./global.css"
import Banner from './Banner';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
function App() {
  return (
    <>
    <Navbar></Navbar>
    <header class="bg-dark py-5">
    <Banner></Banner>
    </header>
    </>
  );
}

export default App;
