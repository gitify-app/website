import React from 'react';

export const SectionRow = ({
  main,
  side,
  mainSide,
  isDark = false,
}: {
  main: React.ReactNode;
  side: React.ReactNode;
  mainSide: 'left' | 'right';
  isDark?: boolean;
}) => {
  const mainClassName = 'flex-1 px-12';

  return (
    <div
      className={`flex px-16 py-16 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-100'
      }`}
    >
      <div className="container max-w-5xl mx-auto flex flex-wrap items-center ">
        {mainSide === 'left' ? (
          <div className={`${mainClassName} md:mr-12`}>{main}</div>
        ) : null}

        <div className="">{side}</div>

        {mainSide === 'right' ? (
          <div className={`${mainClassName} md:ml-12`}>{main}</div>
        ) : null}
      </div>
    </div>
  );
};
