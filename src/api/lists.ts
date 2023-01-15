import axios from "axios";
const API = axios.create({ baseURL: "/api/lists" });

export const getLists = async (authorId: string) => {
   try {
      const { data } = await API.get(`/`, {
         params: { authorId },
      });
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const createList = async (listName: any) => {
   try {
      const data = await API.post("/", listName);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const updateList = (id: string, newName: any) => {
   try {
      const data = API.put(`/${id}`, newName);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteList = (id: string) => {
   try {
      const data = API.delete(`/${id}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};
