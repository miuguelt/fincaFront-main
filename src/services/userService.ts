import axios from "axios";

const API_URL = "http://backend:8081/user";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserRoles = async () => {
  try {
    const response = await axios.get(`${API_URL}/roles`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUserStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/status`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUser = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userData: any) => {
  try {
    const response = await axios.post(API_URL, userData);
    console.log(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id: number, userData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


