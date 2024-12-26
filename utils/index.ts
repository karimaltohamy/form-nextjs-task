import axiosInstance from "./axiosInstance";

export const getAllTermsByGroup = async (group: string) => {
  try {
    const { data } = await axiosInstance.get(`/terms/${group}`);

    if (data.status === "success") {
      return data.data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};
