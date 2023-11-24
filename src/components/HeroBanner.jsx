import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";

const HeroBanner = ({ heroBanner }) => {
  const {
    smallText,
    buttonText,
    image,
    desc,
    discount,
    largeText1,
    largeText2,
    midText,
    product,
    saleTime,
  } = heroBanner;

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
        <div className="desc">
          <h5>DESCRIPTION</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
