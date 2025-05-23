import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  // return (
  //   <div className="w-full bg-white"></div>

  //   // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  // );
  return (
    <>

      <section className="bg-primary">
        <div className="flex w-full flex-col md:flex-row">
          {/* Left (White) Section, now vertically centered */}
          <div className="flex-1 md:w-1/2 bg-gray-100 px-4 md:px-10 xl:px-[108px] py-10 flex items-center">
            <div className="max-w-[600px] mx-auto">
              <h1 className="text-black mb-5 text-3xl md:text-4xl xl:text-5xl xl:leading-[4rem] font-bold">
                Transformăm Cunoașterea în Sănătate!
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                APNS promovează alimentația corectă prin programe educaționale în școli și online,
                resurse practice și combaterea bolilor legate de nutriție. Alătură-te comunității noastre!
              </p>
              <div>
                <a
                  href="#"
                  className="font-bold text-xl inline-block text-white px-8 py-4 hover:scale-105 duration-300 relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-green-700 hover:from-green-400 hover:via-emerald-400 hover:to-green-700 animate-gradient-pulse hover:shadow-lg transition-all"
                >
                  Redirecționează 3.5% impozit
                </a>

                <style jsx global>{`
      @keyframes gradient-pulse {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}</style>

                <style jsx>{`
      .animate-gradient-pulse {
        background-size: 200% 200%;
        animation: gradient-pulse 2s ease infinite;
      }
    `}</style>
              </div>
            </div>
          </div>

          {/* Right (Green) Section */}
          <div className="flex-1 md:w-1/2 bg-green-700 p-10 flex items-center justify-start relative overflow-visible">
            <div className="relative z-10 -ml-12 md:-ml-36">
              <div className="border-y-[20px] border-r-[20px] border-gray-100 py-12 pr-12">
                <div className="relative">
                  {/* Make the image bigger by changing these classes as needed */}
                  <img
                    src="/images/apns.png"
                    alt="Four senior men and women out for a hike"
                    className="w-[1000px] h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">

          {/* Card 1: Diabet */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Diabet
            </h3>
          </a>

          {/* Card 2: Obezitate */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Obezitate
            </h3>
          </a>

          {/* Card 3: Boli Cardiovasculare */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Boli Cardiovasculare
            </h3>
          </a>

          {/* Card 4: Ciroză */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21H3z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Ciroză
            </h3>
          </a>

          {/* Card 5: Hipertensiune */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Hipertensiune
            </h3>
          </a>

          {/* Card 6: Colesterol Ridicat */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Colesterol Ridicat
            </h3>
          </a>

          {/* Card 7: Deficiențe Nutriționale */}
          <a
            href="#"
            className="shadow-lg group relative flex flex-col items-center bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 ease-in-out min-h-[160px] justify-center transform hover:-translate-y-2.5"
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-500 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 leading-tight">
              Deficiențe Nutriționale
            </h3>
          </a>

        </div>
      </main>
      {/* Main Content Sections */}
      <section className="bg-white mt-20">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:pb-24">
          <div className="space-y-8 lg:space-y-20">
            {/* First Content Block */}
            <div className="items-center gap-8 xl:gap-16 md:grid md:grid-cols-2">
              <img
                className="w-full rounded-lg shadow-lg hidden sm:block"
                src="/images/image1.png"
                alt="Workshop nutrițional"
                width={600}
                height={400}
              />
              <div className="mt-0">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Asociația noastră promovează nutriția echilibrată
                </h2>
                <p className="mb-6 text-gray-500 md:text-lg">
                  De 10 ani, educăm copii și adulți în peste 150 de școli din România. Colaborăm cu nutriționiști
                  certificați pentru a crea programe practice de nutriție și meniuri sănătoase adaptate nevoilor comunității.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-green-700 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Implică-te
                    <svg
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:ring-gray-100 justify-center inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Despre noi
                  </a>
                </div>
              </div>
            </div>

            {/* Second Content Block */}
            <div className="items-center gap-8 xl:gap-16 md:grid md:grid-cols-2">
              <div className="mb-4 md:mb-0">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Alătură-te comunității noastre pentru o viață mai sănătoasă
                </h2>
                <p className="mb-6 text-gray-500 md:text-lg">
                  Participă la cursurile noastre de gătit sănătos, challenge-urile lunare de nutriție sau ascultă podcast-ul
                  săptămânal cu specialiști în domeniu. Toate resursele sunt gratuite și accesibile online.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-green-700 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Vezi toate activitățile
                    <svg
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                className="w-full rounded-lg shadow-lg hidden sm:block"
                src="/images/donate.png"
                alt="Comunitate APNS"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
          <div className="grid items-center grid-cols-1 gap-12 xl:grid-cols-3 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                APNS în numere: Impactul nostru colectiv
              </h2>
              <p className="text-gray-500 sm:text-xl">
                Împreună construim un viitor mai sănătos
              </p>
              <div>
                <a href="#" className="inline-flex items-center text-lg font-medium text-green-700 hover:underline">
                  Află mai multe
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 xl:col-span-2 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                  <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">Implicare în școli</h3>
                <p className="mt-2 text-gray-500">
                  Am educat peste 500 de elevi prin programul "Sănătate în ghiozdan"
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                  <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">Resurse practice</h3>
                <p className="mt-2 text-gray-500">
                  Peste 300 de rețete sănătoase disponibile gratuit în platforma noastră
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                  <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">Evenimente comunitare</h3>
                <p className="mt-2 text-gray-500">
                  Organizăm anual 10+ workshop-uri practice în întreaga țară
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                  <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">Susținere continuă</h3>
                <p className="mt-2 text-gray-500">
                  150+ abonați la newsletter-ul lunar cu sfaturi nutriționale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Noutăți și resurse utile</h2>
          <p className="text-lg text-gray-600 mb-10">
            Rămâi la curent cu proiectele și materialele noastre
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="/images/recipe.png"
                alt="Rețete sănătoase"
                className="rounded-lg mb-4 w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="mb-3 text-green-600 font-semibold text-sm uppercase">Blog</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">20 de rețete sănătoase pentru micul dejun</h3>
              <p className="text-gray-600 mb-4">Descarcă ghidul gratuit cu preparate echilibrate pentru începutul perfect al zilei</p>
              <a href="#" className="text-green-700 hover:text-green-900 font-medium">Descarcă acum →</a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="/images/campanie.png"
                alt="Campanie școli"
                className="rounded-lg mb-4 w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="mb-3 text-green-600 font-semibold text-sm uppercase">Eveniment</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Campania națională în școli - ediția 2024</h3>
              <p className="text-gray-600 mb-4">Înscrie școala ta în programul gratuit de educație nutrițională</p>
              <a href="#" className="text-green-700 hover:text-green-900 font-medium">Înscrie-te →</a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                alt="Cumpărături sănătoase"
                className="rounded-lg mb-4 w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="mb-3 text-green-600 font-semibold text-sm uppercase">Ghid practic</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Cum să alegi alimentele în supermarket</h3>
              <p className="text-gray-600 mb-4">Învață să citești etichetele nutriționale ca un profesionist</p>
              <a href="#" className="text-green-700 hover:text-green-900 font-medium">Citește ghidul →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Obesity Stats Section */}
      <section className="bg-gray-50 relative py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Obezitatea în România - date alarmante
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Conform ultimelor studii Ministerului Sănătății (2023)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 rounded shadow-sm flex flex-col items-center">
              <div className="text-5xl font-bold text-green-700 mb-2">34%</div>
              <p className="text-center text-gray-700">dintre români au exces de greutate</p>
            </div>
            <div className="p-6 bg-green-50 rounded shadow-sm flex flex-col items-center">
              <div className="text-5xl font-bold text-green-700 mb-2">1 din 5</div>
              <p className="text-center text-gray-700">copii de vârstă școlară este supraponderal</p>
            </div>
            <div className="p-6 bg-green-50 rounded shadow-sm flex flex-col items-center">
              <div className="text-5xl font-bold text-green-700 mb-2">62%</div>
              <p className="text-center text-gray-700">dintre adulți nu consumă suficiente legume</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 mt-10">
            Prevenția începe pe farfurie! Alătură-te programelor noastre pentru a învăța să faci alegeri alimentare informate.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Devino voluntar
            </a>
            <a
              href="#"
              className="inline-block border-2 border-green-600 text-green-600 font-semibold px-6 py-3 rounded shadow-md hover:bg-green-700 hover:text-white transition-colors duration-300"
            >
              Împărtășește povestea ta
            </a>
          </div>
        </div>
      </section>

      {/* BMI Test Section */}
      <section className="w-full bg-green-700 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cunoaște-ți riscul pentru sănătate!</h2>
          <p className="text-lg mb-8">
            Calculează-ți gratuit Indicele de Masă Corporală (IMC) și primești recomandări personalizate de la
            nutriționistul nostru.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-green-600 font-medium px-6 py-3 rounded shadow-md hover:text-green-700 transition-colors duration-300"
            >
              Test IMC Gratuit
            </a>
            <a
              href="#"
              className="border-2 border-white text-white font-medium px-6 py-3 rounded hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Prevenirea obezității
            </a>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Susține educația nutrițională!</h2>
              <p className="text-gray-700 mb-6">
                Poți redirecționa 3.5% din impozitul pe venit către APNS fără costuri suplimentare.
                Fondurile strânse susțin programele noastre în școli și crearea de resurse educaționale.
              </p>
              <a
                href="#"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition-colors duration-300"
              >
                Redirecționează 3.5% impozit
              </a>
            </div>

            <div className="md:w-1/2">
              <img
                src="/images/donate2.png"
                alt="Copii în clasă"
                className="w-full rounded-lg shadow"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
