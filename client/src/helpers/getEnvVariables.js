import dotenv from "dotenv"

export const getEnvVariables = () => {
  // import.meta.env
  dotenv.config("../../.env");

  return {
    // ...import.meta.env
    VITE_URL_API: import.meta.env.VITE_URL_API,
    VITE_API_KEY: import.meta.env.VITE_API_KEY
  }
}