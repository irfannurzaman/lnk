import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const login = async (username: string, password: string) => {
  return await api.post("/auth/login", { username, password });
};

export const sendEmail = async (
  id: number,
  title: string,
  allDay: boolean,
  email: string,
  start: Date,
  end: Date
) => {
  return await api.post("/email/send", {
    id,
    title,
    allDay,
    email,
    start,
    end,
  });
};

export const getEmails = async () => {
  return await api.get("/email/list");
};
