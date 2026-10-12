// geneerate temporary id: Using Math.random()
function generateId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
}
export const categories = [
    {
        id:"Beats", 
        name: "Beats"
    },
    {
        id:"Loops",
        name: "Loops"
    },
    {
        id:"Drums",
        name: "Drums"
    }
]
export const sounds = [
    {
        id: generateId(),
        title: "Fast",
        categoryId: "Beats",
        genre: ["hip-hop", "trap"],
        imageId: "fast_jern7z",
        audioUrl: "./audio/beats/trap_beat.mp3"
    },
    {
        id: generateId(),
        title: "Summer piano",
        categoryId: "Beats",
        genre: ["Afrobeat", "amapiano"],
        imageId: "summer_piano_aycqgs",
        audioUrl: "./audio/beats/SummerPiano_afrobeat_amapiano.mp3"
    },
    {
        id: generateId(),
        title: "Family",
        categoryId: "Beats",
        genre: ["trap", "hip hop", "gospel"],
        imageId: "retro_trap_hiis7w",
        audioUrl: "./audio/beats/SouthSound_Family_rap.mp3"
    },
    {
        id: generateId(),
        title: "Fear",
        categoryId: "Loops",
        genre: ["pop", "synth"],
        imageId: "fear_v0sb6e",
        audioUrl: "./audio/loops/sunset_melody_loop.mp3"   
    },
    {
        id: generateId(),
        title: "Afro pro max vol. 1",
        categoryId: "Loops",
        genre: ["afrobeat", "afro", "guitar"],
        imageId: "AFRO_PRO_MAX_VOL._1_urbldy",
        audioUrl: "./audio/loops/afrobeat_sample.mp3"
    },
    {
        id: generateId(),
        title: "Paradise",
        categoryId: "Loops",
        genre: ["guitar", "synth"],
        imageId: "PARADISE_f0qlod",
        audioUrl: "./audio/loops/ibiza_synth_guitar.mp3"
    },
    {
        id: generateId(),
        title: "Brazilian trap",
        categoryId: "Beats",
        genre: ["phonk", "brazil", "trap"],
        imageId: "BRAZ_cmpvvh",
        audioUrl: "./audio/beats/Northwave_Clasico_phonk base de funk.mp3"
    },
    {
        id: generateId(),
        title: "Like a dream",
        categoryId: "Beats",
        genre: ["trap", "new jazz", "hip hop"],
        imageId: "like_a_dream_nnnzub",
        audioUrl: "./audio/beats/Power_new_jazz_trap.mp3"
    },
    {
        id: generateId(),
        title: "Welcome to India",
        categoryId: "Beats",
        genre: ["drill", "uk drill", "hip hop"],
        imageId: "Welcome_to_India_xnk42h",
        audioUrl: "./audio/beats/Welcome_To_India.mp3"
    },
    {
        id: generateId(),
        title: "Pop Star",
        categoryId: "Loops",
        genre: ["piano", "synth"],
        imageId: "pop_star_wvaz1w",
        audioUrl: "./audio/loops/SoundLab_Piano_beginning.mp3"
    },
    {
        id: generateId(),
        title: "Oasis of hope",
        categoryId: "Loops",
        genre: ["reggaeton", "melody"],
        imageId: "Black_and_Green_Acid_Brutalist_Electronic_Music_Album_Cover_xydcwp",
        audioUrl: "./audio/loops/Siete_melodies.mp3"
    },
    {
        id: generateId(),
        title: "Bento mafia",
        categoryId: "Loops",
        genre: ["trap", "melody", "hip hop"],
        imageId: "BENTO_mafia_tkat68",
        audioUrl: "./audio/loops/Afro_Giant_Trap.mp3"
    },
    {
        id: generateId(),
        title: "MTL 4",
        categoryId: "Drums",
        genre: ["konpa", "kompa", "carribean"],
        imageId: "Pochette_CD_Album_Musique_Photo_Nature_Montagne_évasion_Inspiration_Gras_Typographie_Minimaliste_ukmsob",
        audioUrl: "./audio/drums/Mtl_konpa_drum_loop.mp3"
    },
    {
        id: generateId(),
        title: "Hyperpop trap",
        categoryId: "Drums",
        genre: ["trap", "hyperpop"],
        imageId: "hyperpop_trap_m81dk0",
        audioUrl: "./audio/drums/Sonology_Anthem_drum_trap.mp3"
    },
    {
        id: generateId(),
        title: "Lucid vol. 1",
        categoryId: "Drums",
        genre: ["trap", "hip hop"],
        imageId: "Lucid_vol.1_scftku",
        audioUrl: "./audio/drums/Afro_Giant_Trap_drum_loop.mp3"
    },
    {
        id: generateId(),
        title: "Afropiano",
        categoryId: "Drums",
        genre: ["afrobeat", "amapiano"],
        imageId: "afropiano_lfrmkz",
        audioUrl: "./audio/drums/Summer_piano_drum_loop.mp3"
    },
    {
        id: generateId(),
        title: "Outer space",
        categoryId: "Drums",
        genre: ["pop", "funk"],
        imageId: "outer_space_wvakkt",
        audioUrl: "./audio/drums/Pop_Star_funk_pop_drum_loop.mp3"
    },
    {
        id: generateId(),
        title: "Afro",
        categoryId: "Drums",
        genre: ["afrobeat", "afropop"],
        imageId: "AFROBEAT_Red_Colorful_Abstract_Art_pxaaeq",
        audioUrl: "./audio/drums/AfroWorld_afrobeat_drum_loop.mp3"
    },
];

