const {
    getScoreService,
    createScoreService,
    deleteScoreService,
    updateScoreService,
    createMultipleScoreService,
    getAVGScoreService,
    getAVGScoreByCourseService,
    getAllStudentScoreService,
    getSemesterSummaryService,
    postExcelScoreService,
} = require("../services/scoreServices");

const multer = require('multer');

const getScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const score = await getScoreService(+id);
        res.status(200).send({
            statusCode: 200,
            data: score,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const createScoreController = async (req, res) => {
    try {
        const newScore = await createScoreService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newScore,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const createMultipleScoreController = async (req, res) => {
    try {
        const newScore = await createMultipleScoreService(req.body);
        res.status(200).send({
            statusCode: 200,
            data: newScore,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const deleteScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        await deleteScoreService(id);
        res.status(200).send({
            statusCode: 200,
            message: "Successfully.",
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};
const updateScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const score = await updateScoreService(+id, req.body);
        res.status(200).send({
            statusCode: 200,
            data: score,
        });
    } catch (e) {
        console.log(e);
        res.status(404).send({
            statusCode: 404,
            "message:": "Not found.",
        });
    }
};

const getAVGScoreController = async (req, res) => {
    const { id } = req.query;
    try {
        const { scores, avgTerm1, avgTerm2, avg, type } =
            await getAVGScoreService(+id);
        res.status(200).send({
            statusCode: 200,
            data: scores,
            avgTerm1,
            avgTerm2,
            avg,
            type,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const getAVGScoreByCourseController = async (req, res) => {
    const { courseName, nameClass, semesterOne, semesterTwo } = req.query;
    try {
        const data = await getAVGScoreByCourseService(
            courseName,
            nameClass,
            semesterOne,
            semesterTwo
        );
        res.status(200).send({
            statusCode: 200,
            data: data,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": "Something went wrong.",
        });
    }
};
const getAllStudentScoreController = async (req, res) => {
    try {
        const data = await getAllStudentScoreService();
        res.status(200).send({
            statusCode: 200,
            data,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": e,
        });
    }
};
const getSemesterSummaryController = async (req, res) => {
    const { semesterOne, semesterTwo } = req.query;
    try {
        const data = await getSemesterSummaryService(semesterOne, semesterTwo);
        res.status(200).send({
            statusCode: 200,
            data: data,
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            statusCode: 500,
            "message:": e,
        });
    }
};

const postExcelScoreController = async (req, res) => {

    try {


        const upload = multer({ dest: 'uploads/' }).single('file');


    
        upload(req, res, async (error) => {

          if (error instanceof multer.MulterError) {
            // Xử lý lỗi multer
            res.status(400).send('Multer error: ' + error.message);
          } else if (error) {
            // Xử lý lỗi khác
            res.status(500).send('Error: ' + error.message);
          } else {
            // Nếu không có lỗi, gọi postExcelScoreService để xử lý dữ liệu
            const data = await postExcelScoreService(req);
            res.status(200).send({
              statusCode: 200,
              message: 'Success',
            });
          }
        });
      } catch (e) {
        res.status(400).send('No file uploaded');
      }
};
module.exports = {
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
};
