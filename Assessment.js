const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  answers: {
    // Page 1 Answers (q1 to q10)
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String,

    // Page 2 Answers (q11 to q20)
    q11: String,
    q12: String,
    q13: String,
    q14: String,
    q15: String,
    q16: String,
    q17: String,
    q18: String,
    q19: String,
    q20: String,

    // Page 3 Answers (q21 to q30)
    q21: String,
    q22: String,
    q23: String,
    q24: String,
    q25: String,
    q26: String,
    q27: String,
    q28: String,
    q29: String,
    q30: String,

    // Page 4 Answers (q31 to q40)
    q31: String,
    q32: String,
    q33: String,
    q34: String,
    q35: String,
    q36: String,
    q37: String,
    q38: String,
    q39: String,
    q40: String,

    // Page 5 Answers (q41 to q50)
    q41: String,
    q42: String,
    q43: String,
    q44: String,
    q45: String,
    q46: String,
    q47: String,
    q48: String,
    q49: String,
    q50: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Assessment', AssessmentSchema);