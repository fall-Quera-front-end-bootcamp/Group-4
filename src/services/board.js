import axiosInstance from "../config/axios";



export const getBoards = async (workspaceId , projectId) => {

    try {
        const response = await axiosInstance.get(`/workspaces/${workspaceId}/projects/${projectId}/boards/`);
        // console.log('from ax',workspaceId,projectId);
        return response.data
        } catch (error) {
          console.error('Error fetching boards:', error);
          throw error;
        }
}



export const getBoard = async (workspaceId , projectId , boardId) => {

  try {
      const response = await axiosInstance.get(`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}`);
      console.log('from ax',workspaceId,projectId);
      return response.data
      } catch (error) {
        console.error('Error fetching board :', error);
        throw error;
      }
}


export const createBoard = async (workspaceId , projectId , name , color) => {
  try {
    const response = await axiosInstance.post(`/workspaces/${workspaceId}/projects/${projectId}/boards/`, {
      name:name,
      order:1,
      is_archive:"true",
      color:color
    });
    return response.data;
  } catch (error) {
    console.error('Error creating board:', error);
    throw error;
  }
}