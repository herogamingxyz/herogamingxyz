import db from "./firebase.js";
import { generateMod } from "./modgen/modGenerator.js";

async function startGenerator() {

    const snapshot = await db.collection("mods").get();

    console.log(`📦 Total Mods: ${snapshot.size}`);

    snapshot.forEach((doc) => {

        const mod = doc.data();

        mod.id = doc.id;

        generateMod(mod);

    });

}

startGenerator();