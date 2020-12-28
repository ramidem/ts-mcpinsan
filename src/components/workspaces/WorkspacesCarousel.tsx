import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { useInnerWidth } from "../../utils";
import { CAROUSEL_IMAGES } from "../../assets/data";

import "./WorkspacesCarousel.scss";
const WorkspacesCarousel: React.FC = () => {
  const innerWidth = useInnerWidth();

  const gallery = CAROUSEL_IMAGES.map((image) => {
    let images;
    if (innerWidth > 767) {
      images = (
        <picture key={image.alt}>
          <source srcSet={image.webp} type="image/webp" />
          <source srcSet={image.src} type="image/jpeg" />
          <img
            src={image.src}
            alt={image.alt}
            width="960px"
            height="540px"
            className="img-fluid"
          />
        </picture>
      );
    }
    if (innerWidth <= 767) {
      images = (
        <Carousel.Item interval={2000} key={image.alt}>
          <picture key={image.alt}>
            <source srcSet={image.webp} type="image/webp" />
            <source srcSet={image.src} type="image/jpeg" />
            <img
              src={image.src}
              alt={image.alt}
              width="960px"
              height="540px"
              className="d-block w-100"
            />
          </picture>
        </Carousel.Item>
      );
    }
    return images;
  });

  return (
    <>
      <Container fluid>
        <Row>
          <div className="fullwidth-gallery">{gallery}</div>
        </Row>

        <Row className="d-md-none">
          <Carousel className="gallery__carousel">{gallery}</Carousel>
        </Row>
      </Container>
    </>
  );
};

export default WorkspacesCarousel;
