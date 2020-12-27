import React from 'react';

export const SectionRow = ({
  main,
  extras,
  screenshotPath,
  screenshotAlt,
  largeSide,
  isDark = false,
}: {
  main: React.ReactNode;
  extras?: React.ReactNode;
  screenshotPath?: string;
  screenshotAlt?: string;
  largeSide: 'left' | 'right';
  isDark?: boolean;
}) => {
  const mainClassName = 'flex-1';

  return (
    <div
      className={`flex px-16 py-16 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-100'
      }`}
    >
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center px-12">
        {largeSide === 'left' ? (
          <div className={`${mainClassName} md:mr-12`}>{main}</div>
        ) : null}

        {screenshotPath && screenshotAlt && (
          <div className="px-2 my-16">
            <img
              className={`max-w-sm shadow-lg transform md:-rotate-6 rounded-xl md:${
                largeSide === 'left' ? 'ml-16' : 'mr-16'
              }`}
              src={screenshotPath}
              alt={screenshotAlt}
            />
          </div>
        )}

        {extras && <div className="max-w-sm p-0.5 my-16">{extras}</div>}

        {largeSide === 'right' ? (
          <div className={`${mainClassName} md:ml-12`}>{main}</div>
        ) : null}
      </div>
    </div>
  );
};
