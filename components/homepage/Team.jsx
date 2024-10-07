import Image from 'next/image'
import React from 'react'
import team1 from '@/app/images/team1.jpg'
import team2 from '@/app/images/team2.jpg'
import team3 from '@/app/images/team3.jpg'
import team4 from '@/app/images/team4.jpg'


const teamMemebers = [
    {
        id:1,
        name:'John Doe',
        image:team1,
        position:'Founder',
    },
    {
        id:2,
        name:'Jane Doe',
        image:team2,
        position:'Developer',
    },
    {
        id:3,
        name:'John Smith',
        image:team3,
        position:'Designer',
    },
    {
        id:4,
        name:'Jane Smith',
        image:team4,
        position:'Marketing',
    }
]


const TeamCard = ({image,name, position}) => {
    return (
        <div>
            <div className="h-64 bg-gray-200 overflow-hidden rounded-lg mb-3">
                <Image src={image} alt="image" className="w-full h-full object-cover" />
            </div>
            <p>{name}</p>
            <small>{position}</small>
        </div>
    )
}



function Team() {
    return (
        <section className="max-w-8xl container mx-auto py-10 ">
            <div className="" data-aos="fade-up" >
                <div className="text-center ">
                    <h1 className="text-5xl font-semibold text-gray-900">Meet our team</h1>
                    <p className="p-5 font-medium text-xl ">The world's largest social fundraising platform, optimized for <br /> your charity in amore easy way</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 p-5 md:p-0">
                    {
                        teamMemebers.map((member,index)=> <TeamCard image={member.image} name={member.name} position={member.position}/>)
                    }

                    

                </div>
            </div>

        </section>
    )
}

export default Team