const db = require('../db/db');

class CustomerService {
  async getCustomers() {
    return await db.select().from('customers');
  }
  async getCustomerById(id) {
    return await db('customers').where('customer_id', id).first();
  }
  async createCustomer(username, email, firstName, lastName) {
    const [id] = await db('customers')
      .insert({
        username,
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning('customer_id');

    return id;
  }
  async updateCustomerById(id, customerBody) {
    const mapBody = {};
    if (customerBody.username) {
      mapBody.username = customerBody.username;
    }
    if (customerBody.email) {
      mapBody.email = customerBody.email;
    }
    if (customerBody.firstName) {
      mapBody.first_name = customerBody.firstName;
    }
    if (customerBody.lastName) {
      mapBody.last_name = customerBody.lastName;
    }
    return await db('customers')
      .where('customer_id', id)
      .update(mapBody)
      .returning('*');
  }
  async deleteCustomerById(id) {
    await db('customers').where('customer_id', id).del();
  }
}

module.exports = new CustomerService();
