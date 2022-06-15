import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { PageContainer } from "../styles/global";
import { GaleriaContainer, SliderContainer } from "../styles/Galeria";

/**
 * Galeria Page
 * @return {JSX.Element}
 */

export default function Galeria(): JSX.Element {
  const [emblaRef, embla] = useEmblaCarousel({ draggable: true, loop: true });
  const [slider, setSlider] = React.useState(false);
  const items = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
  ];

  function handleClick(index: number) {
    window?.scroll({ top: 0, left: 0, behavior: "smooth" });
    embla?.scrollTo(index);

    setSlider(true);
  }

  return (
    <PageContainer style={{ paddingTop: "6rem" }}>
      <SliderContainer className={slider ? "visible" : ""}>
        <div className="control left">
          <button
            type="button"
            onClick={() => {
              if (!embla) return;
              embla?.scrollPrev();
            }}
          >
            <img src="/images/arrow.png" alt="Icone flecha" />
          </button>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {items?.map((item) => {
              return (
                <img
                  key={`galeria-${item}`}
                  className="embla__slide"
                  src={`/images/D${item}.jpg`}
                  alt="Slide da galeria"
                />
              );
            })}
          </div>
        </div>
        <div className="control right">
          <button
            type="button"
            onClick={() => {
              if (!embla) return;
              embla?.scrollNext();
            }}
          >
            <img src="/images/arrow.png" alt="Icone Flecha" />
          </button>
        </div>
      </SliderContainer>
      <GaleriaContainer style={{ marginTop: "2rem" }}>
        {items.map((item) => {
          return (
            <button
              key={`galeria-${item}`}
              type="button"
              onClick={() => handleClick(parseInt(item, 10) - 1)}
            >
              <img src={`/images/${item}.jpg`} alt="Imagem galeria" />
            </button>
          );
        })}
      </GaleriaContainer>
    </PageContainer>
  );
}
