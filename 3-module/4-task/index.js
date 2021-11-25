function showSalary(users, age) {
  // ваш код...
  let usersString = '';
  let newUsers = users.filter(user => user.age <= age);
  let last = newUsers.length - 1;
  newUsers.forEach((newUser, item) =>{
    if(item == last){
      usersString += `${newUser.name}, ${newUser.balance}`;
    } else {
      usersString += `${newUser.name}, ${newUser.balance}\n`;
    }
  });
  return usersString;
}
