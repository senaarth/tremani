import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { PageContainer } from "../styles/global";
import { GaleriaContainer, SliderContainer } from "../styles/Galeria";

/**
 * Estrutura Page
 * @return {JSX.Element}
 */

export default function Galeria(): JSX.Element {
  const [emblaRef, embla] = useEmblaCarousel({ draggable: true, loop: true });
  const [slider, setSlider] = React.useState(false);
  const items = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
    "011",
    "012",
    "013",
    "014",
    "015",
    "016",
    "017",
    "018",
  ];

  function handleClick(index: number) {
    const top = document.querySelector("#top");

    top?.scrollIntoView({ behavior: "smooth" });
    embla?.scrollTo(index);

    setSlider(true);
  }

  return (
    <PageContainer style={{ paddingTop: 0 }}>
      <span id="top" />
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
                  src={`/images/${item}.png`}
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
              <img src={`/images/${item}.png`} alt="Imagem galeria" />
            </button>
          );
        })}
      </GaleriaContainer>
    </PageContainer>
  );
}
