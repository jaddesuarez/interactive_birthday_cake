import { Meteors } from "../Meteors/Meteors";

export const BirthdayMessageModal = () => {
  return (
    <div className="absolute z-50">
      <div className=" w-full relative max-w-md">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex items-center justify-center mb-4 text-4xl">
            🎂
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Happy Birthday!!!
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            On this special day, I hope you are surrounded by love, joy, and all
            the things that bring a smile to your face. You bring so much
            happiness and positivity into the lives of those around you, and
            today is the perfect day to celebrate the amazing person you are.
          </p>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            May your birthday be filled with wonderful moments, beautiful
            memories, and the company of cherished friends and family. As you
            blow out the candles and make a wish, know that you are appreciated
            and loved more than words can express.
          </p>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Here’s to another year of incredible adventures, personal growth,
            and achieving your dreams.
          </p>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};
