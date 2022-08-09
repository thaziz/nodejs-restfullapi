// Import function from Activity Model
//import { getActivitys, getActivityById, insertActivity, updateActivityById, deleteActivityById } from "";
 
const model = require("../models/activityModel.js");
// Get All Activitys
module.exports.showActivitys = (req, res) => {
    model.getActivitys((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({"status":"Success","message":"Success","data":results});
        }
    });
}
 
// Get Single Activity 
module.exports.showActivityById = (req, res) => {
    model.getActivityById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            if(results===undefined){                
                    res.json({"status":"Not Found","message":`Todo with ID ${req.params.id} Not Found`,"data":{}})
            }else{                    
                    res.json({"status":"Success","message":"Success","data":results});
            }
        }
    });
}
 
// Create New Activity
module.exports.createActivity = (req, res) => {
    const data = req.body;
    model.insertActivity(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Activity
module.exports.updateActivity = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    model.updateActivityById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{            
            if(results.affectedRows==0){
                res.json({"status":"Not Found","message":`Activity with ID ${id} Not Found`,"data":{}});
            }else{
                model.getActivityById(id, (err, results) => {
                    if (err){
                        res.send(err);
                    }else{
                        if(results===undefined){                
                                res.json({"status":"Not Found","message":`Todo with ID ${req.params.id} Not Found`,"data":{}})
                        }else{                    
                                res.json({"status":"Success","message":"Success","data":results});
                        }
                    }
                }); 
            }
        }
    });
}
 
// Delete Activity
module.exports.deleteActivity = (req, res) => {
    const id = req.params.id;

    model.deleteActivityById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            if(results.affectedRows==0){
                res.json({"status":"Not Found","message":`Activity with ID ${id} Not Found`,"data":{}});
            }else{
                res.json({"status":"Success","message":"Success","data":{}});   
            }
        }
    });
}