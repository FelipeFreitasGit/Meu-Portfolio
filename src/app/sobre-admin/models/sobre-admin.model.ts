export class Usuario {

  constructor(
    public id?: number,
    public nome?: string,
    public cargo?: string,
    public resumo?: string,
    public empresas?: Array<Empresas>,
    public habilidades?: Array<Habilidades>,
    public foto?: File,
    public curriculo?: File,
  ) {}
}

export class Empresas {
  public id: number;
  public nome: string;
  public cargo: string;
  public inicio: string;
  public fim: string;
  public atividades: string;
}

export class Habilidades {
  constructor(public nome?: string, public nivel?: number) {};
}

export interface NivelSkill {
  nivel: string
}
