const db = require('../db/db');

// Insert initial data into customers table
(async () => {
  try {
    await db('customers').insert({
      username: 'john-doe',
      email: 'john.doe@mail.com',
      first_name: 'John',
      last_name: 'Doe',
    });
    await db('customers').insert({
      username: 'mary-sue',
      email: 'mary.sue@mail.com',
      first_name: 'Mary',
      last_name: 'Sue',
    });
    console.log('Seeding successful');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
