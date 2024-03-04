import axiosInstance from "../config/axios";
import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post('/accounts/login/', {
      username,
      password
    });
    //const { accessToken } = response.data;

    // Store the token in local storage
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
    
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      
      console.error('Invalid username or password:', error);
      throw new Error('Invalid username or password');
    } else {
      
      console.error('Login failed:', error);
      throw error; 
    }
  }
};

export const registerr = async (username, email, password) => {
    try {
      const response = await axiosInstance.post('/accounts/', {
        username,
        email,
        password
      });
  
      const userData = response.data;
  
      return userData;
    } catch (error) {
      // Log and handle any errors
      console.error('Registration failed:', error);
      throw error; 
    }
  };


  export const fetchAccounts = async () => {
    try {
      const response = await axiosInstance.get('/accounts/');
      console.log('Accounts:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };
  


  
// export const fetchAccounts = async () => {
//     try {
//       const accessToken = localStorage.getItem('accessToken');
//       if (!accessToken) {
//         // Handle the case where access token is not available
//         console.error('Access token not found');
//         throw new Error('Access token not found');
//       }
  
//       const response = await axios.get('http://185.8.174.74:8000/accounts/', {
//         // headers: {
//         //   Authorization: `Bearer ${accessToken}`,
//         // },
//       });
  
//       console.log('Accounts:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching accounts:', error);
//       throw error;
//     }
//   };

