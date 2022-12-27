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

// export const getList = async (id: string) => {
//    try {
//       const { data } = await api.getList(id);
//       return data;
//    } catch (error) {
//       console.log(error);
//    }
// };

// export const updateList = (id: string, list: any) => {
//    try {
//       const { data } = await api.updateList(id, list);
//       return data;
//    } catch (error) {
//       console.log(error);
//    }
// };

// export const deleteList = (id: string) => {
//    try {
//       api.deleteList(id);
//    } catch (error) {
//       console.log(error);
//    }
// };
