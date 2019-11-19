export class LogginService {
  mostrarMensaje(mensaje: string, nivel: number) {
    if(nivel==1) {
      console.log(`%c ${mensaje}`,"color: green")
    } else {
      console.log(`%c ${mensaje}`,"color: red")
    }
  }
}
