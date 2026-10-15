import {SqliteDatabase} from 'expo-sqlite';
//Nombre del archivo de base de datros que se crea dentro del telefono
export const DATABASE_NAME = 'gastos.db';

export async function initDatabase (db: SQLiteDatabase): Promise<void>