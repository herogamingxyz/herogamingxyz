import fs from "fs";
import { createSlug } from "../utils/slug.js";

export function generateMod(mod) {

    const slug = createSlug(mod.title);

    const templatePath = new URL("../templates/mod.html", import.meta.url);

    const outputDir = new URL("../output/", import.meta.url);

    const outputPath = new URL(`../output/${slug}.html`, import.meta.url);

    fs.mkdirSync(outputDir, { recursive: true });

    let html = fs.readFileSync(templatePath, "utf8");

    html = html.replace(/{{title}}/g, mod.title || "");
    html = html.replace(/{{description}}/g, mod.description || "");
    html = html.replace(/{{image1}}/g, mod.image1 || "");
    html = html.replace(/{{image2}}/g, mod.image2 || "");
    html = html.replace(/{{image3}}/g, mod.image3 || "");
    html = html.replace(/{{installation}}/g, mod.installation || "");
    html = html.replace(/{{download}}/g, mod.download || "");
    html = html.replace(/{{credits}}/g, mod.credits || "");

    fs.writeFileSync(outputPath, html);

    console.log(`✅ Generated: ${slug}.html`);

}