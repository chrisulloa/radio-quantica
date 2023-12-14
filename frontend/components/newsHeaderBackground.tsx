import ShareButton from "./shareButton";

export function NewsHeaderBackground({ title }: { title: string }) {
  return (
    <div className="bg-white w-full">
      <div className="flex w-full justify-end pr-6 py-4 relative z-1">
        <ShareButton black={true} text={title}></ShareButton>
      </div>
      <h2 className="text-3xl text-black w-full h-full sm:pt-[1.0rem] pb-5 px-5">
        {title}
      </h2>
    </div>
  );
}
