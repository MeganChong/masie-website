import React from "react";
import NavBar from "./NavBars/NavBar";

export default function About() {
    return (
        <div class="min-h-screen md:flex">
            <NavBar show={true} displayType={"category"}/>

            <div class="bg-about bg-cover min-h-screen">
                <p class="text-white text-left text-about
                            px-8 pt-24 pb-10 mx-8 
                            md:pl-32 md:pt-28
                            lg:pl-48 lg:pt-32 lg:pr-32 lg:mr-56">
                    My name is Masie Chong. Each week one graphic designer tries to take me 
                    down in my house. If you think you have what it takes to beat me 
                    contact me at sleepingartist693@gmail.
                </p>
            </div>
        </div>
    );
}