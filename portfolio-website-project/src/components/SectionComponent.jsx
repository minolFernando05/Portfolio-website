// SectionComponent.jsx
import React from 'react';

const SectionComponent = ({
  imgSrc,
  imgAlt,
  text,
  title2,
  text2,
  sectionClass,
  imgClass,
  textClass,
  titleClass,
  text2Class
}) => {
  return (
    <div className={sectionClass}>
      {imgSrc && <img src={imgSrc} className={imgClass} alt={imgAlt} />}
      {text && (
        <div className={textClass}>
          <p>{text}</p>
        </div>
      )}
      {title2 && (
        <div className={titleClass}>
          <p>{title2}</p>
        </div>
      )}
      {text2 && (
        <div className={text2Class}>
          <p>{text2}</p>
        </div>
      )}
    </div>
  );
};

SectionComponent.defaultProps = {
  imgSrc: null,
  imgAlt: 'default-image-alt',
  text: '',
  title2: '',
  text2: '',
  sectionClass: 'default-section',
  imgClass: 'default-img',
  textClass: 'default-text',
  titleClass: 'default-title',
  text2Class: 'default-text2'
};

export default SectionComponent;
