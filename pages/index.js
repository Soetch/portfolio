/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soetch's Home</title>
        <meta property="og:title" content="Soetch's Home"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://soetch.vercel.app/"/>
        <meta property="og:image" content="/soetch.svg"/>
        <meta property="og:description" content="Soetch's Portfolio !"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-3">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className={styles.logo}>
            <Link href="https://soetch.vercel.app">
              <Image src="/soetch.svg" alt="Soetch Logo" width={150} height={38} />
            </Link>
          </span>
        </div>
      </header>

      <main className={styles.main}>
        <div className="">
        <div className="w-full max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl md:flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-black dark:border-gray-700">
          <a href="https://github.com/Soetch/SoetchNoModTemplate-1.16.5">
            <img className="object-cover" src="/minecraft-bg.png" alt="Soetch Logo"></img>
          </a>
          <div className="p-5">
            <a href="https://github.com/Soetch/SoetchNoModTemplate-1.16.5">
              < h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SoetchNoMod Template for Minecraft 1.16.5</h5>
            </a>
            <p className="mb-3 font-normal dark:text-gray-400">A Template for Minecraft Modding by Soetch. Created for the 1.16.5 version.</p>
            <a href="https://github.com/Soetch/SoetchNoModTemplate-1.16.5" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              🚀 See on Github
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <br/>
        <div className="w-full max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl md:flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-black dark:border-gray-700">
          <a href="https://github.com/Hanabi-Corporation/HanabiOres-1.16.5">
            <img className="object-cover" src="/lirium.png" alt="Soetch Logo"></img>
          </a>
          <div className="p-5">
            <a href="https://github.com/Hanabi-Corporation/HanabiOres-1.16.5">
              < h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HanabiOres for Minecraft 1.16.5</h5>
            </a>
            <p className="mb-3 font-normal dark:text-gray-400">Hanabi Ores 1.16.5, a simple Minecraft Mod adding Ores (no joke), Tools and Armors !</p>
            <a href="https://github.com/Hanabi-Corporation/HanabiOres-1.16.5" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              🚀 See on Github
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <br/>
        <div className="w-full max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl md:flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-black dark:border-gray-700">
          <a href="https://github.com/Soetch/soetch.github.io">
            <img className="object-cover" src="/webdev-bg.png" alt="Soetch Logo"></img>
          </a>
          <div className="p-5">
            <a href="https://github.com/Soetch/soetch.github.io">
              < h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Soetch's Home (and portfolio)</h5>
            </a>
            <p className="mb-3 font-normal dark:text-gray-400">The code for the site you're exploring !</p>
            <a href="https://github.com/Soetch/soetch.github.io" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              🚀 See on Github
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>       
      </main>

      <footer className={styles.footer}>
        <div>
        <a
          href="https://github.com/soetch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="Github Logo" width={32} height={32} />
        </a>
        </div>

        <Image src="/line.png" alt="line" width={64} height={32} />

        <div>
        <a
          href="https://twitch.tv/soetch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitch.svg" alt="Twitch Logo" width={32} height={30} />
        </a>
        </div>

        <Image src="/line.png" alt="line" width={64} height={32} />

        <div>
        <a
          href="https://twitter.com/soetch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitter.svg" alt="Twitter Logo" width={32} height={30} />
        </a>
        </div>

        <Image src="/line.png" alt="line" width={64} height={32} />

        <div>
        <a
          href="/discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link href="/discord">
            <Image src="/discord.svg" alt="Discord Logo" width={32} height={30} />
          </Link>
        </a>
        </div>
      </footer>
    </div>
  )
}
