import React from "react";
import NavBar from "./NavBar";

export default function About() {
    return (
        <div>
            <NavBar show={true}/>

            <div class="bg-about bg-cover min-h-screen min-w-min">
                <p class="text-white text-left text-about 
                        px-8 pt-24 mx-8
                        md:pl-32 md:pt-28
                        lg:pl-48 lg:pt-32 lg:pr-96 lg:mr-56">
                    Hi there! <br/>
                    I see design as an opportunity 
                    to give an idea a beautiful and unique visual identity 
                    that stands out from the crowd. 
                    I love to work with color and am passionate in exploring 
                    all the different places design takes me. 
                    As a print and digital designer, 
                    I am experienced in designing for advertising, publications, conferences, 
                    social media campaigns and more. 
                    Please feel free to contact me at sleepingartist693@gmail.com. 
                    Thank you for visiting my website!
                </p>
            </div>
        </div>
    );
}