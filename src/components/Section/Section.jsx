import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({children, title, subTitle}) => {
  return (
    <section className={css.sectionPhonebook}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      {children}
    </section>
  )
}

Section.protTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
