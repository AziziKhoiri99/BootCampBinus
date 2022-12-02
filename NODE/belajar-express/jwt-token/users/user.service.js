const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('helpers/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await db.User.scope('withHash').findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.hash)))
        throw 'Username atau Password Salah'

    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    return { ...onitHash(user.get()), token };
}

async function getAll() {
    return await db.User.findAll;
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    if (await db.User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" sudah ditambahkan'
    }

    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    await db.User.create(params)
}

async function update(id, params) {
    const user = await getUser(id);

    const name = new type(arguments);
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw 'user tidak terdaftar';
    return user;
}

function onitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}