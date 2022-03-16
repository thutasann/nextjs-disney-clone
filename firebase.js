import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBBatqRt65MxiKalLXOcPaRoPY2MeEbHh8",
    authDomain: "disney-plus-c86b2.firebaseapp.com",
    projectId: "disney-plus-c86b2",
    storageBucket: "disney-plus-c86b2.appspot.com",
    messagingSenderId: "574952850871",
    appId: "1:574952850871:web:cebb71eb9c08be819d1432"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export default { db };



// Web client ID
// 574952850871-aao3bj4t75pibbtlat9op4k54nn8lknr.apps.googleusercontent.com

// Web client secret
// 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

