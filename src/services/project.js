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

  export const getProject = async (workspaceId , projectId ) => {

    try {
        const response = await axiosInstance.get(`/workspaces/${workspaceId}/projects/${projectId}/`);
        return response.data
        } catch (error) {
          console.error('Error fetching project :', error);
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

  export const editProject = async (workspaceId, projectId,newName) => {
    try {
      const response = await axiosInstance.patch(`/workspaces/${workspaceId}/projects/${projectId}/`, {
        name: newName
      });
      return response.data;
    } catch (error) {
      console.error('Error editing project:', error);
      throw error;
    }
  }

  export const deleteProject = async (workspaceId, projectId) => {
    try {
      const response = await axiosInstance.delete(`/workspaces/${workspaceId}/projects/${projectId}/`);
      return response.data;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  }