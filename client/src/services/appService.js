import { api } from "./api";

export const getApps =
  async () => {
    try {
      const response =
        await api.get("/apps");

      return response.data;
    } catch (error) {
      console.error(
        "Get apps error:",
        error
      );

      return [];
    }
  };