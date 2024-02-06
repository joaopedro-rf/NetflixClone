import UserCard from "./components/UserCard";

const Profile = () => {
  return (
    <div className="bg-black flex items-center h-screen justify-center">
      <div className="flex flex-col">
        <h1 className="text-white text-center text-5xl font-medium">
          Who is watching?
        </h1>
        <div className="flex gap-8">
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
