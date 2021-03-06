export class Usuario {

  constructor(
    public id?: number,
    public nome?: string,
    public cargo?: string,
    public resumo?: string,
    public empresa?: Array<Empresa>,
    public tarefas?: string,
    public habilidades?: Array<Habilidades>,
    public foto?: File,
    public curriculo?: File,
  ) {}
}

export class Empresa {
  public nome: string;
  public cargo: string;
  public inicio: Date;
  public fim: Date;
}

export class Habilidades {
  constructor(public nome?: string, public nivel?: number) {};
}

export interface NivelSkill {
  nivel: string
}
