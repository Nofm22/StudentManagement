const express = require("express");
const {
    getScoreController,
    createScoreController,
    deleteScoreController,
    updateScoreController,
    createMultipleScoreController,
    getAVGScoreController,
    getAVGScoreByCourseController,
    getAllStudentScoreController,
    getSemesterSummaryController,
    postExcelScoreController,
} = require("../controllers/scoreControllers");

const scoreRouter = express.Router();

scoreRouter.get("/getScore", getScoreController);
scoreRouter.get("/avgScore", getAVGScoreController);
scoreRouter.get("/avgScoreByCourse", getAVGScoreByCourseController);
scoreRouter.post("/createScore", createScoreController);
scoreRouter.post("/createMultipleScore", createMultipleScoreController);
scoreRouter.delete("/deleteScore", deleteScoreController);
scoreRouter.put("/updateScore", updateScoreController);
scoreRouter.get("/getAllStudentScore", getAllStudentScoreController);
scoreRouter.get("/getSemesterSummary", getSemesterSummaryController);
scoreRouter.post("/postExcelScore", postExcelScoreController);
module.exports = {
    scoreRouter,
};
