import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Loadepage from './Loaderpage';


const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/nav');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='relative'>
      {loading ? (
        <div>
          <Loadepage/>
        </div>
      ) : (
        <div>
          <Navbar/>
        </div>
      )}
    </div>
  );
};

export default Loader;
