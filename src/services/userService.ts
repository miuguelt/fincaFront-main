import api from "./api";

const API_URL = "https://finca.isladigital.xyz/user";

export const getUsers = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserRoles = async () => {
  try {
    const response = await api.get(`${API_URL}/roles`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUserStatus = async () => {
  try {
    const response = await api.get(`${API_URL}/status`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUser = async (id: string) => {
  try {
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
    const response = await api.post(API_URL, userData, {
      headers: {
        'Content-Type': 'application/json', // Set content type for JSON data
        'Access-Control-Allow-Origin': '*'
      }
    });
    
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
        const response = await api.put(`${API_URL}/${id}`, userData, {
          headers: {
            'Content-Type': 'application/json', // Set content type for JSON data
            'Access-Control-Allow-Origin': '*'
          }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


