Запусти команди в терміналі і зроби окремий скріншот результату виконання кожної команди.

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/diCUgo9A9yr4PgQD3VNhWfT8410DVz

# Отримуємо контакт по id

node index.js --action="get" --id=5
https://monosnap.com/file/YF2LjOcohiwbd3MAqQAidJKCm7FKQG

# Добавялем контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/list/62ebf5cf8a2e602a1974ce0c

# Видаляємо контакт

node index.js --action="remove" --id=3
https://monosnap.com/file/0uNXAUprXi8BbqPeMp3nA9QEjP0YuB
