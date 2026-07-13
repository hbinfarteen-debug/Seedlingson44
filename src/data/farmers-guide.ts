export interface FarmersGuide {
  plantingSeason: string;
  watering: string;
  soilSunlight: string;
  pests: string[];
  proTip: string;
}

export const farmersGuides: Record<string, FarmersGuide> = {
  "cauliflower": {
    plantingSeason:
      "**February–April** for a winter harvest (transplant in late summer). Avoid peak summer heat; cauliflower is sensitive to bolting in high temperatures.",
    watering:
      "**Every 2–3 days** in dry weather, early morning. Keep soil consistently moist; irregular watering causes buttoning (tiny heads). Drip irrigation on the soil surface works best.",
    soilSunlight:
      "Rich, well-drained loamy soil with plenty of compost. pH 6.0–7.0. **Full sun**: at least 6 hours daily. Heavy feeder; prepare beds with well-rotted manure a week before transplanting.",
    pests: [
      "Cabbage aphids: clusters on young leaves",
      "Cutworms: chew stems at soil level",
      "Downy mildew: purple patches on leaves in cool damp weather",
    ],
    proTip:
      "Blanch the head by tying outer leaves over it once the curd is tennis-ball-sized. This keeps it pure white and tender, a market-gardener trick that boosts visual quality.",
  },

  "tomatoes": {
    plantingSeason:
      "**August–November** (spring after last frost) for a summer harvest. A second window **January–February** works for an autumn crop. Tomatoes love Bulawayo's warm days.",
    watering:
      "**Daily** during dry spells, early morning only (6–9 AM). Drip irrigation is ideal; wet foliage promotes blight. Reduce watering as fruit ripens for sweeter tomatoes.",
    soilSunlight:
      "Well-drained loamy or sandy-loam soil, pH 5.5–6.8. **Full sun**: minimum 6–8 hours direct light. Add compost and a handful of kraal manure per planting hole.",
    pests: [
      "Early blight: dark spots with concentric rings on older leaves",
      "Red spider mites: yellow stippling on leaves, fine webbing",
      "Tomato fruitworm: tunnels into ripening fruit",
    ],
    proTip:
      "Bury two-thirds of the stem when transplanting. Roots will form along the buried section, giving you a stronger, more drought-resistant plant with a bigger root system.",
  },

  "strawberries": {
    plantingSeason:
      "**March–April** (autumn) for fruit the following spring. Alternatively **August–September** for a summer crop. Avoid mid-summer planting; heat stresses young runners.",
    watering:
      "**Daily** during hot weather, every second day in cool weather. Water at soil level in the morning. Strawberries hate wet leaves; they rot quickly.",
    soilSunlight:
      "Slightly acidic, well-drained sandy-loam soil, pH 5.5–6.5. Raised beds improve drainage. **Full sun** for sweet fruit; they tolerate **partial shade** but yields drop.",
    pests: [
      "Slugs and snails: eat holes in ripening fruit near the ground",
      "Powdery mildew: white powder on leaves in humid conditions",
      "Strawberry bud weevil: buds dry up without opening",
    ],
    proTip:
      "Mulch with clean straw or plastic sheeting to keep fruit off the soil. This stops rot, deters slugs, and keeps your strawberries clean and market-ready.",
  },

  "covo": {
    plantingSeason:
      "**August–October** (spring) or **January–March** (summer). Covo is remarkably heat-tolerant; it grows through most of the year in Bulawayo. Avoid only the coldest winter weeks.",
    watering:
      "**Twice a week** in moderate weather, **every other day** during hot dry spells. Morning watering. Covo is fairly drought-tolerant once established.",
    soilSunlight:
      "Grows in a wide range of soils but prefers fertile, well-drained loam. pH 6.0–6.8. **Full sun** to **partial shade**: very adaptable. Add compost before planting.",
    pests: [
      "Cabbage aphids: clusters under leaves",
      "Flea beetles: tiny holes shot through young leaves",
      "Bagworms: caterpillar bags hanging on stems",
    ],
    proTip:
      "Harvest outer leaves first, leaving the central growing point intact. This gives you a cut-and-come-again supply for months; one planting can feed a family all season.",
  },

  "onions": {
    plantingSeason:
      "**February–April** (late summer to autumn) for winter bulb development. Onions are day-length sensitive; Texas Grano is a short-day variety, perfect for Zimbabwe's winter photoperiod.",
    watering:
      "**Twice weekly** during bulb formation, reduce to **once a week** as bulbs mature. Stop watering completely 2–3 weeks before harvest for better storage.",
    soilSunlight:
      "Light, well-drained sandy-loam soil, pH 6.0–6.8. **Full sun** essential: onions bulb poorly in shade. Raised beds prevent waterlogging on heavy clay soils.",
    pests: [
      "Onion thrips: silver-white streaks on leaves, stunted bulbs",
      "Onion maggot: wilting seedlings, tunnels in bulbs",
      "Purple blotch: purple-brown lesions on leaves in wet weather",
    ],
    proTip:
      "Once tops start yellowing and falling over, bend them down by hand. Leave bulbs in the ground for 10–14 days to cure, then lift and dry in a shaded, airy spot. Properly cured onions store for months.",
  },

  "cabbages": {
    plantingSeason:
      "**February–April** (autumn) for winter heads, or **August–September** (spring) for early summer harvest. Cabbage does well in Bulawayo's cool winter months.",
    watering:
      "**Every 2–3 days**: cabbage is a heavy drinker. Consistent moisture prevents heads from splitting. Water at the base in the morning.",
    soilSunlight:
      "Fertile, well-drained loam with lots of organic matter. pH 6.0–6.8. **Full sun**. Dig in well-rotted manure a week before transplanting. Heavy feeder.",
    pests: [
      "Cabbage white butterfly caterpillars: chew large holes in leaves",
      "Black rot: yellow V-shaped lesions at leaf edges",
      "Clubroot: swollen, distorted roots, wilting in heat",
    ],
    proTip:
      "Plant deeply: bury the stem up to the first true leaves. Firm the soil well around each transplant to stop cutworms and encourage strong root anchorage.",
  },

  "rape": {
    plantingSeason:
      "**August–March**: rape grows quickly in warm to hot weather. Succession-plant every 2–3 weeks for a continuous supply. Avoid heavy winter frosts.",
    watering:
      "**Twice a week** in moderate weather, **every other day** during hot dry spells. Keep soil moist but not waterlogged. Water in the morning.",
    soilSunlight:
      "Loamy or sandy-loam soil enriched with compost. pH 6.0–7.0. **Full sun** for fastest growth but tolerates **light shade**.",
    pests: [
      "Aphids: cluster on new growth and flower buds",
      "Flea beetles: tiny round holes in young leaves",
      "Damping off: seedlings collapse at soil level",
    ],
    proTip:
      "Harvest young: pick leaves when they're hand-sized for the mildest flavour. Regular harvesting encourages bushier growth and delays bolting.",
  },

  "tsunga": {
    plantingSeason:
      "**August–March**. Tsunga (mustard greens) grows rapidly in warm conditions. Direct-sow or transplant. Succession-plant every 2 weeks for continuous harvest.",
    watering:
      "**Twice a week**, more often in hot dry weather. Morning watering. Once established, tsunga is fairly drought-tolerant.",
    soilSunlight:
      "Wide soil tolerance but prefers fertile, well-drained loam. pH 6.0–7.0. **Full sun** is best; growth slows in shade.",
    pests: [
      "Aphids: attack young flower heads and tender leaves",
      "Flea beetles: riddle young leaves with small holes",
      "Caterpillars: chew irregular holes in leaves",
    ],
    proTip:
      "Tsunga grows so fast you can sow seeds directly in the garden and start harvesting in just 3–4 weeks. Use it as a green manure cover crop too: dig plants in before flowering to enrich your soil.",
  },

  "kale": {
    plantingSeason:
      "**February–April** (autumn) for winter harvest, or **August–September** (spring). Kale loves Bulawayo's cool winters and becomes sweeter after a light frost.",
    watering:
      "**Twice weekly**: kale is fairly drought-tolerant once established. Water in the morning at soil level. Mulch around plants to retain moisture.",
    soilSunlight:
      "Fertile, well-drained loam, pH 5.5–6.8. Enrich with compost before planting. **Full sun** for best yields; tolerates **partial shade**.",
    pests: [
      "Cabbage aphids: grey-green clusters under leaves",
      "Slugs: ragged holes in older leaves near the ground",
      "Downy mildew: yellow patches on upper leaf surfaces",
    ],
    proTip:
      "Kale is frost-hardy; cold weather actually improves its flavour by converting starches to sugars. Harvest from the bottom up, taking the oldest leaves first, and the plant will keep producing for months.",
  },

  "beetroot": {
    plantingSeason:
      "**August–October** (spring) or **February–April** (autumn). Beetroot bolts in extreme heat, so avoid November–January planting in Bulawayo.",
    watering:
      "**Twice weekly**, consistently. Irregular watering causes woody, cracked roots. Water in the morning. Keep soil evenly moist during root formation.",
    soilSunlight:
      "Loose, well-drained sandy-loam free of stones and clods. pH 6.0–7.0. **Full sun**. Remove rocks before planting to prevent misshapen roots.",
    pests: [
      "Leaf miners: serpentine tunnels inside leaves",
      "Cutworms: sever stems at soil level",
      "Cercospora leaf spot: round brown spots with purple borders",
    ],
    proTip:
      "Thin seedlings to 8–10 cm apart once they're 5 cm tall. Crowded beetroot won't bulb properly. The thinnings are edible: use the baby leaves in salads while you wait for the roots.",
  },

  "spinach": {
    plantingSeason:
      "**August–October** (spring) or **February–April** (autumn). Fordhook Giant Swiss chard handles Bulawayo's heat better than true spinach. Avoid heavy frost at establishment.",
    watering:
      "**Twice a week**: consistent moisture keeps leaves tender. Water in the morning. Mulch around the base to keep the soil cool and reduce evaporation.",
    soilSunlight:
      "Rich, well-drained loamy soil, pH 6.0–7.0. Add compost before planting. **Full sun** to **partial shade**: very adaptable. Partial shade helps prevent bolting in hot weather.",
    pests: [
      "Aphids: clusters on tender new growth",
      "Leaf miners: winding tunnels inside leaves",
      "Slugs: irregular holes in lower leaves",
    ],
    proTip:
      "Harvest outer leaves from the bottom up, leaving the centre to keep growing. One plant can produce for 3–4 months. Cut leaves with scissors to avoid damaging the crown.",
  },
};

export function getFarmersGuide(productId: string): FarmersGuide | undefined {
  return farmersGuides[productId];
}
