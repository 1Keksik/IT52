const express = require("express");
const app = express();
const port = 4000;


const events_users = require("./events_users");

//конфигурация для веб-сервера
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers"
    );
    next();
});

//Получение всех событий
app.get("/", (req, res) => {
    events_users
        .getEvent()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

//получение всех пользователей
app.get("/login", (req, res) => {
    events_users
        .getUsers()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

//получение данных о пользователе который вошел в систему
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    events_users
        .getUserId(id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

//создание события
app.post('/data_event', (req, res) => {
    events_users
        .createEvent(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

//регистрация пользователя
app.post('/user', (req, res) => {
    events_users
        .createUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

// обновления данных об участниках в определенном событии
app.put("/data_event/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    events_users
        .updateEvent(id, body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

//обновление данных о пользователе
app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    events_users
        .updateUser(id, body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

//обновление данных событиях в котороых участвует или участвовал пользователь
app.put("/user/events/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    events_users
        .updateUserEvents(id, body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});