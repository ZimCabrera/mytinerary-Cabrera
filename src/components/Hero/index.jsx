

export default function Hero(children) {
  return (
    <section className={`relative  w-full overflow-hiddenh-full h-screen min-h-[550px] snap-start" : null}`}>
      <div className={`z-10 relative w-full flex items-center h-full min-h-[250px] lg:min-h-[300px] h-small" : "min-h-[550px]"}`}>
        <div className="w-full px-3 sm:px-5 lg:px-10 2xl:px-0 z-10">
          <div className={`flex items-center max-w-7xl w-full mx-auto : null}`}>
            <div className={`sm:w-96 lg:w-6/12 [&>p]:my-14 mt-5 h-full : null} flex flex-col justify-center items-center [&>h2]:text-center [&>p]:text-center [&>p]:my-14 max-w-md  w-full mx-auto lg:max-w-5xl " : null} h-full [&>p]:mt-5 [&>p]:mb-0" : null}`}>
              <h2 className={`text-4xl font-bold`}>khbhjvhjvj,</h2>
              <p className={`text-xl lg:text-2xl my-12 lg:my-10 `}>gvyvjh</p>
              {children}
            </div>
          </div>
        </div>

        <div className="absolute top-0 bottom-0 h-full w-full">
          <img src="./assets/hero-image.jpg" alt="background" className="h-full w-full object-cover brightness-50" />
        </div>
      </div>
    </section>
  );
}

