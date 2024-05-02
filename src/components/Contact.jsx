const Contact=()=>{
return (
    <div className="flex justify-center h-screen flex-col items-center">
        <h1 className="font-sans text-3xl ">This is a Contact Page</h1>
        <div className="flex mt-3 flex-col gap-3  ">
            <input className="border border-grey p-2" type="text" placeholder="Name" />
            <input className="border border-grey p-2" type="text" placeholder="Message" />
            <button className="bg-green-500 p-2 rounded-md">Submit</button>
        </div>
    </div>
)

}
export default Contact