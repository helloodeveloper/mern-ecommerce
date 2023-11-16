import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Banners() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-[577/310] w-[36.0625rem] bg-gray-200" />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-[577/310] w-[36.0625rem]  bg-gray-200" />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">Discover Savings : </strong>
              <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              Explore exclusive deals with 20% off across our site! Limited time offer. 🌟#
              <strong className="text-md font-serif underline">SHOPSMART</strong>
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleClose}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
