import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let logado = localStorage.getItem("logado")
  if(logado == "true"){
    return true
  }else{
    return false
  }
};
