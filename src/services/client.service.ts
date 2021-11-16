import environment from "@/environments/environment";
import IClientRequest from "@/interface/client-request.interface";
import axios from "axios";

const client = async(request: IClientRequest) => {
  // return axios({
  //   method: request.method,
  //   url: `${environment.baseUrl}/${request.url}`,
  //   data: request.data
  // }).then(response => {
  //   return response
  // }).catch(error => {
  //   return error
  // })
  return await fetch(`${environment.baseUrl}/${request.url}`,{
    method: request.method,
    headers : {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(request.data),
  }).then(response => response.json())
}

export default client