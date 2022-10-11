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

    const excercise = {
        passed: false,
        body: {
            equation: "4 + 5",
            answer: 9
        }
    }

    const docRef = await db.collection('users').doc(uuid).collection('excercises_arithmethic').add(excercise)
    return await docRef.update({
        timestamp: firestore.FieldValue.serverTimestamp()
    })
})

