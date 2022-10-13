import * as functions from "firebase-functions";

import { initializeApp, firestore } from "firebase-admin";

const admin = initializeApp()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const generateExcercise = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError('failed-precondition', 'This action can only be performed while authenticated.')
    }

    const db = admin.firestore()

    const uuid = context.auth.uid

    const sessionInfo = {
        date: firestore.FieldValue.serverTimestamp(),
        passed: false
    }

    const bulkWriter = firestore().bulkWriter()

    const questions = [
        {
            equation: '5 + 6',
            answer: 11,
        },
        {
            equation: '11 + 7',
            answer: 18,
        }
    ]
    const sessionRef = await db.collection('users').doc(uuid).collection('sessions').add(sessionInfo)
    for (let question of questions) {
        bulkWriter.create(sessionRef.collection('questions').doc(), question)
    }
    
    bulkWriter.flush()
    return questions
})

