
const express = require('express');

const router = express.Router();

const courseController = require('../controllers/CourseController')
        


/**create routes  */
     
router.post("/course",courseController.createCourse);
router.get("/course/:id",courseController.courseById);
router.get("/course",courseController.getAllCourses);
router.delete("/course",courseController.deleteAllCourses);
router.delete("/course/:id_course",courseController.deleteCourse);
router.put("/course/:course_id", courseController.updateCourse);


router.get("/search",courseController.searchCourseByTitle);




router.param('id', courseController.courseById)
router.param('course_id', courseController.updateCourse)
router.param('id_course', courseController.deleteCourse)


module.exports = router;