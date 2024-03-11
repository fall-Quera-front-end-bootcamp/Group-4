import axiosInstance from "../config/axios";


export const getTasks = async (workspaceId , projectId , boardId) => {

    try {
        const response = await axiosInstance.get(`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/`);
        return response.data
        } catch (error) {
          console.error('Error fetching tasks :', error);
          throw error;
        }
  }