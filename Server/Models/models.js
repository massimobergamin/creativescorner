const { pool } = require('../db');

//Topic Models
exports.getThreads = async () => {
    const response = await pool.query(`SELECT * FROM topic_temp ORDER BY date DESC`);
    return response.rows;
}

exports.getSelectedThread = async (id) => {
    const response = await pool.query(`SELECT * FROM topic_temp WHERE id = ${id}`)
    return response.rows;
}

exports.deleteThread = async (id) => {
    try {
        pool.query("DELETE FROM topic_temp WHERE id = $1", [id])
    } catch (error) {
        response.status(500);
    }
}

//Reply Models
exports.getReplies = async () => {
    const response = await pool.query(`SELECT * FROM replies_temp`);
    return response.rows;
}


exports.deleteReply = async (id) => {
    try {
        pool.query("DELETE FROM replies_temp WHERE topicid = $1", [id])
    } catch (error) {
        response.status(500);
    }
}