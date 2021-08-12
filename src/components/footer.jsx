import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <h4 className="heading-footer">Find me on</h4>
        <p>
          <a href="https://github.com/srishti-maurya">
            <i class="fab fa-github"></i> GitHub
          </a>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <a href="https://www.linkedin.com/in/mauryasrishti22/">
            <i class="fab fa-linkedin"></i> Linkedin
          </a>
        </p>
        <p className="body-copyright">
          Designed and Developed with <span>❤️</span> by Srishti Maurya,
          Copyright <span>©</span> {year}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
