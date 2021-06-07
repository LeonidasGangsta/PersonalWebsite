import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import CalculatePayment from '../components/CalculatePayment';

const Services: React.FC = () => {
  const [showPaymentService, setShowPaymentService] = useState<boolean>(false);

  const toggleShowPaymentService = () => {
    setShowPaymentService(!showPaymentService)
  };

  return (
    <div className="shadow p-4 flex flex-col align-middle">
      <div className="flex relative pr-10">
        <h1 className="font-semibold uppercase text-center">
          Calculá lo que necesites pagar
          </h1>
        <button
          className="focus:outline-none absolute right-4 rounded-full bg-red-700 hover:bg-red-600"
          onClick={toggleShowPaymentService}
        >
          {showPaymentService ? (
            <ChevronUpIcon className="h-7 w-7 text-white" />
          ) : (
            <ChevronDownIcon className="h-7 w-7 text-white" />
          )}
        </button>
      </div>
      {showPaymentService && (
        <>
          <hr className="my-4" />
          <CalculatePayment />
        </>
      )}
    </div>
  );
};

export default Services;
