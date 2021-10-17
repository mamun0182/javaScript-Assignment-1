var student = {id:1, phone:2, name:'Mamun'};
var student2 = {id:2, phone:3, name:'Abdullah'};
/**console.log(student);
console.log(student2); */

//var phoneNo = student.phone;
/**var phoneNo = student['phone'];
console.log(phoneNo); */
var phoneProName = 'phone';
var phoneNo = student[phoneProName];
console.log(phoneNo);

//update information
//student2.phone = 100;
//student2['phone'] = 200;
student2[phoneProName] = 300;
console.log(student2);
