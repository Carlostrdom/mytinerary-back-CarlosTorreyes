import 'dotenv/config.js'
import '../../config/database.js'
import '../City.js'
import Itinerary from '../Itinerary.js'


let itineraries = [
    {
        userPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
        userName: "Jean Dupont",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#culture", "#art", "#wine"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da37ff"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/women/2.jpg",
        userName: "Marie Curie",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#paris", "#romantic", "#history"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da37ff"
    }

    ,
    {
        userPhoto: "https://randomuser.me/api/portraits/men/6.jpg",
        userName: "John Doe",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#skyline", "#nightlife", "#broadway"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3800"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/women/7.jpg",
        userName: "Jane Smith",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#art", "#museums", "#statueofliberty"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3800"
    },

    {
        userPhoto: "https://randomuser.me/api/portraits/men/10.jpg",
        userName: "Andy Warhol",
        price: 1,
        duration: 2,
        likes: 0,
        hashtags: ["#popart", "#studio54", "#avantgarde"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3800"
    }

    ,
    {
        userPhoto: "https://randomuser.me/api/portraits/men/11.jpg",
        userName: "Haruki Murakami",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#tokyo", "#anime", "#technology"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3801"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/12.jpg",
        userName: "Kazuo Ishiguro",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#tradition", "#temple", "#mountfuji"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3801"
    },


    {
        userPhoto: "https://randomuser.me/api/portraits/men/11.jpg",
        userName: "Haruki Murakami",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#tokyo", "#anime", "#technology"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3802"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/12.jpg",
        userName: "Kazuo Ishiguro",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#tradition", "#temple", "#mountfuji"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3802"
    }

    ,

    {
        userPhoto: "https://randomuser.me/api/portraits/men/26.jpg",
        userName: "Steve Irwin",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#wildlife", "#nature", "#safari"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3804"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/women/27.jpg",
        userName: "Nicole Kidman",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#film", "#beach", "#adventure"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3804"
    },



    {
        userPhoto: "https://randomuser.me/api/portraits/men/31.jpg",
        userName: "Leonardo da Vinci",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#art", "#renaissance", "#history"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3805"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/women/32.jpg",
        userName: "Sophia Loren",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#cinema", "#rome", "#fashion"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3805"
    },

    {
        userPhoto: "https://randomuser.me/api/portraits/women/35.jpg",
        userName: "Donatella Versace",
        price: 1,
        duration: 2,
        likes: 0,
        hashtags: ["#fashion", "#style", "#milan"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3805"
    }

    ,
    {
        userPhoto: "https://randomuser.me/api/portraits/men/36.jpg",
        userName: "Fyodor Dostoevsky",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#literature", "#culture", "#history"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3806"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/women/37.jpg",
        userName: "Anna Karenina",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#museums", "#cathedrals", "#architecture"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3806"
    }
    ,

    {
        userPhoto: "https://randomuser.me/api/portraits/women/38.jpg",
        userName: "Cleopatra",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#pyramids", "#history", "#nile"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3807"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/39.jpg",
        userName: "Tutankhamun",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#ancient", "#tomb", "#pharaoh"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3807"
    }
    ,

    {
        userPhoto: "https://randomuser.me/api/portraits/women/55.jpg",
        userName: "Frida Kahlo",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#art", "#mexicocity", "#heritage"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380a"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/56.jpg",
        userName: "Diego Rivera",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#murals", "#culture", "#revolution"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380a"
    }
    ,

    {
        userPhoto: "https://randomuser.me/api/portraits/women/55.jpg",
        userName: "Frida Kahlo",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#art", "#mexicocity", "#heritage"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3809"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/56.jpg",
        userName: "Diego Rivera",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#murals", "#culture", "#revolution"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3809"
    }
    ,
    {
        userPhoto: "https://randomuser.me/api/portraits/men/53.jpg",
        userName: "Pablo Picasso",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#art", "#cubism", "#madrid"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3808"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/54.jpg",
        userName: "Miguel de Cervantes",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#literature", "#donquixote", "#heritage"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da3808"
    },

    {
        userPhoto: "https://randomuser.me/api/portraits/women/48.jpg",
        userName: "Eva Perón",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#politics", "#culture", "#history"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380b"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/49.jpg",
        userName: "Jorge Luis Borges",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#literature", "#philosophy", "#legacy"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380b"
    },

    {
        userPhoto: "https://randomuser.me/api/portraits/men/43.jpg",
        userName: "Nelson Mandela",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#freedom", "#history", "#culture"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380c"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/44.jpg",
        userName: "Desmond Tutu",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#peace", "#heritage", "#apartheid"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380c"
    },



    {
        userPhoto: "https://randomuser.me/api/portraits/men/40.jpg",
        userName: "Confucius",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#philosophy", "#heritage", "#wisdom"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380d"
    },
    {
        userPhoto: "https://randomuser.me/api/portraits/men/41.jpg",
        userName: "Jackie Chan",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#martialarts", "#cinema", "#action"],
        comments: "in construction",
        city: "6716e9e3d0b358da68da380d"
    },


    {
        userPhoto: "https://randomuser.me/api/portraits/men/60.jpg",
        userName: "Pablo Neruda",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#poetry", "#literature", "#chile"],
        comments: "in construction",
        city: "67185883f404ac4bd17d2060"
    }

]

Itinerary.insertMany(itineraries);