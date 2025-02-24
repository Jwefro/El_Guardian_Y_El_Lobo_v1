import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Inventario = {
  name: string;
  type: 'arma' | 'pocion' | 'comida';
  svg: string;
  value: number;
};
interface CharacterState {
  nombre: string;
  wolfName: string;
  sexo: 'hombre' | 'mujer';
  atributo: {
    agilidad: number;
    fuerza: number;
    vitalidad: number;
  };
  skill: (
    | 'Rastreo'
    | 'Sigilo'
    | 'Maestro en armas'
    | 'Comerciante'
    | 'Intuicion'
  )[];
  inventario: Inventario[];
  armaEquipada: Inventario | null;
  vida: number;
  vidaMaxima: number;
  economia: number;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setVida: (vida: number) => void;
  addVida: (vida: number) => void;
  removeVida: (vida: number) => void;
  setVidaMaxima: (vidaMaxima: number) => void;
  setEconomia: (economia: number) => void;
  addInventario: (item: Inventario) => void;
  removeInventario: (name: string) => void;
  setArmaEquipada: (armaEquipada: Inventario | null) => void;
  setSkill: (
    skill: (
      | 'Rastreo'
      | 'Sigilo'
      | 'Maestro en armas'
      | 'Comerciante'
      | 'Intuicion'
    )[]
  ) => void;
  setAtributo: (atributo: Partial<CharacterState['atributo']>) => void;
  setCharacter: (character: Partial<CharacterState>) => void;
}

const useStore = create<CharacterState>()(
  persist(
    set => ({
      nombre: '',
      wolfName: '',
      sexo: 'hombre',
      atributo: {
        agilidad: 0,
        fuerza: 0,
        vitalidad: 0,
      },
      armaEquipada: null,
      vida: 25, // or any default value
      vidaMaxima: 25,
      economia: 5, // or any default value
      currentPage: '/',
      skill: [],
      inventario: [],
      setNombre: nombre => set({ nombre }),
      setWolfName: wolfName => set({ wolfName }),
      setCurrentPage: currentPage => set({ currentPage }),
      setSexo: sexo => set({ sexo }),
      setSkill: skill => set({ skill }),
      setVida: vida => set({ vida }),
      addVida: vida =>
        set(state => {
          const nuevaVida = state.vida + vida;
          return {
            vida: nuevaVida > state.vidaMaxima ? state.vidaMaxima : nuevaVida,
          };
        }),
      removeVida: vida =>
        set(state => {
          const nuevaVida = state.vida - vida;
          return { vida: nuevaVida < 0 ? 0 : nuevaVida };
        }),
      setVidaMaxima: vidaMaxima => set({ vidaMaxima }),
      setEconomia: economia => set({ economia }),
      // Funciones de Inventario
      addInventario: item =>
        set(state => {
          if (state.inventario.length < 6) {
            return { inventario: [...state.inventario, item] };
          }
          return state;
        }),
      removeInventario: name =>
        set(state => {
          const index = state.inventario.findIndex(item => item.name === name);
          if (index !== -1) {
            const newInventario = [...state.inventario];
            newInventario.splice(index, 1);
            return { inventario: newInventario };
          }
          return state;
        }),
      // funcion para equipar arma
      setArmaEquipada: armaEquipada => set({ armaEquipada }),
      // funcion para cambiar atributos
      setAtributo: atributo =>
        set(state => ({
          atributo: {
            ...state.atributo,
            ...atributo,
          },
        })),
      // funcion para cambiar todos los stats
      setCharacter: character =>
        set(state => ({
          ...state,
          ...character,
          atributo: {
            ...state.atributo,
            ...character.atributo,
          },
        })),
    }),
    {
      name: 'character-storage', // nombre de la clave en localStorage
    }
  )
);

export default useStore;
