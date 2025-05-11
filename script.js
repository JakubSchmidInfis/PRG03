const zvire = {
    
    name: "Serpentini Puzzolini",
    description: "Serpentini Puzzolini je hadovité stvoření s tělem složeným z šupin a chlupů. Vydává zvuky připomínající syčení, kterými způsobuje bolest hlavy.",
    type: "Hadovec (Had + Jezevec)",
    skills: "Mírná hypnóza, jedovaté kousnutí",
    food: "Malí savci, lidé",
    image: "serpentinipuzzolini.png"
};

const jmeno = document.getElementById("jmeno");
const obrazek = document.getElementById("obrazek");
const popis = document.getElementById("popis");
const druh = document.getElementById("druh");
const dovednosti = document.getElementById("dovednosti");
const jidlo = document.getElementById("jidlo");

obrazek.src = zvire.image;
jmeno.textContent = "Jméno: " + zvire.name;
popis.textContent = "Popis: " + zvire.description;
druh.textContent = "Druh: " + zvire.type;
dovednosti.textContent = "Dovednosti: " + zvire.skills;
jidlo.textContent = "Oblíbené jídlo: " + zvire.food;
