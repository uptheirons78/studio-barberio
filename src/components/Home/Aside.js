import React from "react";

const Aside = () => {
  return (
    <div className="col-md-4 mb-5">
      <h2 className="heading-2">Contact Us</h2>
      <hr />
      <address>
        <strong>Start Bootstrap</strong>
        <br />
        3481 Melrose Place
        <br />
        Beverly Hills, CA 90210
        <br />
      </address>
      <address>
        <abbr title="Phone">P:</abbr>
        (123) 456-7890
        <br />
        <abbr title="Email">E:</abbr>
        <a href="mailto:/">name@example.com</a>
      </address>
    </div>
  );
};

export default Aside;