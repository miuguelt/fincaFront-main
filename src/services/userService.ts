import api from "./api";

const API_URL = "user/";

export const getUsers = async () => {
  try {
    console.log("entra a getUsers");
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserRoles = async () => {
  try {
    console.log("entra a roles ----------------------------------------------------------");
    const response = await api.get(`${API_URL}/roles/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUserStatus = async () => {
  try {
    console.log("entra a status");
    const response = await api.get(`${API_URL}/status/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUser = async (id: string) => {
  try {
    console.log("entra a getUser------------------------");
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userData: any) => {
  try {
    console.log("entra a createUser");
    console.log(API_URL);
    const response = await api.post(API_URL, userData);
    
    console.log(response.data);
    console.log("sale de createUser");
    
    console.log(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id: number, userData: any) => {
    try {
        console.log("entra a updateUser");
        const response = await api.put(`${API_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


