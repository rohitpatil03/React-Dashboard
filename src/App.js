import ContentManger from './Components/ContentManger'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <>
      
      
      <Navbar />
      <div className='arrangement'>
        <div className='sidebar-arrangement'>

          <Sidebar />
        </div>
        <div className='content-arrangement'>
          
          <ContentManger/>
        </div>
      </div>
    </>
  );
}

export default App;
