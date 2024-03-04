import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://185.8.174.74:8000/',
  
});

// Request interceptor to add access token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve access token from local storage
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log(accessToken);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration and refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          // Handle the case where refresh token is not available
          console.error('Refresh token not found');
          throw new Error('Refresh token not found');
        }

        // Request to refresh token
        const response = await axiosInstance.post('/accounts/refresh/', { refresh: refreshToken });
        const { accessToken } = response.data;

        // Update the access token in local storage
        localStorage.setItem('accessToken', accessToken);

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
        console.error('Error refreshing token:', error);
        // Redirect to login page or perform other actions
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
