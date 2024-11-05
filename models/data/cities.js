import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

let cities = [
    {
        name: "France",
        image: "https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg",
        continent: "Europe",
        description: "Capital of France, known for the Eiffel Tower and its artistic history.",
        capital: "Paris",
    },
    {
        name: "New York",
        image: "https://hips.hearstapps.com/hmg-prod/images/nueva-york-1521191396.jpg",
        continent: "North America",
        description: "Iconic U.S. city, famous for the Statue of Liberty and Times Square.",
        capital: "Albany (State of New York)",
    },
    {
        name: "Japan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjPyrTJVAPc9KPEkwS5yoqwHXou7LlUun1w&s",
        continent: "Asia",
        description: "Capital of Japan, a technological and cultural center of Asia.",
        capital: "Tokyo",
    },
    {
        name: "United Kingdom",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiIhx7jNez9yivxjBT1up1f0852Bvihu0yA&s",
        continent: "Europe",
        description: "Capital of the United Kingdom, famous for Big Ben and Buckingham Palace.",
        capital: "London",
    },
    {
        name: "Germany",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRCIzbkXMj8M0p5_H7nqxJ3P03fdXmljc-w&s",
        continent: "Europe",
        description: "Capital of Germany, known for its history during the Cold War and the Berlin Wall.",
        capital: "Berlin",
    },
    {
        name: "Australia",
        image: "https://wp.growproexperience.com/wp-content/uploads/2022/03/consejos-vivir-australia.jpg",
        continent: "Oceania",
        description: "Australian city famous for the Sydney Opera House and its beaches.",
        capital: "Canberra",
    },
    {
        name: "Italy",
        image: "https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg",
        continent: "Europe",
        description: "Capital of Italy, home to ancient monuments like the Colosseum.",
        capital: "Rome",
    },
    {
        name: "Russia",
        image: "https://media.timeout.com/images/105237890/750/422/image.jpg",
        continent: "Europe/Asia",
        description: "Capital of Russia, famous for the Kremlin and Red Square.",
        capital: "Moscow",
    },
    {
        name: "Egypt",
        image: "https://www.kayak.com.co/rimg/dimg/85/e5/d763bad9-city-9087-164429be177.jpg?width=1366&height=768&xhint=2760&yhint=1285&crop=true",
        continent: "Africa",
        description: "Capital of Egypt, famous for the Pyramids of Giza and its rich history.",
        capital: "Cairo",
    },
    {
        name: "Spain",
        image: "https://img2.rtve.es/v/868498/",
        continent: "Europe",
        description: "City in Spain known for Gaudí’s architecture, including the Sagrada Familia.",
        capital: "Madrid (Spain)",
    },
    {
        name: "Mexico",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCx5LEBf7RUYv0KAJK2RoKsegPRL8iM-Y4g&s",
        continent: "North America",
        description: "Capital of Mexico, famous for its culture and historic sites like Teotihuacan.",
        capital: "Mexico City",
    },
    {
        name: "Venezuela",
        image: "https://unionradio.net/wp-content/uploads/2023/08/turisjmo.jpg",
        continent: "South America",
        description: "Capital of Venezuela, located in a mountain valley near the Caribbean coast.",
        capital: "Caracas",
    },
    {
        name: "Argentina",
        image: "https://imagenes.eltiempo.com/files/image_1200_600/files/fp/uploads/2022/08/24/6306b55e8bfd7.r_d.1713-1395.jpeg",
        continent: "South America",
        description: "Capital of Argentina, famous for its European architecture and the tango.",
        capital: "Buenos Aires",
    },
    {
        name: "South Africa",
        image: "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__ed9d5c88-abd1-45b8-85f5-62f75d23beb2&w=3840&q=75",
        continent: "Africa",
        description: "South African city known for Table Mountain and its natural beauty.",
        capital: "Pretoria (administrative capital)",
    },
    {
        name: "China",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0yg56Mh0PpYhJTHlNVmqdKxIdopmmrS11Q&s",
        continent: "Asia",
        description: "Capital of China, famous for the Forbidden City and the Great Wall.",
        capital: "Beijing",
    }
];

City.insertMany(cities)