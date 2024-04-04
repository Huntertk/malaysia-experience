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
        ]
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
        link:"/aras-resturant"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/ZnkNfVrp/free-fall.jpg',
        title: "BerjayaTimes Square",
        link:"/berjaya-times-square"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/7Yzf7K7g/13.jpg',
        title: "Desaru Waterpark",
        link:"/desaru-waterpark"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/SxPMcMX2/Legoland-Ticket-Johor-Bahru-Malaysia-Klook-United-States.jpg',
        title: "Legoland",
        link:"/legoland"
    },
    {
        id: nanoid(),
        img: 'https://i.postimg.cc/9MVQw7n5/FB-IMG-1672326765049.jpg',
        title: "SplashMania WaterPark",
        link:"/splash-maina"
    },


]