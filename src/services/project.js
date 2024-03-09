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


export const createProject = async (workspaceId, projectName) => {
    try {
      const response = await axiosInstance.post(`/workspaces/${workspaceId}/projects/`, {
        name: projectName
      });
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }