import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('contacts.db');

const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);',
      [],
      (_, result) => {
        console.log('Table created successfully');
      },
      (_, error) => {
        console.error('Error creating table:', error);
      }
    );
  });
};

const insertContact = (name, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO contacts (name) VALUES (?);',
      [name],
      (_, result) => {
        callback(result.insertId);
      },
      (_, error) => {
        console.error('Error inserting contact:', error);
      }
    );
  });
};

const getAllContacts = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM contacts;',
      [],
      (_, result) => {
        callback(result.rows._array);
      },
      (_, error) => {
        console.error('Error retrieving contacts:', error);
      }
    );
  });
};

export { initializeDatabase, insertContact, getAllContacts };
