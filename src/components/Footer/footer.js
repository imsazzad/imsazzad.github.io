import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({footerClass}) => (
  <div className={`defaultFooter ${footerClass}`}>
      <p>View site source on <a href="https://github.com/sazzadBuet08/abdulhasib.github.io">Github</a> | Designer <a
          href="https://www.linkedin.com/in/md-abdul-hasib-sazzad-19b88099/">Md Abudl Hasib</a></p>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer
