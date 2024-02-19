import { useEffect, useState } from 'react';
import './App.css';
// import LoginForm from './components/LoginForm';
import Quiz from './components/Quiz';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);
  console.log('App component rendered');
  return (
    <>
      {loading ? (<div>Loading...</div>) :<Quiz /> }
     
      
    </>
  );
}

export default App;
