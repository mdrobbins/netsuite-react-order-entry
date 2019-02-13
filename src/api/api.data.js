import customerListData from './data/customerListData';
import customerData from './data/customerData';
import itemData from './data/itemData';

export const getCustomer = () => customerData;

export const saveCustomer = () => ({
  "isSuccess": true,
  "result": 968,
  "elapsedSeconds": 8.177,
  "remainingUsage": 4995
});

export const searchItems = searchString => {
  const filteredItems = itemData.filter(i => {
    return i.number.toLowerCase().includes(searchString.toLowerCase())
      || i.description.toLowerCase().includes(searchString.toLowerCase())
  });
  return {
    isSuccess: true,
    result: filteredItems,
    totalCount: 2,
    elapsedSeconds: 2.234,
    remainingUsage: 950
  };
};

export const searchCustomers = searchString => {
  const filteredCustomers = customerListData.filter(c => {
    return c.companyName.toLowerCase().includes(searchString.toLowerCase())
      || c.number.toLowerCase().includes(searchString.toLowerCase())
      || c.email.toLowerCase().includes(searchString.toLowerCase())
      || c.phone.replace(/\D/g, '').includes(searchString.toLowerCase())
  });
  return {
    isSuccess: true,
    result: filteredCustomers,
    totalCount: 2,
    elapsedSeconds: 2.234,
    remainingUsage: 950
  };
};



