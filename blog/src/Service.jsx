function Service(){
return(
    <>
    <div className="bg-blue-200  pl-96">
<div>
<img src="./logo.jpg" className="w-28 h-28 bg-transparent ml-32" />
<nav className="flex flex-row ">
            <a href="# " className="mr-10 text-blue-700 font-bold cursor-pointer">Home</a>
            <a href="#" className="mr-10 text-blue-700 font-bold cursor-pointer">About us</a>
            <a href="#" className="mr-10 text-blue-700 font-bold cursor-pointer">Contact us</a>
            <a href="#" className="mr-10 text-blue-700 font-bold cursor-pointer">Service</a>
        </nav>
        <button>Admin</button><br />
        <button>Buyer</button><br />
        <button>Seller</button>


</div>
    </div>
    </>
)
}
export default Service