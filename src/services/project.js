import axiosInstance from "../config/axios";


export const getProjects = async (workspaceId) => {
    try {
      const response = await axiosInstance.get(`/workspaces/${workspaceId}/projects/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }