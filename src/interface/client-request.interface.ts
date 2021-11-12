import { Method } from "axios";

interface IClientRequest {
  method: Method;
  url: string;
  // data must be able to accept any data type to be reusable
  data?: any;
}

export default IClientRequest