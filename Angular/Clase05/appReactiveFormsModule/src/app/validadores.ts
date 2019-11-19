import { ValidatorFn, FormControl, AbstractControl } from '@angular/forms';

export class Validadores {
  static validarPorDominios(dominiosNoPermitidos: Array<string>): ValidatorFn {
    const validarCorreosGratuitos = (fc: FormControl): { [s: string]: boolean } => {
      if (fc && fc.value && fc.value.trim() != "" && fc.value.split("@").length > 1) {
        const dominio = fc.value.split("@")[1].toLowerCase()

        if (dominiosNoPermitidos.indexOf(dominio) > -1) {
          return { correoGratuito: true }
        }
        return null
      }
      return null
    }

    return validarCorreosGratuitos
  }

    static validarConfirmacionContrasena(fc:AbstractControl): {[s: string]: string} {
    if(!fc || !fc.parent) return null

    const contrasena = fc.parent.get("contrasena")
    const confirmacion = fc.parent.get("confirmacion")

    if(!contrasena || !confirmacion) return null

    if(contrasena.value.trim()=="") return null

    if(contrasena.value != confirmacion.value) return {contrasenaNoCoincide: "La contrasena y la confirmación no coinciden"}

    return null

  }

}
