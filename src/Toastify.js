import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const handleRegister = async () => {
    try {
      // Perform registration logic

      // Assuming registration is successful
      toast.success('Registration successful! You can now log in.');
    } catch (error) {
      // Handle registration error
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      {/* Your registration form goes here */}
      <button onClick={handleRegister}>Register</button>

      {/* Toast container for displaying messages */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default RegistrationForm;
