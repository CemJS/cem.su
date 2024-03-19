import { Store, set, get, del } from 'idb-keyval';

const dateUpdateStore = new Store('my-db', 'dateUpdate');
const countsStore = new Store('my-db', 'counts');

// Проверка и начальная инициализация хранилищ
get('country', dateUpdateStore).then(val => {
    if (!val) {
        // здесь делаем запрос в базу
        fetch('http://your-url-here')
            .then(response => response.json())
            .then(data => {
                // подставляем полученное значение из запроса
                set('country', data.country, dateUpdateStore).then(() => console.log('Set value from fetch!'));
            })       
            .catch((error) => { console.error('Error:', error); });
    }
});

get('counts', countsStore).then(val => {
    if (!val) {
        set('counts', [], countsStore).then(() => console.log('Set initial value!'));
    }
});

// Для использования:

// Установка значений
set('key', 'value', dateUpdateStore).then(() => console.log('It worked!'));
set('key', 'value', countsStore).then(() => console.log('It worked!'));

// Получение значений
get('key', dateUpdateStore).then(val => console.log('Got value:', val));
get('key', countsStore).then(val => console.log('Got value:', val));

// Удаление ключей
del('key', dateUpdateStore).then(() => console.log('Key deleted!'));
del('key', countsStore).then(() => console.log('Key deleted!'));