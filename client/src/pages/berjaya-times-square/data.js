import { nanoid } from 'nanoid';

//Booking Card Data
export const berjayaTimesSquareCardData = [
    {
        _id: nanoid(),
        image:[
            "https://i.postimg.cc/RFKmZ1fv/free-fall.jpg",
            "https://i.postimg.cc/vmj8BHNt/2.jpg",
            "https://i.postimg.cc/Zq9Z1z5B/dizzyizzy.jpg",
        ],
        title:"Berjaya Times Square",
        desc:"Indoor amusement in Kuala Lumpur with rides, arcadegames, and family-friendly fun. Located in the Berjaya Times Square complex.",
        type:"bookTypeOne",
        service:"berjaya-times-square",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekDays:{
                        adult:56,
                        child:46
                    },
                    weekEnds:{
                        adult:56,
                        child:46
                    }
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    weekDays:{
                        adult:70,
                        child:65
                    },
                    weekEnds:{
                        adult:70,
                        child:65
                    }
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ],
        inclusionAndExclusion:{
            cancellationPolicy:["These tickets can't be cancelled or rescheduled"],
            inclusion:["Admission Ticket"],
            exclusion:[
                "Parking",
                "Food and Drink"
            ]
        }
    },
]

//Why Visit
export const berjayaTimeSquareWhyVistData = [
    {
        id: nanoid(),
        title: "Largest Indoor Themepark",
        desc:"Berjaya Times Square Theme Park has been recognized in the Malaysia Book of Records as the largest indoor theme park in Malaysia, marking a significant milestone..",
        imgUrl:"https://i.postimg.cc/C54VjFmt/largestthemepark.jpg"
    },
    {
        id: nanoid(),
        title: "Family Friendly Games",
        desc:"Experience the allure of family-friendly games at Berjaya Times Square, a must-visit destination for all ages.",
        imgUrl:"https://i.postimg.cc/vmj8BHNt/2.jpg"
    },
    {
        id: nanoid(),
        title: "Suitable games for Thrill Lovers",
        desc:"Heart-pounding experiences and immersive adventures await at Galaxy Station.",
        imgUrl:"https://i.postimg.cc/Zq9Z1z5B/dizzyizzy.jpg"
    },
]


//Things to do
export const berjayaTimesSquareThingsToDoData = [
    {
        id: nanoid(),
        image: "https://i.postimg.cc/fTZzkPBp/BTS3.jpg",
        title:"Roller Coaster",
        desc:"A roller coaster is usually present in a theme park, offering thrill-seekers an exciting ride."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/Hs2pMtNx/bts4.webp",
        title:"Kiddie Rides",
        desc:"These rides are often made especially for smaller kids, making sure they have a fun and safe time."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/PJntWVhL/bts7.jpg",
        title:"Carousel",
        desc:"A traditional carousel ride is frequently offered, providing a kinder and more family-friendly experience."
    },
    {
        id: nanoid(),
        image: "https://i.postimg.cc/Sx1kTxkb/bts10.jpg",
        title:"Simulation Rides",
        desc:"A few theme parks include rides that simulate real-world situations using technology, including motion simulators or virtual reality."
    },
]

//Highlights
export const berjayaTimesSquareHighlighhtsData = [
    {
        id: nanoid(),
        desc:"Bring together your dear ones and companions for a day brimming with joy and thrills, perfect for everyone regardless of age.",
        image: "https://i.postimg.cc/vmDHb63m/3.jpg"
    },
    {
        id: nanoid(),
        desc:"Get your adrenaline pumping with thrilling rides at Galaxy Station, while you create lasting memories with your little ones in the enchanting Fantasy Garden.",
        image: "https://i.postimg.cc/RFKmZ1fv/free-fall.jpg"
    },
    {
        id: nanoid(),
        desc:"Regardless of the weather, step into a vast 133,000-square-foot indoor themepark situated at the heart of Kuala Lumpur's city center.",
        image: "https://i.postimg.cc/C54VjFmt/largestthemepark.jpg"
    },
]


//Additional Information

export const berjayaTimesSquareAdditionInfoData = [
     {
        id: nanoid(),
        ques:"Operating Hours ?",
        ans:[
            "Monday to Friday (12 pm - 8 pm)",
            "Weekend and Public Holiday (11 am - 8 pm)",
        ]
    },
    {
        id: nanoid(),
        ques:"Child Policy",
        ans:[
            "Adult age 13 - 59 years old",
            "Child age is 3 to 12 years old.",
            "Child below 3 years old enter for Free",
            "Senior Citizen 55 years old and above",
            "Visitors with OKU Card can purchase directly at counter.",
            "Senior Citizen may purchase directly from counter."
        ]
    },
    {
        id: nanoid(),
        ques:"Ticket Inclusion",
        ans:[
            "Robo Crash",
            "Dizzy Izzy",
            "Bubbles Express",
            "Spinning Orbit",
            "Supersonic Odyssey",
            "Botanic Drive",
            "Buddy Go Round",
            "Crazy Bus",
            "Fantasy Trail",
            "Flying Bumble Bee",
            "Honey Bump", 
            "Molly-Cool's Swing",
        ]
    },
    {
        id: nanoid(),
        ques:"Ticket Exclusion",
        ans:[
            "Winter Wonderland Snow Town",
            "Zoofari Animal Ride",
            "Haunted House",
            "Arcade Games",
            "Terry's Carnival Games",
            "World's First Waterless Aquarium",
            "Urban Strike Force",
            "Kidz Playground",
            "Drive Kart",
            "The Fantasy Labyrinth",
            "Haunted House VR",
            "PSVR2",
        ]
    },
    {
        id: nanoid(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: nanoid(),
        ques:"Redemption Guide",
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
        ]
    },
    {
        id: nanoid(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]

//FAQ
export const berjayaTimesSquareTourHomeFAQ = [
    {
        id: nanoid(),
        ques:"What are the available restaurant nearby ?",
        ans:["A&W, Mcdonalds, Chocoloco Caffe, F&B Kiosk, Sub18 Gelato."]
    },
    {
        id: nanoid(),
        ques:"What are the amenities available for my convenient ?",
        ans:["Toilet, Surau, Souvenir Shop and Baby Room."]
    },
    {
        id: nanoid(),
        ques:"How much is the price for Locker",
        ans:["There are 2 type of Lockers available. Small Locker is RM10 and Large Locker is RM25. (Subject to availability)"]
    },
    {
        id: nanoid(),
        ques:"Is there any discount for OKU or disabled person ?",
        ans:["Yes, you may purchase your tickets at the counter for special price."]
    },
    {
        id: nanoid(),
        ques:"Is my ticket include all games ?",
        ans:["Yes all games included except for Pay-Per-Ride Games. Kindly refer to the ticket inclusion for more details."]
    },
    {
        id: nanoid(),
        ques:"Can I re-enter the Themepark once entered ?",
        ans:["No. The ticket is only for ONE time entry."]
    },
]