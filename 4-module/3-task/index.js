function highlight(table) {
  // ваш код...

  let teachers = table.querySelectorAll('tbody tr');
  for (let teacher of teachers){

    let status = teacher.querySelector('td[data-available]');
    let gender = teacher.querySelector('td:nth-child(3)').textContent;
    let age = teacher.querySelector('td:nth-child(2)').textContent;

    if (status){
        if(status.dataset.available === 'true'){
          teacher.classList.add('available');
        } else if(status.dataset.available === 'false'){
          teacher.classList.add('unavailable');
        }
    } else {
      teacher.hidden = true;
    }
    
    if(gender === 'm'){
      teacher.classList.add('male');
    } else if (gender === 'f'){
      teacher.classList.add('female');
    }

    if(age < 18){
      teacher.style['text-decoration'] = 'line-through';
    }
  }
}
