import 'dotenv/config.js'
import '../../config/database.js'
import '../City.js'
import '../User.js'
import Itinerary from '../Itinerary.js'


let itineraries = [
    {
         
        photoItinerary:"https://www.civitatis.com/blog/wp-content/uploads/2022/07/panoramica-saint-tropez.jpg",
        activity:"Relax on the beaches of Nice",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#culture", "#art", "#wine"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aa9",
        city: "6716e9e3d0b358da68da37ff"
    },
    {
        
        photoItinerary:"https://www.estiber.com/assets/img/gallery/offers-landing-63/ofertas-esqui-alpes-franceses.jpg",
        activity:"Ski at Chamonix and Courchevel resorts",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#paris", "#romantic", "#history"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aaa",
        city: "6716e9e3d0b358da68da37ff"
    }

    ,
    {
        
        photoItinerary:"https://res.cloudinary.com/dtljonz0f/image/upload/f_auto/q_auto/v1/gc-v1/new-york-pass/attractions/gleiu2tyo5nuve80ceps?_a=BAVARSDW0",
        activity:"Statue of Liberty and Ellis Island",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#skyline", "#nightlife", "#broadway"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aab",
        city: "6716e9e3d0b358da68da3800"
    },
    {
        
        photoItinerary:"    https://assets.editorial.aetnd.com/uploads/2013/02/grand-central-gettyimages-176608565.jpg",
        activity:"Grand Central Terminal",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#art", "#museums", "#statueofliberty"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aac",
        city: "6716e9e3d0b358da68da3800"
    },
    {
        
        photoItinerary:"https://www.interviajesny.com/wp-content/uploads/central-park-nueva-york-3-1200x723.jpg",
        activity:"Central Park",
        price: 1,
        duration: 2,
        likes: 0,
        hashtags: ["#popart", "#studio54", "#avantgarde"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aae",
        city: "6716e9e3d0b358da68da3800"
    }

    ,
    {
        
        photoItinerary:"https://www.datocms-assets.com/101439/1701660938-akihabara.jpg?auto=format&fit=crop&h=800&w=1200",
        activity:" Akihabara Tokyo Japan Electronics",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#tokyo", "#anime", "#technology"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aaf",
        city: "6716e9e3d0b358da68da3801"
    },
    {
        
        photoItinerary:"https://res.cloudinary.com/jnto/image/upload/w_800,f_auto,fl_lossy,q_auto/v1/media/filer_public/46/ee/46ee4749-355b-4362-a1dc-0176faa2f70e/0000000_kitaguchi_hongu_fuji_sengen-jinja_shrine_it151_03_kk4vse",
        activity:"Mount Fuji",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#tradition", "#temple", "#mountfuji"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab0",
        city: "6716e9e3d0b358da68da3801"
    },


    {
        
        photoItinerary:"https://cdn.britannica.com/12/127112-050-F4DD3B7A/British-Museum-London.jpg",
        activity:"The British Museum",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#london", "#art", "#technology"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab1",
        city: "6716e9e3d0b358da68da3802"
    },
    {
        
        photoItinerary:"https://i.dailymail.co.uk/1s/2024/08/19/23/88702793-13759161-image-a-44_1724106532864.jpg",
        activity:"West End theaters",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#tradition", "#culture", "#history"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab2",
        city: "6716e9e3d0b358da68da3802"
    }

    ,

    {
        
        photoItinerary:"https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1586346482415-F2MFG08QPZ7CGNS0VE83/ayers-rock-travel-guide.jpg",
        activity:"Adventure to Uluru and the Red Desert",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#wildlife", "#nature", "#safari"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab3",
        city: "6716e9e3d0b358da68da3804"
    },
    {
        
        photoItinerary:"https://www.exploregroup.com.au/media/j1kmrzla/aerial-bait-reef-min.jpg?width=640&height=360&rnd=133603486001770000",
        activity:"Explore the Great Barrier Reef",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#film", "#beach", "#adventure"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab5",
        city: "6716e9e3d0b358da68da3804"
    },



    {
        
        photoItinerary:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3a10d91qacscjA_33SYo_KG95bLZAwSA5zg&s",
        activity:"Colosseum and Roman Forum",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#art", "#renaissance", "#history"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab6",
        city: "6716e9e3d0b358da68da3805"
    },
    {
        
        photoItinerary:"https://cdn-imgix.headout.com/mircobrands-content/image/bcc2ad674c17ce96eefd060aa05c8e47-Duomo%20Milan.jpg",
        activity:"Milan Cathedral (Duomo)",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#cinema", "#rome", "#fashion"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab7",
        city: "6716e9e3d0b358da68da3805"
    },

    {
        
        photoItinerary:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKcsHj2Q7KhOV2Th7_4ANv9chiqmNx9L1diroq1jZNLJz2igcydxQ6Zg8Z1SSWUGro0Cbe-lqvi1kZWmtAsgampPKnn3t1MRwNaQ_vxENhMcLMK4A4LCVnKXs02ORxiZzNTml5XYuNcKhK/s1149/Milazzo+sicilia.jpg",
        activity:"Sicily: Mediterranean Culture",
        price: 1,
        duration: 2,
        likes: 0,
        hashtags: ["#fashion", "#style", "#milan"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab8",
        city: "6716e9e3d0b358da68da3805"
    }

    ,
    {
        
        photoItinerary:"https://beaviajera.com/wp-content/uploads/2019/06/moscu-20-1024x768.jpg",
        activity:"Kremlin and Red Square",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#literature", "#culture", "#history"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab8",
        city: "6716e9e3d0b358da68da3806"
    },
    {
        
        photoItinerary:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQBT_dmXbZniDWtTfN7bIQR1_Cf_MghzSmQ&s",
        activity:"Explore St. Petersburg: The cultural capital",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#museums", "#cathedrals", "#architecture"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aa9",
        city: "6716e9e3d0b358da68da3806"
    }
    ,

    {
        
        photoItinerary:"https://historia.nationalgeographic.com.es/medio/2022/03/14/vista-de-las-tres-piramides-de-gizeh-de-derecha-a-izquierda-la-de-keops-la-de-kefren-y-la-mas-pequena-la-de-micerino_01ff21fd_800x536.jpg",
        activity:"Pyramids of Giza and the Great Sphinx",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#pyramids", "#history", "#nile"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab7",
        city: "6716e9e3d0b358da68da3807"
    },
    {
        
        photoItinerary:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/6f/55.jpg",
        activity:"Visit Luxor Explore royal tombs",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#ancient", "#tomb", "#pharaoh"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab6",
        city: "6716e9e3d0b358da68da3807"
    }
    ,

    {
        
        photoItinerary:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/16/a3/ee/atardecer-en-el-avila.jpg?w=900&h=-1&s=1",
        activity:"El Ávila National Park",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#art", "#venezuela", "#heritage"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab4",
        city: "6716e9e3d0b358da68da380a"
    },
    {
        
        photoItinerary:"https://media-cdn.tripadvisor.com/media/photo-s/0e/a7/fc/e0/sunsol-isla-caribe.jpg",
        activity:"Margaret Island",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#murals", "#culture", "#revolution"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab4",
        city: "6716e9e3d0b358da68da380a"
    }
    ,

    {
        
        photoItinerary:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoozVeg8G3HkvTH6YdUGHTf_SIEUN6fb-MA&s",
        activity:"valladolid yucatan",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#art", "#mexicocity", "#heritage"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab3",
        city: "6716e9e3d0b358da68da3809"
    },
    {
        
        photoItinerary:"https://images.squarespace-cdn.com/content/v1/5cec5b2f22943100011c72c7/1565900317814-YG8Y1VRA3E0YVMAJBDIF/zocalo.jpg",
        activity:"Zócalo and Historic Center",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#murals", "#culture", "#revolution"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab2",
        city: "6716e9e3d0b358da68da3809"
    }
    ,
    {
        
        photoItinerary:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/273px-Museo_del_Prado_2016_%2825185969599%29.jpg",
        activity:"Prado Museum",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#art", "#cubism", "#madrid"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab1",
        city: "6716e9e3d0b358da68da3808"
    },
    {
        
        photoItinerary:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/1200px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg",
        activity:"Royal Palace of Madrid",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#literature", "#donquixote", "#heritage"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18ab0",
        city: "6716e9e3d0b358da68da3808"
    },

    {
        
        photoItinerary:"https://laguiadebuenosaires.com/wp-content/uploads/2018/06/caminito-800.jpg",
        activity:"Caminito and La Boca",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#politics", "#culture", "#history"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aaf",
        city: "6716e9e3d0b358da68da380b"
    },
    {
        
        photoItinerary:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXGSRLmqRr_aTpYBSc8nKWC0NUer86vjwWA&s",
        activity:"Wine Routes",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#literature", "#philosophy", "#legacy"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aae",
        city: "6716e9e3d0b358da68da380b"
    },

    {
        
        photoItinerary:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvACA0EvQuvKdWg05Vw2xSc-rRU8GzjtYhA&s",
        activity:"Kruger National Park",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#freedom", "#history", "#culture"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aad",
        city: "6716e9e3d0b358da68da380c"
    },
    {
        
        photoItinerary:"https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg",
        activity:"Table Mountain",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#peace", "#heritage", "#apartheid"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aac",
        city: "6716e9e3d0b358da68da380c"
    },



    {
        
        photoItinerary:"https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg",
        activity:"Visit Peking (Beijing): Historical Capital",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#philosophy", "#heritage", "#wisdom"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aab",
        city: "6716e9e3d0b358da68da380d"
    },
    {
        
        photoItinerary:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/6b/5a/8e.jpg",
        activity:"live monk shows",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#martialarts", "#cinema", "#action"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aaa",
        city: "6716e9e3d0b358da68da380d"
    },


    {
        
        photoItinerary:"https://media.traveler.es/photos/654a23adca60e75ccbe0bf03/16:9/w_2560%2Cc_limit/GettyImages-860225676.jpg",
        activity:"Torres del Paine National Park",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#poetry", "#literature", "#chile"],
        comments: "in construction",
        user:"673e73fa51562c1d7af18aa9",
        city: "67185883f404ac4bd17d2060"
    }

]

Itinerary.insertMany(itineraries);