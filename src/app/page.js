"use client"
import Link from 'next/link'
import Image from 'next/image'
import Card from './Components/Card'
import { useState } from 'react'

export default function Home() {

  const[cards, setCards] = useState([
    {photo: "/Airpods.png", text: "Earbuds", title: "Airpods Pro 2nd Gen", category: "Technology", url: "/posts/airpods-pro"},
    {photo: "/Audio-Technica-M40.png", text: "Headphones", title: "Audio Technica M40", category: "Technology", url: "/posts/audio-technica-m40x"},
    {photo: "/KeyChron-C1.png", text: "Keyboard", title: "Keychron C1 Mechanical Keyboard", category: "Technology", url: "/posts/keychron-c1"},
    {photo: "/Razer-Viper-Mini.png", text: "Mouse", title: "Razer Viper Mini", category: "Technology", url: "/posts/razer-viper-mini"},
    {photo: "/XP-Pen.png", text: "Art", title: "XP-Pen DECO V1", category: "Technology", url: "/posts/xp-pen-deco-v3"},
    {photo: "/Fifine.png", text: "Microphone", title: "Fifine K688", category: "Technology", url: "/posts/fifine"},
    {photo: "/PC.png", text: "My pride and joy", title: "Main Computer", category: "Technology", url: "/posts/PC"},
    {photo: "/LG.png", text: "Main monitor", title: "LG 27GP850-B Ultragear Gaming Monitor", category: "Technology", url: "/posts/LG"},
    {photo: "/Acer.png", text: "Secondary monitor", title: "Acer S200HQL", category: "Technology", url: "/posts/acer"},
  ]);

  
  return (
      <>
        <section className="w-[100%] h-80 relative flex justify-center items-center">
          <Image src="/KennyAtDesk.JPG" fill={true} objectFit="cover" alt="Picture" quality={100} objectPosition="center"></Image>
          <h1 className="absolute text-8xl">Tech that I <span className="text-lime-300">Use</span></h1>
        </section>

        <article className="justify-center items-center flex flex-col gap-16">
          <div className="flex justify-center items-center mt-7 flex-wrap max-w-[25%]">
            <p>Hello, my name is Kenny and I&apos;m currently a 2nd year undergraduate student at SJSU. 
              I&apos;m currently working on getting better as a full-stack engineer and I thought it would be pretty cool to make a blog page on the stuff I like to use on a day-to-day basis.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-20 w-[69%] border border-stone-800 rounded-4xl p-7 bg-stone-900">
            {cards.map((card, index) => (
              <Card key={index} photo={card.photo} text={card.text} title={card.title} category={card.category} url={card.url}></Card>
            ))}
          </div>
        </article>
      
      </>
    );
}
