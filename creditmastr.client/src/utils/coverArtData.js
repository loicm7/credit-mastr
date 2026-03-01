function generateId(length = 9) {
    return Math.random().toString(36).substring(2, 2 + length);
}

export const coverArtData = [
    {
        id: generateId(),
        title: "Hip-Hop",
        imageId: "hiphopCover_g4mqro",
        audioUrl: "./audio/hiphop.mp3"
    },
    {
        id: generateId(),
        title: "Gospel",
        imageId: "gospelCover_t3nhap",
        audioUrl: "./audio/gospel.mp3"
    },
    {
        id: generateId(),
        title: "Modern Afrobeat",
        imageId: "afrobeatCover_nwkigv",
        audioUrl: "./audio/modern_afrobeat.mp3"
    },
    {
        id: generateId(),
        title: "Drill",
        imageId: "afroDrillCover_coenif",
        audioUrl: "./audio/drill.mp3"
    },
    {
        id: generateId(),
        title: "Latin",
        imageId: "latinCover_uksc8i",
        audioUrl: "./audio/latin_test.mp3"
    },
    {
        id: generateId(),
        title: "Electronic Dance",
        imageId: "edmCover_tnczlt",
        audioUrl: "./audio/edm_test.mp3"
    },
    {
        id: generateId(),
        title: "Amapiano",
        imageId: "amapianoCover_ppjt6z",
        audioUrl: "./audio/amapiano.mp3"
    },
    {
        id: generateId(),
        title: "Jazz Essentials",
        imageId: "jazzCover_geycy1",
        audioUrl: "./audio/jazz_test.mp3"

    },
    {
        id: generateId(),
        title: "R&B",
        imageId: "rnbCover_vqkkxb",
        audioUrl: "./audio/rnb_test.mp3"
    },
    {
        id: generateId(),
        title: "Modern Pop",
        imageId: "popCover_qsdg0g",
        audioUrl: "./audio/pop_test.mp3"
    },
    {
        id: generateId(),
        title: "Kompa",
        imageId: "KonpaCover_lzrvbc",
        audioUrl: "./audio/kompa.mp3"
    },
    {
        id: generateId(),
        title: "Reggae",
        imageId: "reggaeCover_w3epih",
        audioUrl: "./audio/reggae_test.mp3"
    }
];