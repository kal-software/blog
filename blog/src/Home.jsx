function Home(){
return(
    <>
    <div className="bg-blue-200 h-full pl-96">
        <div >
        <img src="./logo.jpg" className="w-36 h-36 bg-transparent ml-32" />
    <h1 className="text-4xl ml-10 mt-1">Minstry of Finance</h1>
        </div>
   
    <div>
        <nav className="flex flex-row ">
            <a href="# " className="mr-10 text-blue-700 font-bold cursor-pointer">Home</a>
            <a href="#" className="mr-10 text-blue-700 font-bold cursor-pointer">About us</a>
            <a href="#" className="mr-10 text-blue-700 font-bold cursor-pointer">Contact us</a>
            <a href="#" className="mr-10 text-blue-700 font-bold cursor-pointer">Service</a>
        </nav>
        <h1 className="text-4xl font-serif ml-24 mt-3 text-red-700">Welcome!</h1>
    </div>
    </div>
    </>
)
}
export default Home