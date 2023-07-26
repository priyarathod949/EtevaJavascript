const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

const uniqueList1 = list1.filter((item) => !list2.includes(item));
console.log(uniqueList1);

const uniqueList2 = list2.filter((item) => !list1.includes(item));
console.log(uniqueList2);

const bothUsers = list1.filter((item) => list2.includes(item));
console.log(bothUsers);
