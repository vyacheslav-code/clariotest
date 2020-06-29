import React, {useState, useEffect} from 'react';
import MainLayout from './layouts/MainLayout';
import UsersTable from './components/UsersTable';
import Tip from './components/Tip';

function App() {
  const [users, setUsers] = useState([]);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://d3qgrbb3ofqfjo.cloudfront.net/test/api-response.json');
      const data = await response.json();
  
       setUsers(data);
    }
    
    fetchData().then(() => setTimeout(() => !sessionStorage.getItem('tipShown') && setShowTip(true), 5000));
  }, []);

  const handleCloseTip = () => {
    sessionStorage.setItem('tipShown', true);
    setShowTip(false)
  };

  return (
    <MainLayout>
      <UsersTable users={users}/>
      {showTip && <Tip onClose={handleCloseTip} title="This is some tip" subtitle="This is some tip"/>}
    </MainLayout>
  );
}

export default App;