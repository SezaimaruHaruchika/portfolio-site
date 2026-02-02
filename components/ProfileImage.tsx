import Image from "next/image";

export const ProfileImage = () => {
  return (
    <div className="hidden md:flex md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 items-center justify-center min-h-[200px]">
      <div className="relative w-32 h-32 rounded-full bg-neutral-800 flex items-center justify-center text-3xl border-2 border-neutral-700 overflow-hidden">
        <Image
          src="/profile.png"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
