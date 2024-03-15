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


export const createWorkspace = async (workspaceName , workspaceColor) => {
  try {
    const response = await axiosInstance.post(`/workspaces/`, {
      name:workspaceName,
      color:workspaceColor
    });
    return response.data;
  } catch (error) {
    console.error('Error creating workspace:', error);
    throw error;
  }
}

export const editColorWorkspace = async (workspaceId,newColor) => {
  try {
    const response = await axiosInstance.patch(`/workspaces/${workspaceId}/`, {
      color: newColor
    });
    return response.data;
  } catch (error) {
    console.error('Error editing workspaceColor:', error);
    throw error;
  }
}
export const editNameWorkspace = async (workspaceId,newName) => {
  try {
    const response = await axiosInstance.patch(`/workspaces/${workspaceId}/`, {
      name: newName
    });
    return response.data;
  } catch (error) {
    console.error('Error editing workspaceName:', error);
    throw error;
  }
}


export const deleteWorkspace = async (id) => {
  try {
    const response = await axiosInstance.delete(`/workspaces/${id}/`);
    return response.data; 
  } catch (error) {
    console.error(`Error deliting workspace:${id}`, error);
    throw error;
  }
};
