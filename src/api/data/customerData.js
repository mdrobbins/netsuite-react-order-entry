const customerData = {
  "isSuccess": true,
  "result": {
    "id": 968,
    "number": "CUS00000469",
    "companyName": "DataTek Software",
    "email": "mikedrobbins@gmail.com",
    "phone": "8587742746",
    "comments": "This is a test comment",
    "balance": 12345.67,
    "daysoverdue": 45,
    "salesRep": {
      "id": -5,
      "name": "Mike Robbins"
    },
    "addresses": [{
      "id": 1,
      "name": "10601 Gandy Blvd N #2402",
    }, {
      "id": 2,
      "name": "11936 Tivoli Park Row #1"
    }],
    "orders": [{
      "id": 944,
      "number": "SO0000179",
      "date": "6/30/2012",
      "status": "Billed",
      "total": 10255.31,
      "trackingNumbers": []
    }, {
      "id": 901,
      "number": "SO0000279",
      "date": "6/13/2012",
      "status": "Pending Fulfillment",
      "total": 1147.15,
      "trackingNumbers": ["1ZYA95390396319198", "1ZYA95390398888981"]
    }]
  },
  elapsedSeconds: 2.234,
  remainingUsage: 950
};

export default customerData;