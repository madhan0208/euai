const express = require('express');
const router = express.Router();
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const Assessment = require('../Assessment');

// IMPORTANT: This object maps question IDs (q1, q2, etc.) to their full text.
// You MUST keep this updated if you change, add, or remove questions in your frontend.
// For a larger application, you might store these questions in a database.
const questionTexts = {
    // Page 1
    q1: "1. Does your AI system provide email summarization functionality?",
    q2: "2. Is this system accessible to end-users in the EU?",
    q3: "3. Does the system provide real-time responses?",
    q4: "4. Do users interact with the system primarily through text?",
    q5: "5. Does the system support critical decision-making (e.g., hiring, lending)?",
    q6: "6. Are users notified that they are interacting with an AI system?",
    q7: "7. Can users opt out of using the AI summarization feature?",
    q8: "8. Is the system integrated with other AI capabilities in the application?",
    q9: "9. Please describe the primary use case for this email summarization system.",
    q10: "10. Have you established accuracy metrics for assessing the quality of summaries?",

    // Page 2
    q11: "11. Does your system process personal data such as names and email addresses?",
    q12: "12. Are you processing peer-to-peer communication data?",
    q13: "13. Does the system use personal identifiers (names, email IDs)?",
    q14: "14. Is data anonymized or pseudonymized before model input?",
    q15: "15. Is user data retained for longer than necessary to provide the service?",
    q16: "16. Is email content stored securely during processing?",
    q17: "17. Could the system process special categories of data (health, political opinions)?",
    q18: "18. Could the system process data related to children?",
    q19: "19. Is data transferred outside the EU during processing?",
    q20: "20. Is data minimization applied (only processing necessary data)?",

    // Page 3
    q21: "21. Are you using third-party APIs (e.g., Gemini) for your model?",
    q22: "22. Do you fine-tune pre-trained models on your own data?",
    q23: "23. Can you explain the rationale behind your model architecture choice?",
    q24: "24. Do you version and track changes in model updates?",
    q25: "25. Are there fallback mechanisms for model failure?",
    q26: "26. Is the model fully documented with training data sources?",
    q27: "27. Can the model's decision-making process be explained?",
    q28: "28. Was the model tested with diverse data across different demographics?",
    q29: "29. Have you established performance baselines for the model?",
    q30: "30. Are known model limitations documented and communicated to users?",

    // Page 4
    q31: "31. Do you monitor for prompt injections or adversarial inputs?",
    q32: "32. Is the model output audited or explainable?",
    q33: "33. Can the system behavior be overridden by a human?",
    q34: "34. How often is the model retrained or updated?",
    q35: "35. Do you maintain an incident log for model misuse?",
    q36: "36. Is there continuous monitoring of the system's outputs?",
    q37: "37. Do you conduct regular security testing of the AI system?",
    q38: "38. Are there strict access controls for model parameters?",
    q39: "39. Do you have an incident response plan for AI system failures?",
    q40: "40. Have you appointed an AI compliance officer or responsible person?",

    // Page 5
    q41: "41. Have you identified potential risks (bias, hallucination) in the use case?",
    q42: "42. Is the output being used for decision-making that impacts users?",
    q43: "43. Do users have the ability to dispute or correct summaries?",
    q44: "44. Are accessibility or language biases monitored?",
    q45: "45. Have you run fairness or representational harm checks?",
    q46: "46. Is the impact assessment for this AI system documented?",
    q47: "47. Is there a mechanism for collecting user feedback on summarization quality?",
    q48: "48. Do you conduct periodic reviews of the system's impact?",
    q49: "49. Are there clear lines of accountability for the AI system's outputs?",
    q50: "50. Have users been trained on the limitations of the AI system?",
};

/**
 * Helper function to draw wrapped text on a PDF page and return the total height consumed.
 * This function breaks text into lines that fit within a specified maximum width.
 * @param {PDFPage} page The PDF page object to draw on.
 * @param {string} text The text string to draw.
 * @param {number} x The X coordinate to start drawing the text.
 * @param {number} y The Y coordinate to start drawing the text.
 * @param {PDFFont} font The font to use for the text.
 * @param {number} fontSize The font size.
 * @param {number} maxWidth The maximum width available for the text.
 * @param {RGB} color The color of the text.
 * @returns {number} The total height consumed by the drawn text.
 */
async function drawWrappedText(page, text, x, y, font, fontSize, maxWidth, color = rgb(0, 0, 0)) {
    const words = text.split(' '); // Split text into words
    let currentLine = '';
    let textHeight = 0;
    const lineHeight = fontSize * 1.2; // Line height, slightly more than font size for spacing

    for (const word of words) {
        // Test if adding the next word exceeds the maxWidth
        const testLine = currentLine === '' ? word : `${currentLine} ${word}`;
        const textWidth = font.widthOfTextAtSize(testLine, fontSize);

        if (textWidth <= maxWidth) {
            currentLine = testLine; // Add word to current line
        } else {
            // If adding the word exceeds maxWidth, draw the current line and start a new one
            page.drawText(currentLine, { x, y: y - textHeight, font, size: fontSize, color });
            textHeight += lineHeight; // Increment height for the drawn line
            currentLine = word; // Start new line with the current word
        }
    }

    // Draw the last line if it's not empty
    if (currentLine !== '') {
        page.drawText(currentLine, { x, y: y - textHeight, font, size: fontSize, color });
        textHeight += lineHeight; // Increment height for the last line
    }
    return textHeight; // Return total height consumed
}

// Change this route from '/:id' to '/' to fetch the latest
router.get('/', async (req, res) => { // Removed :id parameter
    try {
        // Find the latest assessment submitted
        const assessment = await Assessment.findOne().sort({ submittedAt: -1 }); // Sort by submittedAt descending and get one

        if (!assessment) {
            console.log(`[DOWNLOAD] No assessment found in the database.`);
            return res.status(404).json({ message: 'No assessment data available to download.' });
        }

        const answersFromDb = assessment.answers || {}; // Ensure it's an object

        console.log(`[DOWNLOAD] Fetched latest assessment. ID: ${assessment._id}`);
        console.log(`[DOWNLOAD] Answers object from DB (processed):`, JSON.stringify(answersFromDb, null, 2));

        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage();
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSize = 12;
        const pageHeight = page.getHeight();
        const pageWidth = page.getWidth();
        const margin = 50; // Page margins
        const x = margin; // Starting X coordinate for text
        const maxWidth = pageWidth - (2 * margin); // Maximum width for text content

        let y = pageHeight - margin; // Starting Y coordinate from top margin

        // Draw Title
        const titleText = 'EU AI Act Readiness Assessment - Your Answers';
        const titleFontSize = 24;
        const titleWidth = font.widthOfTextAtSize(titleText, titleFontSize);
        const titleX = (pageWidth - titleWidth) / 2; // Calculate X to center the title

        page.drawText(titleText, {
            x: titleX,
            y: y,
            font,
            size: titleFontSize,
            color: rgb(0.18, 0.31, 0.49),
        });
        y -= (titleFontSize * 1.5); // Move Y down after drawing the title, providing spacing

        let answeredCount = 0;

        // Calculate total score for the PDF
        const totalQuestions = Object.keys(questionTexts).length;
        let rawScore = 0;
        for (let i = 1; i <= totalQuestions; i++) {
            const qKey = `q${i}`;
            const rawUserAnswer = answersFromDb[qKey];
            const trimmedUserAnswer = typeof rawUserAnswer === 'string' ? rawUserAnswer.trim() : '';

            switch (trimmedUserAnswer.toLowerCase()) {
                case 'yes': rawScore += 2; break;
                case 'partially': rawScore += 1; break;
                case 'not sure': rawScore += 0.5; break;
                case 'no': /* rawScore remains same */ break;
            }
            if (trimmedUserAnswer !== '') {
                answeredCount++;
            }
        }
        const totalScorePercentage = (rawScore / (totalQuestions * 2)) * 100; // Normalize to 100%

        let complianceRiskLevel = '';
        let complianceColor = rgb(0, 0, 0); // Default to black

        if (totalScorePercentage < 40) {
            complianceRiskLevel = 'High Risk';
            complianceColor = rgb(0.937, 0.267, 0.267); // Red-500
        } else if (totalScorePercentage < 70) {
            complianceRiskLevel = 'Medium Risk';
            complianceColor = rgb(0.961, 0.62, 0.043); // Yellow-500
        } else {
            complianceRiskLevel = 'Low Risk';
            complianceColor = rgb(0.133, 0.773, 0.369); // Green-500
        }

        // Draw Compliance Score Section
        y -= 20; // Add some space before the score section
        page.drawText('Your Compliance Score:', {
            x,
            y,
            font,
            size: 16,
            color: rgb(0, 0, 0), // Black color for the label
        });
        y -= 25;

        // Draw the percentage
        page.drawText(`${Math.round(totalScorePercentage)}%`, {
            x,
            y,
            font,
            size: 36, // Larger font size for the score
            color: complianceColor, // Apply the determined color
        });
        y -= 40;

        // Draw the risk level
        page.drawText(complianceRiskLevel, {
            x,
            y,
            font,
            size: 18,
            color: complianceColor, // Apply the determined color
        });
        y -= 40; // Space after the score section

        // Now draw the answered count text immediately after the compliance score section
        page.drawText(`You answered ${answeredCount} out of ${Object.keys(questionTexts).length} questions.`, {
            x: x,
            y: y,
            font,
            size: 14,
            color: rgb(0.2, 0.2, 0.2),
        });
        y -= (fontSize * 2); // Make space for the answered count text, pushing content down for questions

        // Loop through all 50 questions
        for (let i = 1; i <= 50; i++) {
            const qKey = `q${i}`;
            const questionText = questionTexts[qKey] || `Question ${i}: (Text not found)`;

            const rawUserAnswer = answersFromDb[qKey];
            const trimmedUserAnswer = typeof rawUserAnswer === 'string' ? rawUserAnswer.trim() : '';

            const userAnswerToDisplay = trimmedUserAnswer !== '' ? trimmedUserAnswer : 'Not Answered';

            // Estimate height needed for the current question and its answer
            const estimatedHeightNeeded = (fontSize * 1.2 * 2) + 20; // Question + Answer + Spacing

            // If there's not enough space on the current page, add a new one
            if (y < margin + estimatedHeightNeeded) {
                page = pdfDoc.addPage();
                y = page.getHeight() - margin; // Reset Y for the new page
            }

            // Draw Question text, using the helper for wrapping
            const questionHeight = await drawWrappedText(page, questionText, x, y, font, fontSize, maxWidth, rgb(0, 0, 0));
            y -= questionHeight; // Move Y down by the actual height consumed by the question

            // Draw Answer text, indented and using the helper for wrapping
            const answerPrefix = 'Your Answer: ';
            const answerText = `${answerPrefix}${userAnswerToDisplay}`;
            const answerX = x + 20; // Indent the answer text
            const answerMaxWidth = maxWidth - 20; // Adjust max width for indented answer

            const answerHeight = await drawWrappedText(page, answerText, answerX, y, font, fontSize, answerMaxWidth, rgb(0.3, 0.3, 0.3));
            y -= answerHeight; // Move Y down by the actual height consumed by the answer

            y -= 15; // Additional spacing between the current question/answer block and the next
        }

        // Save the PDF document to bytes
        const pdfBytes = await pdfDoc.save();

        // Set response headers for PDF download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="assessment-answers.pdf"');
        res.send(Buffer.from(pdfBytes)); // Send the PDF bytes as response

    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ message: 'Error generating PDF', error: error.message });
    }
});

module.exports = router;
