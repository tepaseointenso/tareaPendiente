export interface Nota {
    titulo: string;
    estado: number;
    descripcion:string;
}

export let listaNotas:Array<Nota> = [];
export let notaActualizar:Array<Nota> = [];