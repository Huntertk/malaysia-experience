import { nanoid } from 'nanoid';

//Booking Card Data
export const arasResturantCardData = [
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/5yggcB7y/IMG-20240129-WA0076.jpg",
            "https://i.postimg.cc/VkGh08Fv/9.jpg",
            "https://i.postimg.cc/bvZBQB6T/8.jpg",
            "https://i.postimg.cc/MHq5rPYg/IMG-20240129-WA0075.jpg",
        ],
        title:"Ticket to Aras Resturant",
        desc:"Make your special occasions more memorable by booking a window seat view and opting for the celebration setup, whole cake, and a flower bouquet.",
        type:"bookTypeOne",
        service:"aras-resturant",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:240,
                    child:142,
                    senior:142,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:240,
                    child:142,
                    senior:142,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["Entrance Tickets for Buffet Dinner"],
            exclusion:[
                "Parking",
                "Food and Drink",
                "Locker"
            ]
        }
    },
]

//Why Visit
export const arasResturantWhyVistData = [
    {
        id: nanoid(),
        title: "Exceptional Dining Experience",
        desc:"Delight in a one-of-a-kind culinary journey as the restaurant gracefully revolves, presenting a captivating 360-degree panorama of Kuala Lumpur's city scape.",
        imgUrl:"https://i.postimg.cc/5yggcB7y/IMG-20240129-WA0076.jpg"
    },
    {
        id: nanoid(),
        title: "Enchanting Atmosphere",
        desc:"Immerse yourself in an interior design reminiscent of a futuristic spaceship, crafting a mesmerizing and unforgettable ambiance akin to dining amidst the celestial stars.",
        imgUrl:"https://i.postimg.cc/BQQbJT73/2.jpg"
    },
    {
        id: nanoid(),
        title: "Gastronomic Delights",
        desc:"Indulge in a sumptuous Hi-Tea Buffet prepared by culinary experts, showcasing the best of Malay cuisine with premium ingredients.",
        imgUrl:"https://i.postimg.cc/2yHz1t9D/9.jpg"
    },
    {
        id: nanoid(),
        title: "Culinary Excellence",
        desc:"Savor a delectable Hi-Tea Buffet meticulously crafted by skilled culinary artisans, showcasing the finest elements of Malay cuisine with premium, handpicked ingredients.",
        imgUrl:"https://i.postimg.cc/TYwdzRhY/10.jpg"
    },
]
