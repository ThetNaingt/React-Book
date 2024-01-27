import axios from "axios";
import { API_CRL } from "../lib/constant";


export const api = axios.create({
  baseURL: API_CRL,
})