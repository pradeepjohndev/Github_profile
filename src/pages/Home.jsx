import Search_bar from "../components/Search_bar";

export default function Home() {

    return (
        <section className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
            <div className="max-w-xl w-full space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Explore <span className="bg-linear-to-br from-blue-300 to-blue-700 bg-clip-text text-transparent">GitHub</span> Profiles <br />
                    Smarter & Faster
                </h1>

                <p className="text-gray-300 text-lg">
                    Search developers, view repositories, and gain insights - all in one clean interface.
                </p>
                <Search_bar />

            </div>

            <div className="">
                {/*animation*/}
            </div>
        </section>
    );
}
