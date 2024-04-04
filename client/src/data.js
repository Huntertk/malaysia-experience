import { nanoid } from 'nanoid';

export const splashManiaCardData = [
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/htdDCsFR/splashmania-newtagline-2022-2.png",
            "https://i.postimg.cc/6688YC4Y/FB-IMG-1672326767007.jpg",
            "https://i.postimg.cc/v8CcjDWM/FB-IMG-1672326769274.jpg",
            "https://i.postimg.cc/hPxfqgrm/FB-IMG-1672326773605.jpg",
            "https://i.postimg.cc/fRfyJK1T/FB-IMG-1672326776017.jpg",
            "https://i.postimg.cc/3ww8WHgn/FB-IMG-1675571092838.jpg",
            "https://i.postimg.cc/Jzx71hBs/FB-IMG-1675571102131.jpg"
        ],
        title:"Ticket to Spalash Mania Waterpark at Gamuda Cove Selangor",
        desc:"Experience the ultimate thrills with your loved ones on 39 exciting water slides and rides at SplashMania waterpark.",
        type:"bookTypeOne",
        service:"splash-mania",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:103,
                    child:85,
                    senior:85,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:103,
                    child:85,
                    senior:85,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["Entrance Tickets"],
            exclusion:[
                "Parking",
                "Food and Drink",
                "Locker"
            ]
        }
    },
]

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

export const splashmaniaWhyVistData = [
    {
        id: nanoid(),
        title: "Treasure Tower",
        desc:"A colossal slide combination that seamlessly merges multiple flumes and splash buckets for an exhilarating experience.",
        imgUrl:"https://i.postimg.cc/vHNs5xSx/14-Treasure-Tower-2023-01-27-041251-xgwt-removebg-preview.png"
    },
    {
        id: nanoid(),
        title: "Splash Sploosh",
        desc:"An engaging water fountain splash pad designed for enjoyment by both kids and adults alike.",
        imgUrl:"https://i.postimg.cc/sgGRmft6/23-Splash-Sploosh-2023-01-27-041654-oyas-removebg-preview.png"
    },
    {
        id: nanoid(),
        title: "Ravage River",
        desc:"Embark on a journey through diverse ride elements with attractions like Savage Ravage, Secret Lair, Donut Rapids, Bubbly Dip, Monsoon, Pinnacle Creek, Rain Shooters, Happy Feet, and the Wave Ball Pool.",
        imgUrl:"https://i.postimg.cc/QMLZyGDX/15-Ravage-River-removebg-preview.png"
    },
    {
        id: nanoid(),
        title: "Meet and Greet",
        desc:"In line with Splash Mania's rainforest theme, these mascots were selected as some of the most remarkable and majestic creatures inhabiting the rainforest terrain.",
        imgUrl:"https://i.postimg.cc/JhbCw67j/pasd-removebg-preview.png"
    },
]

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


export const homeProductData = [
    {
        id:nanoid(),
        title:"Splash Mania Waterpark",
        image: "https://i.postimg.cc/L8xSc0rf/gallery-desktop-7.png",
        tourPlace:"Gamuda Cove Selangor",
    },
    {
        id:nanoid(),
        title:"Aras Resturant",
        image: "https://i.postimg.cc/kGVntc0R/9.jpg",
        tourPlace:"KL Tower",
    },
    {
        id:nanoid(),
        title:"Berjaya Times Square",
        image: "https://i.postimg.cc/ZnkNfVrp/free-fall.jpg",
        tourPlace:"Jln Imbi",
    },
    {
        id:nanoid(),
        title:"Desaru Waterpark",
        image: "https://i.postimg.cc/7Yzf7K7g/13.jpg",
        tourPlace:"Bandar Penawari",
    },
    {
        id:nanoid(),
        title:"Legoland",
        image: "https://i.postimg.cc/SxPMcMX2/Legoland-Ticket-Johor-Bahru-Malaysia-Klook-United-States.jpg",
        tourPlace:"Iskandar Puteri",
    },
]

export const homeImgViwerData = [
    {
        id: nanoid(),
        img:"https://i.postimg.cc/kGVntc0R/9.jpg",
        title: "ArasResturant"
    },
    {
        id: nanoid(),
        img:"https://i.postimg.cc/ZnkNfVrp/free-fall.jpg",
        title: "BerjayaTimes Square"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/7Yzf7K7g/13.jpg',
        title: "Desaru Waterpark"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/SxPMcMX2/Legoland-Ticket-Johor-Bahru-Malaysia-Klook-United-States.jpg',
        title: "Legoland"
    },
]

export const homeToursData = [
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/kGVntc0R/9.jpg',
        title: "ArasResturant",
        slug:"aras-resturant"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/ZnkNfVrp/free-fall.jpg',
        title: "BerjayaTimes Square",
        slug:"berjaya-times-square"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/7Yzf7K7g/13.jpg',
        title: "Desaru Waterpark",
        slug:"desaru-waterpark"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/SxPMcMX2/Legoland-Ticket-Johor-Bahru-Malaysia-Klook-United-States.jpg',
        title: "Legoland",
        slug:"legoland"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/9MVQw7n5/FB-IMG-1672326765049.jpg',
        title: "SplashMania WaterPark",
        slug:"splash-mania"
    },


]