import React from 'react'
import valueImg1 from '@/app/images/value2.jpg'
import valueImg2 from '@/app/images/value3.jpg'
import valueImg3 from '@/app/images/kid2.jpg'
import Image from 'next/image'




const data = [
    {
        id:1,
        image : valueImg1,
        title : "Give Happiness",
        content : "Giving happiness to others is one of the most fufilling thing you"
    },
    {
        id:1,
        image : valueImg2,
        title : "Share Love",
        content : "When you share love with those around you, you create a ripple effect of kindness"
    },
    {
        id:1,
        image : valueImg3,
        title : "Build Socially",
        content : "Building socially requires not jut connecting with others, but also actively contributing."
    },
]

const CardItem = ({img,title,content}) => {
    return (
        <div className="flex flex-col items-center ">
            <div className="w-36 h-36 rounded-full bg-white overflow-hidden">
                <Image src={img} alt="image" className="w-full h-full object-cover grayscale" />
            </div>
            <h4 className="lg:text-3xl font-bold mt-5">{title}</h4>
            <p className="text-center lg:text-xl  pt-5 font-medium">{content}</p>
        </div>
    )
}

function Values() {
    return (
        <div className="max-w-8xl  container mx-auto py-10 p-5 md:p-0" data-aos="fade-right">
            <div className="bg-lime-300 rounded-3xl p-10">
                <div className="text-center">
                    <h3 className="lg:text-5xl text-center font-medium">Fundraising on Gocingo takes </h3>
                    <h3 className="lg:text-5xl font-medium">just a few minutes</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-10 py-20 ">
                    {
                        data.map((item)=> <CardItem key={item?.id} title={item.title} img={item.image} content={item.content}/>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Values