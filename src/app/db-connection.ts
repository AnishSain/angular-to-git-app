import mysql from 'mysql2/promise';

// Create a connection to the database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

// Function to query the database
export async function queryDatabase(query: string, params: any[] = []) {
  try {
    const [results] = await connection.execute(query, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Example usage
async function exampleUsage() {
  try {
    const results = await queryDatabase('SELECT * FROM your_table');
    console.log('Query results:', results);
  } catch (error) {
    console.error('Error executing query:', error);
  }
}

// Call the example usage function
exampleUsage();
