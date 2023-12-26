interface Props {
  host: boolean;
  text: string;
}

const Message: React.FC<Props> = ({ host = true, text }) => {
  if (!text) return <></>;

  return (
    <div className={`relative p-2 w-full flex ${host ? 'justify-end' : ''} `}>
      <p className="relative p-2 w-fit max-w-[45%] bg-gray-100 rounded-lg">{text}</p>
    </div>
  );
};

export default Message;
