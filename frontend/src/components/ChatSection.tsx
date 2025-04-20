import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, bgColor, iconColor, icon }) => (
  <div className="flex flex-col gap-6 bg-white p-4 rounded-lg border border-solid border-neutral-200">
    <div
      className={`flex justify-center items-center ${bgColor} p-2 rounded-lg`}
      aria-hidden="true"
    >
      <div className="w-6 h-6" style={{ color: iconColor }}>
        {icon}
      </div>
    </div>
    <div className="w-full flex flex-col gap-2">
      <span className="font-semibold text-sm text-neutral-900">{title}</span>
      <span className="font-normal text-xs text-neutral-600">{description}</span>
    </div>
  </div>
);

const InputBox: React.FC = () => (
  <div className="w-full flex flex-col md:flex-row gap-2">
    <div className="flex flex-col gap-1.5 grow h-10">
      <label htmlFor="chat-input" className="sr-only">
        Ask me anything
      </label>
      <div className="flex gap-2 self-stretch grow bg-neutral-50 px-3.5 py-3 rounded-lg border border-solid border-neutral-200">
        <input
          id="chat-input"
          type="text"
          placeholder="Ask me anything..."
          className="w-full bg-transparent border-none outline-none font-normal text-sm text-neutral-500"
        />
      </div>
    </div>
    <button
      type="submit"
      className="flex justify-center items-center gap-1 bg-neutral-100 px-3.5 py-2.5 rounded"
      aria-label="Submit your query"
    >
      <div className="w-5 h-5">
        <svg
          className="w-[14.034780502319336px] h-[14.016934394836426px] text-neutral-400"
          aria-hidden="true"
        ></svg>
      </div>
      <span className="font-medium text-sm text-neutral-400">Submit</span>
    </button>
  </div>
);

const ChatSection: React.FC = () => {
  const cards = [
    {
      title: "Draft email",
      description: "Generate email for any occasion you need.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-700",
      icon: <svg className="w-5 h-[19.833782196044922px]"></svg>,
    },
    {
      title: "Write an Essay",
      description: "Generate essay for any occasion you need.",
      bgColor: "bg-green-50",
      iconColor: "text-green-700",
      icon: <svg className="w-[17.9705753326416px] h-[17.97056770324707px]"></svg>,
    },
    {
      title: "Planning",
      description: "Plan for any occasion, from holiday to family.",
      bgColor: "bg-fuchsia-50",
      iconColor: "text-fuchsia-600",
      icon: <svg className="w-5 h-[18px]"></svg>,
    },
    {
      title: "Assistant",
      description: "Become your personal assistant. Helping you.",
      bgColor: "bg-amber-50",
      iconColor: "text-orange-500",
      icon: <svg className="w-5 h-[19.5px]"></svg>,
    },
  ];

  return (
    <div className="flex flex-col self-stretch grow bg-white px-4 md:px-16">
      <div className="flex flex-col items-center gap-10 self-stretch grow pt-10 md:pt-20 pb-6">
        <div className="flex flex-col grow">
          <div className="flex flex-col gap-10 grow">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl md:text-3xl text-black text-center">
                Hey, I’m Chat AI. Your AI assistant and companion for any occasion.
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                  iconColor={card.iconColor}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
          <InputBox />
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
