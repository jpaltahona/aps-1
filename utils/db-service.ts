import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';

const queryUsers = `CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    doctype TEXT NOT NULL, 
    docNum TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    dirr TEXT NOT NULL,
    phone TEXT NOT NULL,
    cargo TEXT NOT NULL,
    team TEXT NOT NULL,
    subRegion TEXT NOT NULL,
    municipio TEXT NOT NULL,
    microterritorio TEXT NOT NULL,
    Ubicacion TEXT NOT NULL,
    nTerritorio TEXT NOT NULL,
    divisiongeografica TEXT NOT NULL,
    zona TEXT NOT NULL,
    hospital TEXT NOT NULL, 
    edad INTEGERNOT NULL
);`

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({name: 'aps.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase, type:string) => {  
    if(type === 'users'){
      await db.executeSql(queryUsers);
    }
};

export const getTodoItems = async (db: SQLiteDatabase, table: string): Promise<any> => {
    try {
      const todoItems: any[] = [];
      const results = await db.executeSql(`SELECT * FROM ${table}`);
      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          todoItems.push(result.rows.item(index))
        }
      });
      return todoItems;
    } catch (error) {
      return null
    }
};