const db = require('../db/db');

// Create customers table on initial build
(async () => {
  try {
    await db.schema.dropTableIfExists('customers');
    await db.schema.createTable('customers', (table) => {
      table.increments('customer_id');
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
    });
    console.log('Migration successful');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
