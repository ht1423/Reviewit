import React from 'react';
import Points from '../CreateWorkspace/Points';
import VerticalLine from '../Workspace/VerticalLine';

function Left({ formType }) {
    const pointsData = {
        text: [
            { main: "Type Away ✍️", sub: "Words have power! Let your customers spill their hearts out with text testimonials." },
            { main: "Zero Setup, Maximum Impact 🚀", sub: "No confusing steps—just type, submit, and boom! Instant trust boost." },
            { main: "Because Fonts Matter 🎨", sub: "Pick a style, add some flair, and let testimonials speak louder than ads!" }
            ],
        image: [
            { main: "A Picture is Worth 1000 Words 📸", sub: "Let customers flex their love with stunning image testimonials!" },
            { main: "No Photoshop Needed 😎", sub: "Just upload, and we handle the rest—seamless, beautiful, and effortless!" },
            { main: "Selfies Count Too 🤳", sub: "Whether it's a product shot or a happy face, every image adds authenticity!" }
        ],
        video: [
            { main: "Lights, Camera, Testimonial! 🎬", sub: "Let customers drop video shoutouts—raw, real, and super convincing." },
            { main: "Hollywood Vibes? Maybe. 🎥", sub: "Even a 5-sec clip can make a huge impact—no need for Oscar-level editing!" },
            { main: "Talk Less, Show More 🎤", sub: "Videos build instant trust—because seeing is believing!" }
        ]
    };

    return (
        <div className='flex max-w-[28em]'>
        <VerticalLine />
        <div className='mt-8 ml-[-1px]'>
            {pointsData[formType].map((point,index) => (
                <Points key={index} main={point.main} sub={point.sub}/>
            ))}
        </div>
        </div>
    );
    }

    export default Left;
