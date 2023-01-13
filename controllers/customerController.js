const { deleteCustomerById } = require('../services/customerService');
const customerService = require('../services/customerService');

class CustomerController {
  async createCustomer(req, res) {
    try {
      const { username, email, firstName, lastName } = req.body;
      const id = await customerService.createCustomer(
        username,
        email,
        firstName,
        lastName
      );

      res.status(201).json({
        status: 'success',
        data: {
          data: id,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
  async getCustomers(req, res) {
    try {
      const customers = await customerService.getCustomers();
      res.status(200).json({
        status: 'success',
        results: customers.length,
        data: {
          data: customers,
        },
      });
    } catch (error) {
      console.error(err);
    }
  }
  async getCustomer(req, res) {
    try {
      const { id } = req.params;
      const customer = await customerService.getCustomerById(id);

      // No customer was found with provided id
      if (!customer) {
        return res.status(404).json({
          status: 'fail',
          message: `No customer found with the Id of ${id}`,
        });
      }

      res.status(200).json({
        status: 'success',
        data: {
          data: customer,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
  async updateCustomer(req, res) {
    try {
      if (!req.body || Object.keys(req.body).length == 0) {
        return res.status(400).json({
          status: 'fail',
          message: 'You need to proved body for updating',
        });
      }

      const { id } = req.params;
      const customer = await customerService.getCustomerById(id);
      console.log(customer);
      // No customer was found with provided id
      if (!customer) {
        return res.status(404).json({
          status: 'fail',
          message: `No customer found with the Id of ${id}`,
        });
      }

      const updatedCustomer = await customerService.updateCustomerById(
        id,
        req.body
      );

      res.status(200).json({
        status: 'success',
        data: {
          data: updatedCustomer,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
  async deleteCustomer(req, res) {
    try {
      const { id } = req.params;

      // Check if customer exists
      const customer = await customerService.getCustomerById(id);
      if (!customer) {
        return res.status(404).json({
          status: 'fail',
          message: `No customer found with the Id of ${id}`,
        });
      }

      await customerService.deleteCustomerById(id);

      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

module.exports = new CustomerController();
