import React, { useRef } from 'react'
import CheckManufacturer from './CheckManufacturer'
import CheckDrug from './CheckDrug'
import Hero from "../imgs/hero.svg"

const Home = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    var myRef = useRef(null)
    const executeScroll = () => {
        scrollToRef(myRef)
        myRef = elementRef.current.scrollIntoView({ behavior: 'smooth' })

    }
    return (
        <>
            <section>
                <div class="bg-white">
                <div class="
          2xl:max-w-7xl
          sm:px-6
          md:px-12
          lg:px-24 lg:py-20
          2xl:px-12
          px-4
          py-12
          mx-auto
        ">
                    <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
                        <div class="
              lg:flex-grow lg:w-1/2 lg:pr-24
              md:mb-0
              flex flex-col
              items-start
              mb-16
              text-left
            ">
                            <h1 class="
                text-neutral-600
                md:text-7xl
                lg:text-5xl
                mb-8
                text-4xl
                font-bold
                leading-none
                tracking-tighter
              "> 
              Counterfeit Drugs using Blockchain technology </h1>
                            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">Using blockchain technology, we can reduce the possibilities of counterfeit. This technology stops the entry of fake drugs into the supply chain, mainly the part between the manufacturer and consumer.</p>
                            <dl class="md:grid-cols-2 grid grid-cols-1 gap-12">
                                <div>
                                    <dt class="
                    bg-blue-50
                    inline-flex
                    items-center
                    justify-center
                    flex-shrink-0
                    w-12
                    h-12
                    mb-5
                    text-blue-600
                    rounded-full
                  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
  <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"/>
</svg>
                                    </dt>
                                    <dd class="flex-grow">
                                        <h2 class="
                      text-neutral-600
                      mb-3
                      text-lg
                      font-medium
                      tracking-tighter
                    "> Check the Drugs </h2>
                                        <p class="text-base leading-relaxed text-gray-400">Check about the current owner and history of owners of the drugs.</p>
                                        <a onClick={executeScroll} class="
                      md:mb-2
                      lg:mb-0
                      hover:text-neutral-600
                      inline-flex
                      items-center
                      mt-6
                      cursor-pointer
                      font-semibold
                      text-blue-500
                    " title="scroll down"><svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt class="
                    bg-blue-50
                    inline-flex
                    items-center
                    justify-center
                    flex-shrink-0
                    w-12
                    h-12
                    mb-5
                    text-blue-600
                    rounded-full
                  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>
                                    </dt>
                                    <dd class="flex-grow">
                                        <h2 class="
                      text-neutral-600
                      mb-3
                      text-lg
                      font-medium
                      tracking-tighter
                    "> Check Entity</h2>
                                        <p class="text-base leading-relaxed text-gray-400">Verify the Entity is genuine or not.</p>
                                        <a href="#checkManufacturer" onClick={executeScroll} class="
                      md:mb-2
                      lg:mb-0
                      hover:text-neutral-600
                      inline-flex
                      items-center
                      mt-6
                      font-semibold
                      text-blue-500
                    " title="scroll down">
                        <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div class="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
                            <div>
                                <div class="relative w-full max-w-lg">
                                    <div class="
                    bg-violet-300
                    -left-4
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                    absolute
                    top-0
                    rounded-full
                  "></div>
                                    <div class="
                    bg-fuchsia-300
                    -bottom-24
                    right-20
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                    animation-delay-4000
                    absolute
                    rounded-full
                  "></div>
                                    <div class="relative">
                                        <img class="object-cover object-center mx-auto " alt="hero" src={Hero} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0" ref={myRef} id="box">
                        <div class="grid grid-cols-1">
                            <CheckDrug />
                            <CheckManufacturer />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home