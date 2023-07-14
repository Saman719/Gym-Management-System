const express = require('express');
const router = express.Router();
const Goal = require('./Model/goals-model');
const RegisteredCourse = require('./Model/registeredcourses-model');

router.post('/add', async (req, res) => {
    const { username, goal } = req.body;

    try {
        const result = await Goal.create({
            username,
            goal,
            date: new Date(),
            done: false
        });
        console.log(result);
        res.status(200).send('Goal added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding goal');
    }
});

router.get('/all/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const goals = await Goal.findAll({
            where: {
                username: username
            }
        });
        console.log(goals);
        res.status(200).send(goals);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching goals');
    }
});

router.patch('/done', async (req, res) => {
    const { id } = req.body;

    try {
        const result = await Goal.update(
            { done: true },
            { where: { ID: id } }
        );
        console.log(result);
        res.status(200).send('Goal updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating goal');
    }
});

module.exports = router;