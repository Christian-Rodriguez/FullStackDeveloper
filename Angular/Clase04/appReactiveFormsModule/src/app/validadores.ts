import { ValidatorFn, FormControl } from '@angular/forms';

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
}
