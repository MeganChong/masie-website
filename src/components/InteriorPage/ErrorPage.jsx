import React from "react"
import NavBar from "../NavBars/NavBar";

export default function ErrorPage() {
	return (
            <div className="min-h-screen bg-purple-300">
                <NavBar show={true} displayType={"info"}/>
                <h1 className="text-center text-lg" style={{lineHeight: "100vh"}}>
                    Whoops! Much like my marbles, I seem to have lost this book! Please go back and try again
                </h1>
            </div>
        );
}
