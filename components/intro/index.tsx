import React from 'react'
import './index.scss'

const Intro = () => (
  <section className="intro">
    <p>Hello!</p>
    <p>
      My name is <strong>Hazmi Abdun Nazir</strong>.
      I create mobile apps and websites, as a hobby and for a living.
    </p>
    <section>
      <h3>Contact</h3>
      <p>
        If you need anything, I'm on <a href="https://www.linkedin.com/in/hazmi-abdun-nazir/">LinkedIn</a>, <a href="https://github.com/hazmi">GitHub</a> or <a href="https://twitter.com/hazmi">Twitter</a>.
      </p>
    </section>
    <section>
      <h3>About this site</h3>
      <p>This site is built using <a href="https://nextjs.org/">Next.js</a>, a <a href="https://reactjs.org/">React</a> Framework.</p>
      <p><em>[will write more about the site]</em></p>
    </section>
  </section>
);

export default Intro;