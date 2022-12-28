import axios from "axios";
export const getLists = async () => {
   try {
      const { data } = await axios.get("/api/lists");
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const createList = async (listName: any) => {
   try {
      const data = await axios.post("/api/lists", listName);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const updateList = (id: string, newName: any) => {
   try {
      const data = axios.put(`/api/lists/${id}`, newName);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteList = (id: string) => {
   try {
      const data = axios.delete(`/api/lists/${id}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

// export const getList = async (id: string) => {
//    try {
//       const { data } = await api.getList(id);
//       return data;
//    } catch (error) {
//       console.log(error);
//    }
// };
