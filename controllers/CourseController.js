

var Course = require('../models/Course');

//***add Course  */
exports.createCourse= (req, res) => {
     
    const course = {
        title:req.body.title,
        numero:req.body.numero,
        date:req.body.date,
        SubscriberId:req.body.Subscriber_Id

    };

    Course.create(course)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:err.message
            })
        })
    
}

//**get Course by id  */
exports.courseById = (req, res) => {

        const id = req.params.id;

        Course.findByPk(id)
            .then(data => {
           
                res.send(data);
           
            })
            .catch(err => {
            res.status(500).send({
                message: "Error retrieving Course with id=" + id
            });
            });

}


//***get all Courses  */
exports.getAllCourses = (req, res) => {
  
   Course.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:err.message
            })
        })
  
}

//***delete Course by id  */
exports.deleteCourse = (req, res) => {
  
   
        const id = req.params.id_course;

        Course.destroy({
            where: { id: id }
        })
            .then(data => {
            
                res.send({
                message: "Course was deleted successfully!"
                });
            
            
            })
            .catch(err => {
            res.status(500).send({
                message: "Could not delete Course with id=" + id
            });
            });

}

//****delete all Courses */

exports.deleteAllCourses = (req, res) => {
  
    
    Course.destroy({
    where: {}
  })
    .then(data => {
      res.send({ message: `Courses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Course."
      });
    });

}

//***upadte data  */
exports.updateCourse = (req, res) => {
  
      const id = req.params.course_id;

  Course.update(req.body, {
    where: { id: id }
  })
    .then(data => {
     
        res.send({
          message: "Course was updated successfully."
        });
     
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Course with id=" + id
      });
    });

}

//***search by title   */
exports.searchCourseByTitle = (req, res) => {
 
     const title = req.query.title;

    Course.findAll({ where: { title: title } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Courses."
      });
    });
}



