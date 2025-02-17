import profilePic from "../../../assets/images/hero-image/hero-profile-ice.jpeg";

const PortPhoto = () => {
  return (
    <div className="flex justify-center mx-auto w-2/3 rounded-xl">
      <img
        className="size-3/4 border-8 border-woodland-secondary rounded-lg shadow-xl"
        src={profilePic}
        alt="A picture of this developer (Milo Chambers) infront of a glacier."
      />
    </div>
  );
};

export default PortPhoto;
