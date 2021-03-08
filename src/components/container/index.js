import React from "react";

import { container } from './index.module.scss';

const Container = ({ children }) => {
  return (
    <section className={container}>{children}</section>
  )
};

export default Container;
