import { CanActivateChildFn } from '@angular/router';

export const authIdGuard: CanActivateChildFn = (childRoute, state) => {
  let logado = localStorage.getItem("logado")
  let idAlimento = localStorage.getItem("idAlimento")
  if(logado == "true" && (state.url == "/diet" || state.url == `/diet/${idAlimento}`)){
    return true
  }else{
    return false
  }
};
