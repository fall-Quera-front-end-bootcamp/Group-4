import axiosInstance from "../config/axios";



export const getWorkspaces = async () => {
    try {
      const response = await axiosInstance.get('/workspaces');
      return response.data; 
    } catch (error) {
      console.error('Error fetching workspaces:', error);
      throw error;
    }
  };
  
//   export default getWorkspaces;