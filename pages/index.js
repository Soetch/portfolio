import Head from "next/head"
import Image from "next/image"
import { Aka, Location, Code, WYSIAim, Pareditions, Minecraft, SNMT, HanabiOres, Instagram, Twitter, Discord, Mail } from "../components/Icons"
import Buttons from "../components/Buttons"

export default function Home() {
    return(
        <>
            <Head>
                <title>Marceau (Soetch) Malégeant</title>
                <meta property="og:title" content="Marceau (Soetch) Malégeant"/>
                <meta property="og:description" content="Marceau's portfolio. (Mobile : please read under the desktop mode.) Please contact me using the links at the bottom !"/>
                <meta property="og:image" content="/public/marceau.png"/>
                <meta property="og:author" content="Soetch"/>
            </Head>
            <body className="bg-gray-900">
                <div className="mb-6">
                    <div className="grid place-content-center">
                        <div className="mt-8">
                            <div id="name" className="grid box-border bg-gray-700 w-150 h-96 rounded-3xl place-items-center mb-1">
                                <div className="grid box-border ring w-36 h-36 rounded-full mt-12 ">
                                    <Image src={`https://images2.imgbox.com/2b/6c/rQ3AazlB_o.jpg`} alt="Marceau" width={1000} height={1000} className="rounded-full"/>
                                </div>
                                <div className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 w-120 mt-4">
                                    Marceau Malégeant
                                </div>
                                <br/>
                                <Buttons/>
                            </div>
                            <div className="flex gap-5 place-content-center">
                                <div className="flex bg-gray-700 gap-4 rounded-2xl mt-4 w-44">
                                    <Aka/>
                                    <div className="text-2xl mt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 h-12">
                                        Soetch
                                    </div>
                                </div>
                                <div className="flex bg-gray-700 gap-4 rounded-2xl mt-4 w-44">
                                    <Location/>
                                    <div className="text-2xl mt-5 text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600 h-12">
                                        France
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="flex place-content-center">
                    <div className="grid place-items-center w-64 h-16 rounded-full bg-gray-700 mb-1">                            
                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce text-gray-900" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m4 9l8 8l8-8"/></svg>
                    </div>
                </div>
                <div className="">
                    <div className="xl:flex md:grid place-content-center box-border">
                        <div id="wysiaim" className="grid box-border bg-gray-700 h-140 w-120 rounded-3xl mt-6 ml-4 mr-4">
                            <div className="mt-5 ml-5">
                                <div className="flex gap-20">
                                    <Code className=""/>
                                    <WYSIAim className=""/>
                                </div>
                                <div className="w-96 mt-4 ml-3">
                                    <Image src={`https://images2.imgbox.com/c8/7c/YejSz6NF_o.jpg`} alt="wysiaim" width={1000} height={1000} className="rounded-2xl"/>
                                </div>
                                
                            </div>
                        </div>
                        <div id="pareditions" className="grid box-border bg-gray-700 h-140 w-120 rounded-3xl mt-6 ml-4 mr-4">
                            <div className="mt-5 ml-5">
                                <div className="flex gap-16">
                                    <Code className=""/>
                                    <Pareditions className=""/>
                                </div>
                                <div className="w-96 mt-4 ml-3">
                                    <Image src={`https://images2.imgbox.com/31/d3/Hw3JtP6c_o.jpg`} alt="wysiaim" width={1000} height={1000} className="rounded-2xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex place-content-center mt-6">
                    <div className="grid place-items-center w-64 h-16 rounded-full bg-gray-700 mb-1">                            
                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce text-gray-900" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m4 9l8 8l8-8"/></svg>
                    </div>
                </div>
                <div className="">
                    <div className="xl:flex md:grid place-content-center box-border">
                        <div id="wysiaim" className="grid box-border bg-gray-700 h-140 w-120 rounded-3xl mt-6 ml-4 mr-4">
                            <div className="mt-5 ml-5">
                                <div className="flex gap-14">
                                    <Minecraft/>
                                    <SNMT className=""/>
                                </div>
                                <div className="w-96 mt-4 ml-3">
                                    <Image src={`https://images2.imgbox.com/7d/8b/LhoHgWfu_o.jpg`} alt="wysiaim" width={1000} height={1000} className="rounded-2xl"/>
                                </div>
                            </div>
                        </div>
                        <div id="pareditions" className="grid box-border bg-gray-700 h-140 w-120 rounded-3xl mt-6 ml-4 mr-4">
                            <div className="mt-5 ml-5">
                                <div className="flex gap-12">
                                    <Minecraft/>
                                    <HanabiOres/>
                                </div>
                                <div className="w-96 mt-4 ml-3">
                                    <Image src={`https://images2.imgbox.com/57/19/JdeesPnW_o.jpg`} alt="wysiaim" width={1000} height={1000} className="rounded-2xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex place-content-center mt-6">
                    <div className="grid place-items-center w-64 h-16 rounded-full bg-gray-700 mb-1">                            
                        <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce text-gray-900" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m4 9l8 8l8-8"/></svg>
                    </div>
                </div>
                <div className="grid place-content-center">
                    <div id="contact" className=" box-border bg-gray-700 h-140 w-120 rounded-3xl mt-6">
                        <div className="text-6xl mt-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
                            Contact Me !
                        </div>
                        <div className="grid gap-6">
                            <Instagram/>
                            <Twitter/>
                            <Discord/>
                            <Mail/>
                        </div>
                        <div className="box-border bg-gray-800 mt-8 rounded-xl ml-16 mr-16 shadow-xl">
                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
                                Click on the usernames
                                <br/>
                                to contact me directly :)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border bg-gray-900 h-24">
                    <div className="flex place-content-center">
                        <div className="mt-8 shadow-inner rounded-2xl bg-gray-700">
                            <div className="text-lg mt-1 mb-1 ml-4 mr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
                                Made with 💕
                                <a> by </a>
                                <a href="https://github.com/Soetch/portfolio" className="">Soetch</a>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}