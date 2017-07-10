const User = require('../models/user.model');

exports.popularRoadmaps = function (req, res) {
    // use author service to get popular and latest roadmaps
};

exports.getRoadmap = function (req, res) {
    // use author service to get roadmap by id
};

/*
  Post /students/:studentId/roadmap/:roadmapId/feedback
    Request:
        {feedback:  String, rating: Number}
*/
exports.postFeedback = function (req, res, next) {
    const githubUsername = req.params.studentId;
    const roadmapId = req.params.roadmapId;
    User.update({
        userId: githubUsername,
        id: roadmapId
    }, {
        $set: {
            feedback: req.body.feedback,
            rating: req.body.rating
        }
    }, function (err) {
        if (err) 
            return handleError(err, next);
        res.json({ success: true });
    });
};

exports.getStudentsByRoadmap = function (req, res, next) {
    const rmId = req.params.roadmapId;
    User.find({
        roadMaps: {
            $elemMatch: {
                id: rmId
            }
        }
    }, (err, results) => {
        if (err) 
            return handleError(err, next);
        res.json(results);
    });
};

exports.getUserRoadmap = function (req, res, next) {
    const rmId = req.params.studentId;
    const githubUsername = req.params.githubUsername;
    User.find({
        githubUsername: githubUsername,
        roadMaps: {
            $elemMatch: {
                id: rmId
            }
        }
    }, (err, results) => {
        if (err) 
            return handleError(err, next);
        res.json(results);
    });
};

exports.listUserRoadmaps = function (req, res, next) {
    const rmId = req.params.roadMapId;
    const githubUsername = req.params.githubUsername;
    User.find({
        githubUsername: githubUsername
    }, (err, results) => {
        if (err) 
            return handleError(err, next);
        res.json(results.roadMaps);
    });
};

function handleError(err, next) {
    // log
    next(err);
}