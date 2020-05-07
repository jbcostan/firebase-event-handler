import * as functions from 'firebase-functions';
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

"use strick";

export const onMessages = functions.firestore.document('chats/{revMessage}').onWrite((change,context)=>{
    const revMessage=change.after.data();
   // console.log(`New message ${revMessage}`)
    if(revMessage){
        const revText = revMessage.message;
        const updatedText = AddChoco(revText);

        if(revText===updatedText){
            console.log("already the same");
            return null;
        }
        return change.after.ref.update({message: updatedText})
    }
    
    else{
        return null;
    }
})

function AddChoco(text: string): string{
    const re = /chocolate/gi;
    const re2 = /plz/gi;
    const re3 = /whatz/gi;
    const re4 = /dudez/gi;
    const re5 = / u /gi;
    const re6= / ur /gi;
    const re7=/cheese/gi;
    const re8=/WTF/gi;
    const re9=/mizz/gi;
    const re10=/wuv/gi;
    return text.replace(re,"\uD83D\uDCA9").replace(re2,"please").replace(re3,"what's")
    .replace(re4,"my friend").replace(re5," you ").replace(re6," your ").replace(re7,"\uD83E\uDDC0")
    .replace(re8,"why the face").replace(re9,"miss").replace(re10,"\uD83D\uDC96")
}
