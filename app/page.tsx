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
      {/* Hero Section */}
      <header className="w-full bg-green-700 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-6 py-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-4">
              Transformăm Cunoașterea în Sănătate!
            </h1>
            <p className="text-lg mb-6">
              APNS promovează alimentația corectă prin programe educaționale în școli și online,
              resurse practice și combaterea bolilor legate de nutriție. Alătură-te comunității noastre!
            </p>
            <a
              href="#"
              className="inline-block bg-white text-green-600 hover:text-green-700 font-medium px-6 py-3 rounded shadow-md transition-colors duration-300"
            > 
              Redirecționează 3.5% impozit
            </a>
          </div>

          <div className="mt-8 md:mt-0 md:pl-10">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/apns.png" 
                alt="Membrii asociației" 
                className="object-cover w-full h-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </header>

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
