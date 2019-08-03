export class Usuario {

  constructor(
    public nome: string,
    public cargo: string,
    public resumo: string,
    public empresa: Array<Empresa>,
    public tarefas: string,
    public habilidades: Array<Habilidades>,
    public foto: File,
    public curriculo: File,
  ) {}
}

export class Empresa {
  nome: string
  cargo: string
  inicio: Date
  fim: Date
}

export class Habilidades {
  nome: string
  nivel: number
}
