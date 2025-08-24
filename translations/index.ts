import { trTranslations, TrTranslations } from './tr';
import { enTranslations } from './en';
import { deTranslations } from './de'; // Almanca çevirileri import et
import { Language } from '../types';

export const translations = {
  tr: trTranslations,
  en: enTranslations,
  de: deTranslations, // Almanca çevirileri ekle
};

// This utility type will help ensure that all keys are valid
// It creates a union of all possible dot-separated paths in the TrTranslations object.
// This is a simplified version; a more robust one might involve recursive mapped types.
type PathImpl<T, K extends keyof T> =
  K extends string
  ? T[K] extends Record<string, any>
    ? `${K}.${PathImpl<T[K], keyof T[K]> extends string ? PathImpl<T[K], keyof T[K]> : never}`
    : K
  : never;

type Path<T> = PathImpl<T, keyof T>;

export type TranslationKeys = Path<TrTranslations>;