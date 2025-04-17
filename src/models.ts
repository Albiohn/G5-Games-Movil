

export interface Categoria {
    id: number;
    nombre: string;
    descripcion?: string;
    imagen?: string;
  }
  
  
  export interface Juego {
    id: number | null;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number | null;
    imagen:string;
  }
  