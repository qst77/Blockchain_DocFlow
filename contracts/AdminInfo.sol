pragma solidity >=0.5.0 <0.6.0;

contract AdminInfoContract{

    
    struct DepartmentSctruct {
        uint departmentID;
        string departmentName;
        bool departmentStatus;
    }

    struct PositionStruct {
        uint positionID;
        string positionName;
        bool positionStatus;
    }

    struct EmployeeStruct {
        uint employeeID;
        string Surname;
        string Name;
        string MiddleName;
        string Addr;
        string Department;
        string Position;
        string Status;

    }

    struct DocumentStruct{
        uint documentID;
        string documentName;
        string documentDepartment;
        string documentHash;
        string creator;
        string documentStatus;
        string time;
    }

    struct DocumentStructRef{
        uint documentIDRef;
        uint documentIDfromDocumentStruct;
        string documentName;
        string documentDepartment;
        string documentHash;
        string creator;
        string documentStatus;
        string time;
    }


    struct DocVerification{
        uint VerificationID;
        string docName;
        string depName;
        string verificationtime;
    }

    DocVerification[] verificationslist;
    PositionStruct[] positionsList ;
    DepartmentSctruct[] departmentList;
    EmployeeStruct[] employeeList;
    DocumentStruct[] documentList;
    DocumentStructRef[] documentListRef;
   
    uint public VerificationID = 0;
    uint public documentID = 0;
    uint public employeeID = 0;
    uint public departmentID = 0;
    uint public positionID = 0;
    uint public documentIDRef = 0;



    uint[] employeeNumber;
    uint[] departmentNumber;
    uint[] positionNumber;



    function CreateDocumentRef (uint ID, string memory _name, string memory _dep, string memory _hash, string  memory _acc, string memory _stat,  string memory _time) public {
        DocumentStructRef memory newDocument = DocumentStructRef({documentIDRef: documentID, documentIDfromDocumentStruct: ID,  documentName: _name, documentDepartment: _dep, documentHash: _hash, creator:_acc, documentStatus: _stat, time: _time});
        documentListRef.push(newDocument);
        documentIDRef = documentIDRef + 1;
    }

    function CheckDocRef(uint ID) public view returns (bool){
        for (uint i = 0; i < documentIDRef; i++){
            if (documentListRef[i].documentIDfromDocumentStruct == ID){
                return true;
            }
        }
        return false;
    }

    function GetDocRefName (uint ID) public view returns (string memory){
        for (uint i = 0; i < documentIDRef; i++){
            if (documentListRef[i].documentIDfromDocumentStruct == ID){
                return documentListRef[i].documentName;
            }
        }
    }

    function GetDocID (string memory name) public view returns (uint){
        for (uint i = 0; i < documentID; i++){
            if (keccak256(abi.encode(documentList[i].documentName)) == keccak256(abi.encode(name))){
                return i;
            }
        }
    }
    function CreateDocument (string memory _name, string memory _dep, string memory _hash, string  memory _acc, string memory _stat,  string memory _time) public {
        DocumentStruct memory newDocument = DocumentStruct({documentID: documentID, documentName: _name, documentDepartment: _dep, documentHash: _hash, creator:_acc, documentStatus: _stat, time: _time});
        documentList.push(newDocument);
        documentID = documentID + 1;

        DocVerification memory newVerification = DocVerification({VerificationID: VerificationID, docName: _name, depName: _dep, verificationtime: _time});
        verificationslist.push(newVerification);
        VerificationID = VerificationID + 1;
    }
    function CheckDocumentUnique(string memory _name ) public view returns(bool){
        for (uint i = 0; i < documentID; i++){
            if (keccak256(abi.encode(documentList[i].documentName)) == keccak256(abi.encode(_name))){
                return true;
            }
        }
        return false;
    }

    function GetDocumentInfoByID (uint i) public view returns(string memory, string memory, string memory, string memory, string memory, string memory) {

                return(
                documentList[i].documentName,
                documentList[i].documentDepartment,
                documentList[i].documentHash,
                documentList[i].creator,
                documentList[i].documentStatus,
                documentList[i].time);
    }

    function GetDepartmentID(string memory _dep) public view returns (uint){
        for (uint i = 0; i < departmentID; i++){
            if (keccak256(abi.encode(departmentList[i].departmentName)) == keccak256((abi.encode(_dep)))){
                return departmentList[i].departmentID;
            }
        }
    }


    function UpdateDocStatus (string memory _name, string memory _dep, string memory _time, uint res) public {
        for (uint i = 0; i < documentID; i++){
            if (keccak256(abi.encode(documentList[i].documentName)) == keccak256(abi.encode(_name))){
                for (uint j = 0; j < departmentID; j++){
                    if (keccak256(abi.encode(departmentList[j].departmentName)) == keccak256(abi.encode(_dep))){
                        if (res == 1){
                            string memory tmp = documentList[i].documentStatus;
                            bytes (tmp)[j] = '1';
                            documentList[i].documentStatus = tmp;

                        }
                        if (res == 2){

                            string memory tmp = documentList[i].documentStatus;
                            bytes (tmp)[j] = '2';
                            documentList[i].documentStatus = tmp;

                        }else {
                                if (res == 4){
                                    documentList[i].documentStatus = "approved";
                                }  
                                if (res == 3){
                                    documentList[i].documentStatus = "rejected";
                                }

                        }
                    }
                }
            }
        }
        

        if (res == 1){
            bool checker = false;
        for (uint i = 0; i < VerificationID; i++){
            if ((keccak256(abi.encode(verificationslist[i].docName)) == keccak256(abi.encode(_name))) && ((keccak256(abi.encode(verificationslist[i].depName)) == keccak256(abi.encode(_dep))))){
                verificationslist[i].verificationtime = _time;
                checker = true;
            }
        }
        if (checker == false){
             DocVerification memory newVerification = DocVerification({VerificationID: VerificationID, docName: _name, depName: _dep, verificationtime: _time});
             verificationslist.push(newVerification);
             VerificationID = VerificationID + 1;
        }
        }


    }

    function GetVerificationsCount () public view returns (uint){
        return VerificationID;
    }

    function getVerificationInfo (uint id) public view returns (string memory, string memory, string memory){
        return( verificationslist[id].docName,
                verificationslist[id].depName,
                verificationslist[id].verificationtime);

    }

    function GetDocumentsCount() public view returns (uint) {
        return documentID;
    }


    function GetDocVerifications(string memory _name) public view returns (uint){
        for (uint i = 0; i < documentID; i++){
            if (keccak256(abi.encode(documentList[i].documentName)) == keccak256(abi.encode(_name))){

            }
        }
    }

    function CreateEmployee (
        string memory _surname,
        string memory _name,
        string memory _middlename,
        string memory _addr,
        string memory _department,
        string memory _position,
        string memory _status) public
    {
        
        EmployeeStruct memory newEmployee = EmployeeStruct({
            employeeID: employeeID, 
            Surname: _surname,
            Name: _name,
            MiddleName: _middlename,
            Addr: _addr,
            Department: _department,
            Position: _position,
            Status: _status });
        employeeList.push(newEmployee);
        employeeNumber.push(employeeID);
        employeeID = employeeID + 1;


    }

    function UpdateEmployeeInfo(
        uint id,
        string memory _surname,
        string memory _name,
        string memory _middlename,
        string memory _addr,
        string memory _department,
        string memory _position,
        string memory _status) public
    {
        employeeList[id].Surname = _surname;
        employeeList[id].Name = _name;
        employeeList[id].MiddleName = _middlename;
        employeeList[id].Addr = _addr;
        employeeList[id].Department = _department;
        employeeList[id].Position = _position;
        employeeList[id].Status = _status;
    }

    function CreatePosition(string memory _title) public{
        PositionStruct memory newPosition = PositionStruct({positionID: positionID, positionName: _title, positionStatus: true});
        positionsList.push(newPosition);
       
        positionID = positionID + 1;
    }

    function CreateDepartment(string memory _title) public{
        DepartmentSctruct memory newDepartment = DepartmentSctruct({departmentID: departmentID, departmentName: _title, departmentStatus: true});
        departmentList.push(newDepartment);
        departmentList[departmentID].departmentID = departmentID;
        departmentList[departmentID].departmentName = _title;
        departmentList[departmentID].departmentStatus = true;
        departmentID = departmentID + 1;
    }



    function DeletePositionName(string memory _name) public {
        for (uint i = 0; i < positionID; i++){
            if (keccak256(abi.encode(positionsList[i].positionName)) == keccak256(abi.encode(_name))){
                positionsList[i].positionStatus = false;
            }
        }
    }

      function DeleteDepartmentName(string memory _name) public {
        
        for (uint i = 0; i < departmentID; i++){
            if (keccak256(abi.encode(departmentList[i].departmentName)) == keccak256(abi.encode(_name))){
                departmentList[i].departmentStatus = false;
               for (uint j = i; j < departmentID-1; j++){
                    if (departmentList[j+1].departmentStatus == true){
                 uint tmp_ID = departmentList[j].departmentID;
                  string memory tmp_Name = departmentList[j].departmentName;
                
                 departmentList[j].departmentID = departmentList[j+1].departmentID;
                 departmentList[j].departmentName = departmentList[j+1].departmentName;
                 departmentList[j].departmentStatus = true;
                 departmentList[j+1].departmentID = tmp_ID;
                departmentList[j+1].departmentName = tmp_Name;
                 departmentList[j+1].departmentStatus = false;
            }
            }
           departmentID = departmentID -1;
            break;
            }
        }
        
        
    }

    function GetPositionNameFromPositionNum(uint256 _number) public view returns(string memory)
    {
        return positionsList[_number].positionName;
    }

      function GetPositionStatusFromPositionNum(uint256 _number) public view returns(string memory)
    {
        if (positionsList[_number].positionStatus == true){
            string memory tr = "true";
            return tr;
        } else {
            string memory fl = "false";
            return fl;
        }
      
    }

    function GetDepartmentNameFromDepartmentNum(uint256 _number) public view returns(string memory){
        return departmentList[_number].departmentName;
    }

     function GetDepartmentStatusFromDepartmentNum(uint256 _number) public view returns(bool){
        return departmentList[_number].departmentStatus;
    }


    function GetPositionsCount() public view returns(uint) {
       
        return positionID;
    }

    function GetDepartmentsCount() public view returns(uint){
        return departmentID;
    }

    function GetEmployeeCount() public view returns(uint){
        return employeeID;
    }

    function CheckUser (string memory _acc) public view returns(uint){
        for (uint i = 0; i < employeeID; i++){
            if (keccak256(abi.encode(employeeList[i].Addr)) == keccak256(abi.encode(_acc))){
                if (keccak256(abi.encode(employeeList[i].Status)) == keccak256(abi.encode('Сотрудник отдела'))) return 1;
                if (keccak256(abi.encode(employeeList[i].Status)) == keccak256(abi.encode('Руководитель организации'))) return 2;
                if (keccak256(abi.encode(employeeList[i].Status)) == keccak256(abi.encode('Начальник отдела'))) return 3;
            }
        }
        return 0;
    }

    function GetEmployeeInfo(uint i) public view returns(string memory, string memory, string memory, string memory, string memory, string memory, string memory){
                return (employeeList[i].Surname,
                employeeList[i].Name,
                employeeList[i].MiddleName,
                employeeList[i].Addr,
                employeeList[i].Department,
                employeeList[i].Position,
                employeeList[i].Status);
    }


    function GetPersonalInfo(string memory _acc) public view returns(uint256, string memory, string memory, string memory, string memory, string memory, string memory){
        for (uint i = 0; i < employeeID; i++){
            if (keccak256(abi.encode(employeeList[i].Addr)) == keccak256(abi.encode(_acc))){
                return (employeeList[i].employeeID, 
                        employeeList[i].Surname,
                        employeeList[i].Name,
                        employeeList[i].MiddleName,
                        employeeList[i].Department,
                        employeeList[i].Position,
                        employeeList[i].Status);
            }
        }
    }

    function GetAccountDepartment (string memory _acc) public view returns (string memory){
        for (uint i = 0; i < employeeID; i++){
            if (keccak256(abi.encode(employeeList[i].Addr)) == keccak256(abi.encode(_acc))){
                return employeeList[i].Department;
            }
        }
    }

}