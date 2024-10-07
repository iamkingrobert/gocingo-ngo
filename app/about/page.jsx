import Navbar from '@/components/homepage/Navbar'
import Team from '@/components/homepage/Team'
import PageBanner from '@/components/PageBanner'
import people from '@/app/images/people.jpg'
import aboutImg from '@/app/images/aboutus.jpg'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <section>
      <PageBanner title={"About Us"} bannerImage={people} />


      <div className="max-w-8xl  container mx-auto py-20 ">

        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 mb-10">

          <div className="md:col-span-1 items-stretch">
            <div><Image src={aboutImg} alt="image" className="h-auto w-full object-fil" /></div>
          </div>

          <div className="md:col-span-2 p-3">
            <h2 className="lg:text-5xl text-3xl font-semibold md:leading-relaxed text-center md:text-start"> <span className="text-green-400">Gocingo</span> is a Nonprofit Organization Setup to Help Children in Need.</h2>
            <div>
              <h2></h2>
            </div>
            <p className="font-medium md:text-xl md:leading-loose text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id eaque sit perspiciatis saepe iusto illum error eius fugit delectus, dolorum accusantium voluptatem, illo nulla eos ut hic ipsum accusamus magnam rem eum architecto quod. Impedit odit quas eos veniam aspernatur sed omnis neque, praesentium ullam ut facilis? Explicabo ex eveniet voluptatem veritatis vitae illum corporis in illo. Quaerat culpa quae officia voluptatibus, nihil beatae nobis corrupti placeat esse? In accusantium dolore doloribus itaque quaerat nemo impedit ut dicta incidunt!</p>

            <p className="font-medium md:text-xl md:leading-loose text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis quam, minima, aliquam ullam amet id expedita ea non, molestiae reprehenderit minus dolorum deserunt. Minima eveniet, provident, fugiat nobis corporis nihil ducimus dolorem totam doloribus harum vel, suscipit ea architecto.</p>
          </div>

        </div>


        {/* MISSION VISION SECTION */}
        <div className="grid md:grid-cols-2 md:gap-10  p-3 md:p-0" data-aos="fade-up">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed md:text-xl md:p-4 p-2">
              At <strong>Gocingo</strong>, our mission is to empower communities by providing a seamless platform for
              donations. We strive to bridge the gap between generous donors and those in need, ensuring that every contribution
              makes a meaningful impact. Our goal is to foster a culture of giving and make charity accessible to all, one donation
              at a time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed md:text-xl md:p-4 p-2">
              Our vision at <strong>Gocingo</strong> is to create a world where generosity is a daily practice, and resources flow
              effortlessly from those who have to those who need. We envision a future where no one is left behind, and every person
              has the opportunity to live with dignity, hope, and purpose. By leveraging technology and community, we aim to inspire
              a global movement of giving that transforms lives and uplifts humanity.
            </p>
          </section>
        </div>
      </div>


      <Team />

    </section>
  )
}

export default page