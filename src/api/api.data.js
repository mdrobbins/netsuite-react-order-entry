import customerData from './data/customerData';

export const searchCustomers = searchString => {
  const filteredCustomers = customerData.filter(c => c.companyName.toLowerCase().includes(searchString));
  return {
    isSuccess: true,
    result: filteredCustomers,
    totalCount: 2,
    elapsedSeconds: 2.234,
    remainingUsage: 950
  };
};

