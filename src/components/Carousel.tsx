
import { FC, useState, ReactNode } from 'react';
import Button from './Button';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: FC <CarouselProps> = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState(0);

  const nextComponent = () => {
    setCurrentComponent((currentComponent + 1) % children.length);
  };

  const prevComponent = () => {
    setCurrentComponent((currentComponent - 1 + children.length) % children.length);
  };

  return (
    <div className="relative transition-all duration-300">
      <div className='flex justify-center gap-4 mb-2'>
        <div className="absolute top-1/2 w-full flex justify-between z-20">
          <label onClick={prevComponent} className="inline-block text-red-600 cursor-pointer ml-2 rounded-full shadow-md active:translate-y-0.5 hover:scale-110 transition-all duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="#404040">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>
          </label>

          <label onClick={nextComponent} className="inline-block text-red-600 cursor-pointer mr-2 rounded-full shadow-md active:translate-y-0.5 hover:scale-110 transition-all duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="#404040">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </label>
        </div>
      </div>

      <div
        className=""
      >
        {children[currentComponent]}
      </div>

    </div>
  );
};

export default Carousel;