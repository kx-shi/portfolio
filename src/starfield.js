const GLYPHS = [
  {"glyph": "·", "weight": 0.05},
  {"glyph": "∗", "weight": 0.02},
  {"glyph": "⋆", "weight": 0.02},
  {"glyph": "✦", "weight": 0.03},
  {"glyph": "✧", "weight": 0.02},
  {"glyph": "✶", "weight": 0.04},
  {"glyph": "⁎", "weight": 0.03},
  {"glyph": "⊹", "weight": 0.03},
  {"glyph": "★", "weight": 0.02},
  {"glyph": "°", "weight": 0.04},
  {"glyph": "✸", "weight": 0.04},
  {"glyph": "☆", "weight": 0.04},
  {"glyph": "✯", "weight": 0.03},
  {"glyph": "　", "weight": 0.8},
];

const rowSize = 40; // no. characters per row
const rows = 20;    // no. of rows
const glyphPool = GLYPHS.flatMap(({ glyph, weight }) =>
  Array(Math.round(weight * 100)).fill(glyph)
);

export function generateStarfield() {
    var field = "";

    for(let row = 0; row < rows; row++) {
        for(let char = 0; char < rowSize; char++) {
            var glyph = glyphPool[Math.floor(Math.random() * glyphPool.length)];
            field += glyph;
        }
        field += "\n";
    }

    return field;
}