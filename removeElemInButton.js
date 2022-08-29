//Дан следующий код:Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
/*let button = document.querySelector('#button');
let parents = document.querySelectorAll('#parent li');
button.addEventListener('click', function(){
    for (let i = 0; i < parents.length; i++){
       let li = document.createElement('li');
       li.textContent = i;
       console.log(li.innerHTML)
    }
})*/ 



//Самостоятельно, не подсматривая в мой код, решите описанную задачу.
/*let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
	elem.remove();
    event.preventDefault();
});*/ 



//Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
/*let elems = document.querySelectorAll('#elem li');

for (let elem of elems){
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';


    elem.appendChild(remove);
}*/ 



//Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
let elems = document.querySelectorAll('#table li');
let tr = document.createElement('tr');
let remove = document.createElement('a');
remove.href = '';
remove.textContent = 'remove';

for (let i = 0; i < 3; i++){
    let td = document.createElement('td');
    td.textContent = remove;
  
}
tr.appendChild(td);
