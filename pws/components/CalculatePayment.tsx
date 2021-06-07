import React, { useEffect, useState } from 'react';
import { formatCurrency, getPaymentAmount } from '../utils/servicesUtils';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  whoAsks: 'Oscar' | 'Aleja',
  price: number,
}

const CalculatePayment: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const { register, handleSubmit, watch, formState: { isValid } } = useForm({
    mode: 'onChange',
    shouldFocusError: true,
  });

  const whoIsAsking = watch('whoAsks');
  const price = watch('price');

  const onSubmit: SubmitHandler<FormValues> = ({ price, whoAsks }) => {
    const amountToPay = getPaymentAmount(price)[whoAsks];
    setResult(amountToPay);
    setShowResults(true)
  };

  useEffect(() => {
    setShowResults(false);
  }, [whoIsAsking, price]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center md:flex-row">
        <div
          id="payment__who-asks"
          className="flex flex-col md:mx-4 px-4"
        >
          <h1 className="font-semibold text-center">
            ¿De quién quieres conocer la parte a pagar...?
          </h1>
          <hr />
          <select
            id="payment__who-asks__select"
            className="border-4 my-2 border-red-600 rounded-full px-3 py-2 focus:ring-4 focus:ring-red-400 focus:outline-none text-gray-800"
            { ...register('whoAsks', { required: true }) }
          >
            <option value="Aleja">
              Aleja
                </option>
            <option value="Oscar">
              Oscar
                </option>
          </select>
        </div>
        <hr />
        <div id="payment__price" className="flex flex-col md:mx-4 px-4">
          <label className="font-semibold text-center">
            Precio
          </label>
          <hr />
          <input
            type="number"
            className="border-4 my-2 border-red-600 rounded-md px-3 py-2 focus:ring-4 focus:ring-red-400 focus:outline-none text-gray-800"
            { ...register('price', { required: true }) }
          />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="disabled:opacity-50 h-8 px-3 py-1 bg-red-600 rounded-full hover:bg-red-700 font-bold text-white focus:outline-none"
        >
          <span className="m-auto">
            Calcular
          </span>
        </button>
      </form>
      {showResults && (
        <>
          <hr />
          <div id="results">
            <span>
              {`En ese caso, para ${formatCurrency(Number(price))}, ${whoIsAsking} puede ayudar con ${formatCurrency(result)}`}
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default CalculatePayment;