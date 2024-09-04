import glasgowImg from '../assets/img/glasgow.jpg';
import printedCanoeImg from '../assets/img/3dprintedcanoe.jpg';
import sketchesImg from '../assets/img/sketches.jpg';
import catEarsImg from '../assets/img/catears.jpg';
import animationGif from '../assets/img/animation.gif';
import egtImg from '../assets/img/egt.gif';
import bmeComic from '../assets/img/whatisbme.jpg';
import crochetImg from '../assets/img/crochet.jpg';
import ahahImg from '../assets/img/ahah.jpg';

export const BACKGROUND = [
    {
        id: 0,
        title: 'Background and Relevant Experiences:',
        details: [
            "I grew up in Kihei, on the island of Maui, and graduated from Kihei Charter School in 2018. After highschool, I studied Biomedical Engineering at the University of Glasgow in Scotland - about 6,895 miles away from my hometown! This experience of moving so far away for university truly changed my life. I was able to meet so many people from so many backgrounds, and learn many diverse perspectives on the world. I am so happy to bring the new perspectives and connections I've made back home to Hawai'i.",
            "I am also a lifelong hobbyist and Maker. Some of my hobbies include: Knitting, Sewing, Crochet, Software & Web Development, Robotics, Arduino & Raspberry Pi projects, CAD, Animation, 3D printing, Drawing, Painting, Microscopic Photography, Running, and learning new things!"
        ],
        images: [
            {
                id: 0,
                img: glasgowImg,
                title: "University of Glasgow"
            },
            {
                id: 1,
                img: sketchesImg,
                title: "EGT Device Sketches"
            },
            {
                id: 2,
                img: egtImg,
                title: "EGT Device Model"
            },
            {
                id: 3,
                img: crochetImg,
                title: "Crochet & Sewn Bag"
            },
            {
                id: 4,
                img: printedCanoeImg,
                title: "3D Printed Canoe"
            },
            {
                id: 5,
                img: catEarsImg,
                title: "3D Printed Cat Ears"
            },
            {
                id: 6,
                img: bmeComic,
                title: "What is BME? Comic"
            },
            {
                id: 7,
                img: animationGif,
                title: "3D Animation"
            },
            
        ]
    },
    {
        id: 1,
        title: 'Academic Experiences',
        details: [
            // 'As Educational Convener of the Glasgow University Biomedical Engineering Society (GUBMES) in AY 2020/21, I was always coming up with ideas to keep our members engaged during the pandemic, such as creating a CAD competition for our members and making a simple CAD tutorial video to go along with it.',
            'I took an Entrepreneurship in Biomedical Engineering class at UofG, where my group gained product development experience through designing an EGT (electrogene therapy) device for a real company.',
            "My Senior Project in high school involved teaching coding classes to Sophomores for four weeks. I designed and developed the curriculum myself.",
            "Leadership: Educationl Convener of the Biomedical Engineering Society (GUBMES), Secretary and Treasurer of the Effective Altruism Society at UofG. I founded a Makers Club and a Coding Club at my high school."
        ]

    },
    {
        id: 2,
        title: 'Volunteer Experiences',
        details: [
            "Recently, I volunteered with All Hands and Hearts (AHAH) for wildfire relief efforts on Maui, where I volunteered at distribution centers, helped prepare food, and helped build MPUs (multi purpose units) for families affected by the Lahaina fires.",
            // "Other recent volunteering experiences include volunteering at the Kako'o Maui Kahului Distribution Center and Women Helping Women Revive Resale Boutique on Maui for several months earlier this year.",
            "In addition to wildfire relief, I also do STEM outreach volunteering. In February, I volunteered at STEMworks' Introduce a Girl to Engineering Day on Maui and taught a biomed-related workshop building little DIY smartphone microscope kits."
        ],
        image: ahahImg,
        link: 'https://give.allhandsandhearts.org/fundraiser/5507652',
        imageLinkDesc: "All Hands and Hearts"
    },
    {
        id: 3,
        title: 'Entrepreneurial Experiences',
        details: [
            "Nalukai Academy Startup Camp: I was part of the very first cohort in 2016, which helped cement my love of entrepreneurship and making things.",
            "Startup Factory: I participated in two Startup Factory events at the University of Glasgow - in 2018 and 2019. In the 2019 event, our team won 2nd place.",
            "Hackathons: I participated in many hackathons throughout my university career. I love the process of brainstorming and building a MVP in such a short amount of time! It's fun, too, when you win and get to bring home cool prizes!"
        ]
    },
]