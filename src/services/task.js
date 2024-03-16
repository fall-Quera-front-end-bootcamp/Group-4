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

export const createTask = async (workspaceId, projectId, boardId, task) => {
  try {
    const response = await axiosInstance.post(
      `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/`,
      task
    );
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const deleteTask = async (workspaceId, projectId, boardId, taskId) => {
  try {
    const response = await axiosInstance.delete(
      `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};