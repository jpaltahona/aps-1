import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';

export const queryUsers = `CREATE TABLE IF NOT EXISTS usuarios (
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
    edad INTEGER NOT NULL
);`

export const queryRedPrestadora = `CREATE TABLE IF NOT EXISTS redPrestadora (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT NOT NULL,
  doctype TEXT NOT NULL, 
  docNum TEXT NOT NULL,
  divisiongeografica TEXT NOT NULL,
  dirr TEXT NOT NULL,
  rol TEXT NOT NULL,
  nameDos TEXT NOT NULL,
  doctypeDos TEXT NOT NULL, 
  docNumDos TEXT NOT NULL,
  genero  TEXT NOT NULL,
  phone TEXT NOT NULL
);`
enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({name: 'aps.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase, type:string) => {  
    if(type === 'users'){
      await db.executeSql(queryUsers);
    }else if(type === 'redPrestadora'){
      await db.executeSql(queryRedPrestadora);
    }
};

export const getTodoItems = async (db: SQLiteDatabase, query: string): Promise<any> => {
  try {
    const todoItems: any[] = [];
    const results = await db.executeSql(query);
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

export const saveItems = async (db: SQLiteDatabase, i: any,) => {
  const insertQuery =`INSERT OR REPLACE INTO usuarios(doctype, docNum, name, email, dirr, phone, cargo, team, subRegion, municipio, microterritorio, Ubicacion, nTerritorio, divisiongeografica, zona, hospital, edad ) 
  values('${i.doctype}','${i.docNum}','${i.name}','${i.email}','${i.dirr}','${i.phone}','${i.cargo}','${i.team}','${i.subRegion}','${i.municipio}','${i.microterritorio}','${i.Ubicacion}','${i.nTerritorio}', '${i.divisiongeografica}', '${i.zona}','${i.hospital}', ${i.edad} );`;
  return db.executeSql(insertQuery);
};

export const saveRed = async (db: SQLiteDatabase, i: any,) => {
  const insertQuery =`INSERT OR REPLACE INTO redPrestadora(name, doctype, docNum, divisiongeografica, dirr, rol, nameDos, doctypeDos, docNumDos, genero, phone) 
  values('${i.name}','${i.doctype}','${i.docNum}','${i.divisiongeografica}','${i.dirr}','${i.rol}','${i.nameDos}','${i.doctypeDos}','${i.docNumDos}','${i.genero}','${i.phone}' );`;
  return db.executeSql(insertQuery);
};

export const searchData = async (db: SQLiteDatabase, table: string, search:string) => {
  const todoItems: any[] = [];
  const insertQuery =`SELECT id, name, microterritorio, Ubicacion, nTerritorio  FROM ${table}
  WHERE name LIKE '%${search}%' OR docNum LIKE '%${search}%';`;
  const results = await db.executeSql(insertQuery);
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      todoItems.push(result.rows.item(index))
    }
  });
  return todoItems;
};