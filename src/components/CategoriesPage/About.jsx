import React from "react";
import NavBar from "../NavBars/NavBar";

import circles from "../../assests/about/Circles.png";
import kitkat from "../../assests/about/About_KitKat.jpg";
import shrimp from "../../assests/about/About_NasiLemak.jpg";
import sleep from "../../assests/about/About_Sleep2.jpg";
import travel from "../../assests/about/AboutPhotos_Travel.png";
import photography from "../../assests/about/AboutPhotos_Photo.png";
import baking from "../../assests/about/AboutPhotos_Baking.png";
import linkedin from "../../assests/about/AboutIcon_Linkend.png";
import email from "../../assests/about/AboutIcon_Email.png";

export default function About() {
    function barWithWordsDiv(text) {
	return <div className="w-full">
		<hr className="bg-light h-3 w-8/12 mx-auto"/>
		<div className="m-6 px-5 text-xl">{text}</div>
	</div>;
    }

    function topIntroSection() {
	return <div className="bg-dark h-fit text-light text-center items-center flex flex-col p-10">
		<div className="text-7xl tracking-[0.7rem] mt-32">Masie</div>
		<div className="text-3xl leading-[2.85rem] tracking-[0.5rem] mb-6 md:mb-4">/ˈmeɪ si/</div>
		<div className="text-3xl leading-[2.85rem] tracking-[0.5rem]">Senior Graphic Designer</div>
		<img src={circles} className="w-4/12 m-10 mb-20" alt="a row of 4 circles"/>
		<div className="flex w-full items-start flex-col md:flex-row">
			{barWithWordsDiv("10 years of experience")}
			{barWithWordsDiv("print and digital")}
			{barWithWordsDiv("ID, AI, PS, LR, XD, AE")}
		</div>
	</div>;
    }

    function middleMottoSection() {
	return <div className="bg-light h-fit flex flex-col lg:flex-row gap-4 max-w-full">
		<div className="bg-brandYellow flex flex-col grow h-full tracking-[0.5rem] text-left content-center py-12">
			<div className="text-2xl tracking-[0.4rem] p-4 pt-32 lg:pt-20 pl-12 grow align-bottom flex flex-col"><div className="grow"></div><p>Great design is</p></div>
		    <div className="p-12 bg-light text-5xl leading-[4rem]">
				<div>Functional</div>
				<div>Aesthetic</div>
				<div>Purposeful</div>
			</div>
			<div className="p-6 grow text-lg tracking-widest px-12">
				Weaving these principals into every project to resonate and inspire.
			</div>
		</div>
		
		<div className="max-w-full lg:max-w-[50%] flex flex-col gap-4 h-full max-h-fit md:max-h-[90vh]">
			<img className="object-cover md:grow h-[50vh] md:h-[66%]" src={kitkat} alt="graphic neon kitkats"/>
			<div className="flex flex-row max-w-full h-[33%]">
				<img src={shrimp} className="w-6/12 object-cover pr-2" alt="A bowl of stir-fried shrimp"/>
				<img src={sleep} className="w-6/12 object-cover pl-2" alt="A sleeping penguin figure"/>
			</div>
		</div>
	</div>;
    }

    function bottomHobbiesContactSection() {
	return <div className="bg-brandBlue min-h-screen flex flex-col">
		<div className="text-center text-xl tracking-[0.2rem] max-h-[55%] m-20">
			<div className="text-3xl m-8 leading-[2.6rem] tracking-[0.3rem]">I am inspired by</div>
			<div className="flex flex-col md:flex-row w-full">
				<div className="p-5">	
					<img src={travel} className="w-9/12 m-auto" alt="A photo of a the red temple gate in Japan that I took"/>
					<div className="mt-3">Travel</div>
				</div>
				<div className="p-5">
					<img src={photography} className="w-9/12 m-auto" alt="A photo of an open space I took"/>
					<div className="mt-3">Photography</div>
				</div>
				<div className="p-5">
					<img src={baking} className="w-9/12 m-auto" alt="music shelf"/>
					<div className="mt-3">Music</div>
				</div>
			</div>
		</div>

		<div className="bg-light flex flex-col md:flex-row max-h-[45%] text-xl content-center">
			<div className="basis-11/12 text-3xl leading-[2.5rem] tracking-[0.4rem] m-12 mt-16 ml-16 lg:my-auto text-center md:text-left">
				Let's make something cool together!
			</div>
			
			<div className="flex flex-row max-h-fit min-h-full max-w-full">
			   <a href="https://www.linkedin.com/in/masie-chong" target="_blank">
				<div className="bg-brandRed p-6 flex flex-col items-center place-content-center min-h-full text-light">
					<img src={linkedin} className="w-4/12 m-4" alt="the LinkedIn logo"/>
					<div>My LinkedIn</div>
				</div>
			   </a>	
			   <a href="mailto:masiecsdesign@gmail.com">
				<div className="bg-brandYellow p-6 flex flex-col items-center place-content-center h-full">
					<img src={email} className="w-4/12 m-4" alt="email icon"/>
					<div className=" text-center">masiecsdesign<br/>@gmail.com</div>
				</div>
			   </a>
			</div>
		</div>
	</div>;
    }

    function aboutPage() {
	return <div className="flex flex-col md:flex-row w-full">
		<NavBar show={true} displayType={"category"}/>

		<div className="grow flex flex-col w-full">
			{topIntroSection()}
			{middleMottoSection()}
			{bottomHobbiesContactSection()}
		</div>
	</div>;
    };

    return aboutPage();
}
