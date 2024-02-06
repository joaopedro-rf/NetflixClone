const UserCard = () => {
    return(
        
        <div className="flex-row group w-36 mx-auto my-16">
            <div className="w-36 rounded-md flex items-center border-4 border-transparent group-hover:border-white ">
              <img
                src="../public/images/icon-blue.png"
                alt="Profile icon"
              ></img>
            </div>
            <h3 className="mt-4 text-zinc-400 text-xl text-center group-hover:text-white">
              User 1
            </h3>
            
          </div>
    )
}

export default UserCard;
