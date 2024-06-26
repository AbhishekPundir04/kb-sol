import React from 'react'
import ImageSlider from '../Slider/SimpleSlider'
import { Grid, Typography } from '@mui/material'
import "./style.scss"
import CardComponent from '../../HomePage/Cards/Cards'
import MediaCard from '../../HomePage/Cards/Cards'
import alpineImg from "../../../../assets/images/cards-images/Alpine.png"
import alfaShawImg from "../../../../assets/images/cards-images/alfa.jpg"
import palbitIMg from "../../../../assets/images/cards-images/Palbit.png"
import honsberg from "../../../../assets/images/cards-images/honsberg.png"
import subnLub from "../../../../assets/images/cards-images/sunlub.jpeg"
import supremeLogo from "../../../../assets/images/cards-images/Supreme_Logo.png"


const clientsData = [
    {
        content: "As a market leader in engineering adhesive solutions, Alpine® sets the standard for cost reduction and improved reliability. Their pioneering Anaerobic Technology, invented by Loctite, is a testament to their innovative approach and commitment to excellence.",
        images: alpineImg,
        heading: ""
    },
    {
        content: "Alfa Precision Technologies is the world's fastest-growing business in bimetal bandsaw blades. They are the largest manufacturer of bimetal bandsaw blades in India, with a vision for continuous improvement based on market demand. Their quality is highly regarded both in the Indian market and internationally.",
        images: alfaShawImg,
        heading: ""
    },
    {
        content: "Pabet's purpose is to provide cutting-edge tools and solutions that help unleash machining potential, driving progress and success for customers. They strive to deliver a customer-centered experience, backed by exceptional customer service and a commitment to innovation, quality, and sustainability.",
        images: palbitIMg,
        heading: ""
    },
    {
        content: "At Honsberg, technology is redefined, offering German quality at an affordable price. As pioneers in Band Saw technique since 1778, Honsberg takes immense pride in its breakthrough expertise. The commitment to quality is exemplified by the DIN ISO 9001 certification, held since 1995. The research and development wing serve as the backbone of the company, constantly driving innovation.",
        images: honsberg,
        heading: ""
    },
    {
        content: "At Honsberg, technology is redefined, offering German quality at an affordable price. As pioneers in Band Saw technique since 1778, Honsberg takes immense pride in its breakthrough expertise. The commitment to quality is exemplified by the DIN ISO 9001 certification, held since 1995. The research and development wing serve as the backbone of the company, constantly driving innovation.",
        images: subnLub,
        heading: ""
    },
    {
        content: "At Honsberg, technology is redefined, offering German quality at an affordable price. As pioneers in Band Saw technique since 1778, Honsberg takes immense pride in its breakthrough expertise. The commitment to quality is exemplified by the DIN ISO 9001 certification, held since 1995. The research and development wing serve as the backbone of the company, constantly driving innovation.",
        images: supremeLogo,
        heading: ""
    },
    {
        content: "At Honsberg, technology is redefined, offering German quality at an affordable price. As pioneers in Band Saw technique since 1778, Honsberg takes immense pride in its breakthrough expertise. The commitment to quality is exemplified by the DIN ISO 9001 certification, held since 1995. The research and development wing serve as the backbone of the company, constantly driving innovation.",
        images: honsberg,
        heading: ""
    },
    {
        content: "At Honsberg, technology is redefined, offering German quality at an affordable price. As pioneers in Band Saw technique since 1778, Honsberg takes immense pride in its breakthrough expertise. The commitment to quality is exemplified by the DIN ISO 9001 certification, held since 1995. The research and development wing serve as the backbone of the company, constantly driving innovation.",
        images: honsberg,
        heading: ""
    },

]
const Home = () => {
    return (
        <div>
            <div className='main-heading-container'>
                <span className='quality-heading'>Quality at its Best</span>
                <span className='elevating-heading'>Elevating Business with Premium Products</span>
            </div>
            <div className='flex items-center justify-center text-lg font-medium px-12 mb-8 text-teal-700	'>
                With our inception in 2019, we have swiftly acquired invaluable industrial experience and expertise to aid our clients in cost reduction, competitive enhancement, and profit improvement. Our array of complementary products enables us to offer seamless and comprehensive solutions. Renowned for our proficiency in industrial solutions, we prioritize understanding our clients' business culture and environment. By aligning with their strategic goals, we ensure maximum impact throughout their supply chain, empowering them to achieve sustained success in the market.
            </div>
            <div className='px-6'>
                <Grid container spacing={5}>
                    {clientsData.map((data, index) => (
                        <Grid key={index} item xs={3}>
                            <MediaCard heading={data.heading} images={data.images} content={data.content} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Home