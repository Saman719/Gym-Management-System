const express = require('express');
const router = express.Router();
const User = require('./Model/users-model');
const Course = require('./Model/courses-model');
const RegisteredCourse = require('./Model/registeredcourses-model');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { memberId, courseId } = req.body;
    try {
        const registeredCourse = await RegisteredCourse.create({
            memberId: memberId,
            courseId: courseId,
            attended: false
        });
        res.json(registeredCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to register course' });
    }
});

router.patch('/attend/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const registeredCourse = await RegisteredCourse.findByPk(id);
        await registeredCourse.update({
            attended: true,
        });

        res.json({ success: true, message: 'Registered course attendance updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to update registered course attendance' });
    }
});

module.exports = router;