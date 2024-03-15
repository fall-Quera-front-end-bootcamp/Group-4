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
      const response = await axiosInstance.get(`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`);
      //console.log('from ax',workspaceId,projectId);
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

export const editColorBoard = async (workspaceId,projectId,boardId,newColor,boardName) => {
  try {
    const response = await axiosInstance.patch(`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`, {
      name:boardName,
      color: newColor
    });
    return response.data;
  } catch (error) {
    console.error('Error editing BoardColor:', error);
    throw error;
  }
}

export const editNameBoard = async (workspaceId,projectId,boardId,newName) => {
  try {
    const response = await axiosInstance.patch(`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`, {
      name: newName
    });
    return response.data;
  } catch (error) {
    console.error('Error editing workspaceName:', error);
    throw error;
  }
}

export const deleteBoard = async (workspaceId,projectId,boardId) => {
  try {
    const response = await axiosInstance.patch(`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`);
    return response.data;
  } catch (error) {
    console.error('Error editing workspaceName:', error);
    throw error;
  }
}
