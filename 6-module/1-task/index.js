/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
// console.clear();

export default class UserTable {

  constructor(rows) {
    
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
    <thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
    </thead>
    <tbody>

        ${rows.map(row => `
        <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button class="delete">X</button></td>
        </tr>`).join('')}
    </tbody>`;

    this.elem.addEventListener('click', (e) => {
      const deleteButton = e.target.closest('.delete');
      const parentTr = deleteButton.closest('tr');
      
      if (!deleteButton) {
        return;
      }
      
      parentTr.remove();
    });
  
  }
  
}
