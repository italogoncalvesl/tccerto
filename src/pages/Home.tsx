import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start w-full">
      <div className="flex w-fit">
        <SideBar />
      </div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col w-fit items-center justify-center mt-24 ">
          <img
            src={"/logoWhite.svg"}
            alt="Logo"
            width={300}
            height={300}
            className="w-44 2xl:w-56"
          />
          <div className="font-medium text-xl text-white text-center mt-8 2xl:text-2xl">
            Navegue entre as sessões para ser <br /> auxiliado na escrita do seu
            TCC!
          </div>
          <img
            src={"/book.svg"}
            alt="Caderno e lapis"
            width={500}
            height={400}
            className="mt-12 ml-8 w-80 2xl:w-96 2xl:mt-16"
          />
        </div>
      </div>
    </main>
  );
}
