import lawers from "./assets/images/lawers.png";
import flowers from "./assets/images/flowers.png";
import userImg from "./assets/images/user.png";

const workDb = [
    {
        image: lawers,
        title: "100 Lawers.com",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "SASS/SCSS",
            "Git"
        ]
    },

    {
        image: flowers,
        title: "Flowers.com",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        technologies: [
            "React",
            "React Router",
            "JavaScript",
            "Tailwindcss",
            "Git"
        ]
    }
];

const comments = [
    {
        image: userImg,
        body: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
        name: "Dilshod Buymurodov",
        job: "Founder - Paymart.uz"
    },
    {
        image: userImg,
        body: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
        name: "Djasur Djumaev",
        job: "Co-Founder - Uzum.uz"
    },
    {
        image: userImg,
        body: "“Sunnatbek was extremely easy and pleasant to work with and he truly cares about the project being a success. Sunnatbek has a high level of knowledge and was able to work on my Frontend application without any issues.”",
        name: "Avaz Aminov",
        job: "PM - Solution Lab"
    }
]

export {
    workDb,
    comments
} 