sudo apt install postgresql postgresql-contrib

1) sudo -u postgres psql postgres
2) \password postgres (например: 123456)
3) create user user_name with password 'password';
    alter role user_name set client_encoding to 'utf8';
    alter role user_name set default_transaction_isolation to 'read committed';
    alter role user_name set timezone to 'UTC';
4) create database django_db owner user_name;
5) \q
6) ./manage.py migrate
./manage.py makemigrations
7)  psql django_db -c "GRANT ALL ON ALL TABLES IN SCHEMA public to user_name;"
 psql django_db -c "GRANT ALL ON ALL SEQUENCES IN SCHEMA public to user_name;"
 psql django_db -c "GRANT ALL ON ALL FUNCTIONS IN SCHEMA public to user_name;"
 Видно где то накосячил, только это помогло убрать ошибки миграции.
 все зависимости можно установить командой pip install -r requirements.txt кроме этих двух, их не пробовал, лучше вручную.
 8) Для корректной работы нужны пользователи с никами 'Cmn001' и 'Cmn002', эти ники используются при проверке в файле views.py available_model.

Также иной пользователь, по умолчанию Atl должен иметь статус персонала. is_staff. По задумке все пользователи добавляются из админки. Адрес: /admin
 для создания администратора необходимо запустить команду: ./manage.py createsuperuser далее по инструкциям.
все настройки начиная с секретного ключа проекта и заканчивая логином и паролем базы данных находятся в файле observation/setting.py
