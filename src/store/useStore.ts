import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CharacterState {
  nombre: string;
  wolfName: string;
  sexo: 'hombre' | 'mujer';
  atributo: {
    agilidad: number;
    fuerza: number;
    vitalidad: number;
  };
  skill: ('rastreo' | 'sigilo' | 'maestro_en_armas' | 'comerciante' | 'intuicion')[];
  currentPage: string;
  setNombre: (nombre: string) => void;
  setWolfName: (wolfName: string) => void;
  setCurrentPage: (page: string) => void;
  setSexo: (sexo: 'hombre' | 'mujer') => void;
  setSkill: (
    skill: ('rastreo' | 'sigilo' | 'maestro_en_armas' | 'comerciante' | 'intuicion')[],
  ) => void;
  setAtributo: (atributo: Partial<CharacterState['atributo']>) => void;
  setCharacter: (character: Partial<CharacterState>) => void;
}

const useStore = create<CharacterState>()(
  persist(
    (set) => ({
      nombre: '',
      wolfName: '',
      sexo: 'hombre',
      atributo: {
        agilidad: 0,
        fuerza: 0,
        vitalidad: 0,
      },
      currentPage: '/',
      skill: [],
      setNombre: (nombre) => set({ nombre }),
      setWolfName: (wolfName) => set({ wolfName }),
      setCurrentPage: (currentPage) => set({ currentPage }),
      setSexo: (sexo) => set({ sexo }),
      setSkill: (skill) => set({ skill }),
      setAtributo: (atributo) =>
        set((state) => ({
          atributo: {
            ...state.atributo,
            ...atributo,
          },
        })),
      setCharacter: (character) =>
        set((state) => ({
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
    },
  ),
);

export default useStore;
