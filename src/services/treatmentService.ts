import axios from "axios";

const API_URL = "https://finca.isladigital.xyz/treatments";

export const getTreatments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTreatment = async (treatmentData: any) => {
  try {
    const response = await axios.post(API_URL, treatmentData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTreatment = async (id: number, treatmentData: any) => {
  try {
      const response = await axios.put(`${API_URL}/${id}`, treatmentData);
      return response.data;
  } catch (error) {
      console.error(error);
  }
};

