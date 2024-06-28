const { BiColor } = require("react-icons/bi");

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "my_user",
    host: "localhost",
    database: "my_database",
    password: "root",
    port: 5432,
});

//Получение всех событий
const getEvent = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM data_event ORDER BY id ASC", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

//получение всех пользователей
const getUsers = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

//получение данных о пользователе который вошел в систему
const getUserId = async (id) => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

//создание события
const createEvent = (body) => {
    return new Promise(function (resolve, reject) {
        const { title, adress, name, date, event, selectedImage, contentt, tags, organizer, linkreg } = body;
        pool.query(
            "INSERT INTO data_event (title, adress, name, datetimeassetc, event, link_img, contentt, tags, organizer, linkreg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [title, adress, name, date, event, selectedImage, contentt, JSON.stringify(tags), organizer, linkreg],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        'Мероприятие создано'
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

//регистрация пользователя
const createUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { email, password, color } = body;
        pool.query(
            "INSERT INTO users (email, password, color) VALUES ($1, $2, $3) RETURNING *",
            [email, password, color],
            (error, results) => {
                if (error) {
                    reject('Пользователь с таким Email уже существует');
                }
                if (results && results.rows) {
                    resolve(
                        'Пользователь зарегистрирован'
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

// обновления данных об участниках в определенном событии
const updateEvent = async (id, body) => {
    return await new Promise(function (resolve, reject) {
        const { participants } = body;
        pool.query(
            "UPDATE data_event SET participants = $1 WHERE id = $2 RETURNING *",
            [JSON.stringify(participants), id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        'Вы участник события'
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

//обновление данных о пользователе
const updateUser = (id, body) => {
    return new Promise(function (resolve, reject) {
        const { name, sername, nik, placejob, sait, about } = body;
        pool.query(
            "UPDATE users SET name = $1, sername = $2, nik = $3, placejob = $4, sait = $5, about = $6 WHERE id = $7 RETURNING *",
            [name, sername, nik, placejob, sait, about, id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

//обновление данных событиях в котороых участвует или участвовал пользователь
const updateUserEvents = (id, body) => {
    return new Promise(function (resolve, reject) {
        const { events } = body;
        pool.query(
            "UPDATE users SET events = $1 WHERE id = $2 RETURNING *",
            [JSON.stringify(events), id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        'аа'
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

module.exports = {
    getEvent,
    getUserId,
    createEvent,
    updateEvent,
    getUsers,
    createUser,
    updateUser,
    updateUserEvents
};