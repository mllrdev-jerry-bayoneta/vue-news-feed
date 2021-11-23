import environment from "@/environments/environment";
import IClientRequest from "@/interface/client-request.interface";
import IError from "@/interface/error.interface";

const client = async(request: IClientRequest) => {
  return await fetch(`${environment.baseUrl}/${request.url}`,{
    method: request.method,
    headers : {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(request.data),
  })
  .then(response => {
    return response
  }).catch(error => {
    const errors: IError = { errorCode: error.status, ok:error.ok }
    throw errors;
  })
}

export default client