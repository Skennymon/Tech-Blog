"use client"
import Link from 'next/link'
import Image from 'next/image'
import Card from './Components/Card'
import { useState } from 'react'

export default function Home() {

  const[cards, setCards] = useState([
    {photo: "/Beach.jpg", text: "Headphones", title: "Headphones", category: "Technology"},
    {photo: "/Beach.jpg", text: "Headphones", title: "Headphones", category: "Technology"},
    {photo: "/Beach.jpg", text: "Headphones", title: "Headphones", category: "Technology"},
    {photo: "/Beach.jpg", text: "Headphones", title: "Headphones", category: "Technology"},
    {photo: "/Beach.jpg", text: "Headphones", title: "Headphones", category: "Technology"},
    {photo: "/Beach.jpg", text: "Headphones", title: "Headphones", category: "Technology"},
  ]);

  
  return (
      <>
        <section className="w-[100%] h-80 relative flex justify-center items-center">
          <Image src="/Beach.jpg" fill={true} objectFit="cover" alt="Picture" quality={100} objectPosition="center"></Image>
          <h1 className="absolute text-8xl">Tech that I <span className="text-lime-300">Use</span></h1>
        </section>

        <article className="justify-center items-center flex flex-col gap-16">
          <div className="flex justify-center items-center mt-7 flex-wrap max-w-[25%]">
            <h2>Hello, my name is Kenny and I'm currently a 2nd year undergraduate student at SJSU. I'm currently working on getting better as a full-stack engineer and I thought it would be pretty cool to make a blog-esque page on the stuff I like to use on a day-to-day basis.</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-20 w-[69%]">
            {cards.map((card, index) => (
              <Card key={index} photo={card.photo} text={card.text} title={card.title} category={card.category}></Card>
            ))}
          </div>
        </article>
      
      </>
    );
}
