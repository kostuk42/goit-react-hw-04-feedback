import React from 'react';
import propTypes from 'prop-types';

// import styles from './Section.module.css';

const Section = ({ title, children, total }) => (
    <section>
        <h2>{title}</h2>
        
        { children }
        
    </section>
)
Section.propTypes = {
    title: propTypes.string.isRequired,
    total: propTypes.number,
    children: propTypes.any.isRequired
};
export default Section;