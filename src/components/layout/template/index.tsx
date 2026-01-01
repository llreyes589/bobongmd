const Template = ({ header }: any) => {
  return <div className="h-screen bg-white flex flex-col">{header?.()}</div>;
};

export default Template;
