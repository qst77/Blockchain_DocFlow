
        var contract;
        var ContractInstance;
        var localWeb3;
        var ContractAddress;
        var ContractABI;
        var id = 0;
        var ContractInstance2;
        var ContractAddress2;
        var ContractABI2;
        var contract2;
        var nameDoc;
        var docID = 0;
  
        var statfordoc = '0';

        var k = 0;




window.addEventListener('load', function(){
if (typeof web3 !== 'undefined'){
localWeb3 = new Web3 (web3.currentProvider);
                ContractAddress = '0x0563A04a471257017f5807F7DBF376e93e1967AE';
                ContractABI =[
                  {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor",
                    "signature": "constructor"
                  },
                  {
                    "constant": true,
                    "inputs": [],
                    "name": "getValue",
                    "outputs": [
                      {
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function",
                    "signature": "0x20965255"
                  },
                  {
                    "constant": true,
                    "inputs": [],
                    "name": "getAdmin",
                    "outputs": [
                      {
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function",
                    "signature": "0x6e9960c3"
                  },
                  {
                    "constant": false,
                    "inputs": [
                      {
                        "name": "_val",
                        "type": "uint256"
                      }
                    ],
                    "name": "setValue",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "signature": "0x55241077"
                  }
                ];


    Contract = localWeb3.eth.contract(ContractABI);
    ContractInstance = Contract.at(ContractAddress);
   // var adminAddress = ContractInstance.getAdmin(function (error, result){});



    ContractAddress2 = '0x5924d72807aA40e53A3c3535A068851AC46B8Fa0';
                ContractABI2 = [
    {
      "constant": true,
      "inputs": [],
      "name": "departmentID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1b28e912"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "employeeID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9cd37bf0"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "VerificationID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc9e57f85"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "positionID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xce05f8c7"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "documentID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf3128106"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "documentIDRef",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xfbcdcb39"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ID",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_dep",
          "type": "string"
        },
        {
          "name": "_hash",
          "type": "string"
        },
        {
          "name": "_acc",
          "type": "string"
        },
        {
          "name": "_stat",
          "type": "string"
        },
        {
          "name": "_time",
          "type": "string"
        }
      ],
      "name": "CreateDocumentRef",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x52172885"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "CheckDocRef",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd1a6a352"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "GetDocRefName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9d34ffef"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "name": "GetDocID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xda0a03fe"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_dep",
          "type": "string"
        },
        {
          "name": "_hash",
          "type": "string"
        },
        {
          "name": "_acc",
          "type": "string"
        },
        {
          "name": "_stat",
          "type": "string"
        },
        {
          "name": "_time",
          "type": "string"
        }
      ],
      "name": "CreateDocument",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x44602de8"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "CheckDocumentUnique",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x05e566c7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "GetDocumentInfoByID",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x93b112eb"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_dep",
          "type": "string"
        }
      ],
      "name": "GetDepartmentID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3d5d11df"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_dep",
          "type": "string"
        },
        {
          "name": "_time",
          "type": "string"
        },
        {
          "name": "res",
          "type": "uint256"
        }
      ],
      "name": "UpdateDocStatus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xeb814f98"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GetVerificationsCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc72d8e0b"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getVerificationInfo",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9cc3fe74"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GetDocumentsCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xcd496b2c"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "GetDocVerifications",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x7d85547e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_surname",
          "type": "string"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_middlename",
          "type": "string"
        },
        {
          "name": "_addr",
          "type": "string"
        },
        {
          "name": "_department",
          "type": "string"
        },
        {
          "name": "_position",
          "type": "string"
        },
        {
          "name": "_status",
          "type": "string"
        }
      ],
      "name": "CreateEmployee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf273a0ba"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "_surname",
          "type": "string"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_middlename",
          "type": "string"
        },
        {
          "name": "_addr",
          "type": "string"
        },
        {
          "name": "_department",
          "type": "string"
        },
        {
          "name": "_position",
          "type": "string"
        },
        {
          "name": "_status",
          "type": "string"
        }
      ],
      "name": "UpdateEmployeeInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x27b05d6f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_title",
          "type": "string"
        }
      ],
      "name": "CreatePosition",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x9092c060"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_title",
          "type": "string"
        }
      ],
      "name": "CreateDepartment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x9472cc28"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "DeletePositionName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb3eb33c0"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "DeleteDepartmentName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4c0c206c"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "GetPositionNameFromPositionNum",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8f4539a2"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "GetPositionStatusFromPositionNum",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc870ccaa"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "GetDepartmentNameFromDepartmentNum",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x84b61ecd"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "GetDepartmentStatusFromDepartmentNum",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc0799fb2"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GetPositionsCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6c49357a"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GetDepartmentsCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2f069a00"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GetEmployeeCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x78f66b75"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_acc",
          "type": "string"
        }
      ],
      "name": "CheckUser",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa52ad802"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "GetEmployeeInfo",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5a2d7aac"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_acc",
          "type": "string"
        }
      ],
      "name": "GetPersonalInfo",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5f76cf77"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_acc",
          "type": "string"
        }
      ],
      "name": "GetAccountDepartment",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc64a85a7"
    }
  ];


    Contract2 = localWeb3.eth.contract(ContractABI2);
    ContractInstance2 = Contract2.at(ContractAddress2);

/*
ContractInstance2.CreatePosition('k', function(error, result) {
                            console.error (error);
                    });*/


    //ContractInstance.getValue(function(error, result){});
        
    //localWeb3.eth.getCoinbase(function(err, account) {
     // if (err === null) {
       /*document.getElementById('accountAddress').innerText = account;*/
        
    //  }
    //});



    console.log('Metamask found!');


} else{console.log('No web3? You should consider trying MetaMask!')}})














