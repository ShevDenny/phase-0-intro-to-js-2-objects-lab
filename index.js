const employee = {
    name: 'Justin',
    streetAddress: {
        line1: '123 Alphabet Street',
        line2: 'Basement'
    },
    city: 'Jersey City',
    state: 'New Jersey',
    zipCode: '10023'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee;
 }
 function deleteFromEmployeeByKey(employee, key) {
     const deleteEmployee = Object.assign({}, employee);
     delete deleteEmployee[key];
    return deleteEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee[key];
     return employee;
 }