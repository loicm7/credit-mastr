// geneerate temporary id: Using Math.random()
function generateId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
}

export const sounds = [
    {
        id: generateId(),
        title: "Runner.mp3",
        genre: ["hip-hop", "trap", "beat"],
        imageId: "Runner_oyrwmt",
        audioUrl: "./audio/trap_beat.mp3"
    },
    {
        id: generateId(),
        title: "Waves.mp3",
        genre: ["pop", "beat"],
        imageId: "Waves_viimir",
        audioUrl: "./audio/pop_beat.mp3"
    },
    {
        id: generateId(),
        title: "Peace.mp3",
        genre: ["afrobeat", "amapiano", "beat"],
        imageId: "Peace_fh10m5",
        audioUrl: "./audio/afrobeat_beat.mp3"
    },
    {
        id: generateId(),
        title: "West Kora loop",
        genre: ["afrobeat", "african", "kora", "loop"],
        imageId: "wAfrica_ngaqlv",
        audioUrl: "./audio/afro_sample.mp3"   
    },
    {
        id: generateId(),
        title: "Afro guitar loop",
        genre: ["afrobeat", "african", "guitar", "loop"],
        imageId: "ag_o0lxmc",
        audioUrl: "./audio/afrobeat_sample.mp3"
    },
    {
        id: generateId(),
        title: "Guitar trap loop",
        genre: ["guitar", "trap", "afro", "loop"],
        imageId: "atg_dbcni8",
        audioUrl: "./audio/guitar_trap_sample.mp3"
    },
];
