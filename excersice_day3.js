
var users = [
    { departmentId: 1, username: "Name 1", point: 1 },
    { departmentId: 2, username: "Name 2", point: 2 },
    { departmentId: 3, username: "Name 3", point: 3 },
    { departmentId: 3, username: "Name 4", point: 4 },
    { departmentId: 1, username: "Name 5", point: 5 },
    { departmentId: 2, username: "Name 6", point: 6 },
    { departmentId: 3, username: "Name 7", point: 7 },
    { departmentId: 1, username: "Name 8", point: 8 },
    { departmentId: 2, username: "Name 9", point: 9 }
    ],

    departments = [
    { id: 1, code: "code1.com", name: "CODER", companyId: 11 },
    { id: 2, code: "code2.com", name: "Manager", companyId: 12},
    { id: 3, code: "code3.com", name: "ProjectManager", companyId: 13}
    ],

    companies = [
    { id: 11, code: "company1", name: "ABAB" },
    { id: 12, code: "company2", name: "CDCD" },
    { id: 13, code: "company3", name: "EFEF" }
    ]

//sắp xếp user theo point tăng dần
function compare( a, b ) {
    if ( a.point < b.point ){
      return -1;
    }
    if ( a.point > b.point ){
      return 1;
    }
    return 0;
  }
  users.sort( compare );

//function result system department
function systemCompany(companies, departments, users){
    var arrCompany = [];
    
    for (var i=0; i< companies.length; i++){
        var arrDepartment = [];
        for (var j = 0; j<departments.length; j++){
            if (companies[i].id === departments[j].companyId){
                var arrUsers = [];
                for (var k = 0; k<users.length; k++){
                    if (departments[j].id === users[k].departmentId){
                        arrUsers.push({ "username": users[k].username,
                                        "point": users[k].point});
                    }
                }
                arrDepartment.push({ "departmentCode,": departments[j].code,

                                     "departmentName": departments[j].name,

                                     "users": arrUsers});
            }
        }
        arrCompany.push({

            "companyCode": companies[i].code,

            "companyName": companies[i].name,

            "departments": arrDept
        });
    }
    return arrCompany;
}

//hàm hiển thị dữ liệu
function display( systemCompany ) {
  array.forEach(function print( element ) {
      console.log( element );
  });
}


