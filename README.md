# Github Issues

Приложение для получения списка проблем (*issues*) любого публичного репозитория Github. Также можно смотреть комментарии по определенной проблеме.

Подробности в [документации](docs/README.md).

### Установка

Для запуска приложения требуется **Docker** и **Docker Compose**.

Для инициализации приложения выполнить команду:
```
make init
```

### Настройка

По-умолчанию, приложение получает проблемы репозитория [facebook/create-react-app](https://github.com/facebook/create-react-app).

Для получения данных любого другого репозитория нужно создать файл `app/.env.local` и заполнить его любыми другими значениями (автор и наименование репозитория):
```
REACT_APP_GITHUB_AUTHOR="laravel"
REACT_APP_GITHUB_REPOSITORY="laravel"
```

### Запуск

```
make up
```

Приложение доступно по адресу - http://localhost:8080

Остановка приложения:

```
make down
```

### Цель проекта

Код написан в образовательных целях на базе курса [Laracasts - Beginning React](https://laracasts.com/series/beginning-react). 
