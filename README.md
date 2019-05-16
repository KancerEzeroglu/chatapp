# Instructions to run the project

1. Clone project into your local machine, ( or use the zip)
2. You will have two projects `chat-ui` and `chat-api`; 
as the name implies first is the ui application has written in React, and the second one is the php backend.
3. Run PHP backend with a server, if you don't have any server you can use docker
```
cd chatapp
docker run -d -p 8080:80 --mount type=bind,source="$(pwd)/chat-api",target=/var/www/html php:apache
```
4. Run frontend with `yarn start`, I used yarn version `1.0.2` 
5. Go to `localhost:3000`, you will see a login page
6. We have 4 pre-registered users, you can login only with an id, so just write 1 to the login box.

```
1, 'Paul'
2, 'Joe'
3, 'Alice'
4, 'Bob'
```

7. After login you will see a friends page where you can click on one to chat
8. Now you can chat using the best-ever chat application :)

# Things I would do if had more time
- Learn PHP, I read a [tutorial](https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html) and tried to implement the backend, it is my first PHP project.
- Add tests to both backend and frontend
- Add extra checks on backend, I just hacked it
- Add authentication, I can use JWT tokens



