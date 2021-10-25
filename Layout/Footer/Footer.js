import css from './Footer.module.scss';

const Footer = ({ className }) => {
  return (
    <footer className={`${className} ${css.footer}`}>
      <h4>i r footer</h4>
    </footer>
  );
};

export default Footer;
