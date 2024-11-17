

export const NavBar = ()=>{
    return (
        <div className="relative border-b flex justify-between items-center py-5 border-blue-950 px-2 md:px-10">
            <img src="/elipse-blue-blur.png" alt="" className="absolute -left-16 -top-[12rem]" />
            <h1 className="font-bold font-poppins relative text-white text-2xl md:text-4xl lg:text-5xl italic">ChienVSChaT</h1>
            <a className="flex items-center text-sm md:text-base gap-3 bg-blue-700 text-white font-bold px-4 md:px-8 py-1 rounded hover:bg-blue-800 transition-all" href="">
                    <span className="hidden md:block">Voir le repo git</span><img src="/GitHub_Invertocat_Logo.svg.png" className="h-8 w-8 md:w-10 md:h-10" alt="" />
            </a>
        </div>
    )
}