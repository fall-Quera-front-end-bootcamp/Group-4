import axiosInstance from "../config/axios";


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
    localStorage.setItem('userId',response.data.user_id);
    console.log(localStorage.getItem('userId'));

    
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert('نام کاربری یا رمز عبور اشتباه است');
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
    if (error.response && error.response.status === 400) {
      alert('کاربر از قبل وجود دارد.');
    } else {
      console.error('Registration failed:', error);
      throw error;
    }
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
  

  export const fetchAccount = async (userId) => {
    try {
      const response = await axiosInstance.get(`/accounts/${userId}`);
      console.log('Account:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  export const changePersonalInformation = async (userId, firstName, lastName, phoneNumber, thumbnail, email, username) => {
    try {
      const formData = new FormData();
  
      formData.append('username', username);
      formData.append('email', email);
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('phone_number', phoneNumber);
  
      if (thumbnail instanceof File) {
        formData.append('thumbnail', thumbnail);
      }
  
      const response = await axiosInstance.patch(`/accounts/${userId}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      return response.data;
    } catch (error) {
      console.error('Error editing user personal information:', error);
      throw error;
    }
  };
  

  export const changeAccountInformation = async( oldPass , newPass, newPass1) => {

    try {
      const response = await axiosInstance.patch(`/accounts/change-password`, {
        oldPass:oldPass ,
        newPass:newPass,
        newPass1:newPass1
      });
  
      return response.data;
    } catch (error) {
      console.error('Error changing user password:', error);
      throw error;
    }

  }
// export const fetchAccountByUsername = async (username) => {
//   try {
//     // Fetch all accounts
//     const response = await axiosInstance.get('/accounts/');
//     const accounts = response.data;
    
//     const account = accounts.find(account => account.username === username);
    
//     return account || null;
//   } catch (error) {
//     console.error('Error fetching account by username:', error);
//     throw error;
//   }
// };
  
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

