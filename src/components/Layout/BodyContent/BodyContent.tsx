export interface Props {
  children: React.ReactNode;
  className?: string;
}

const BodyContent: React.FC<Props> = ({ children, className }) => {
  return <div className="max-h-screen w-full overflow-x-hidden">{children}</div>;
};

export default BodyContent;
