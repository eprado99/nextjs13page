import Image from "next/image";

export const Cover = ({ children, background }: any) => {
  return (
    <div className="h-screen text-white relative min-h-[400px] flex justify-center items-center">
      {!!background && (
        <Image
          alt="Cover"
          src={background}
          fill
          className="mix-blend-soft-light object-cover"
        />
      )}
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};