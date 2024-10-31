import gitHubLogo from "../assets/GitHub-logo.png"

const Footer = () => {
  return (
    <div className="footer">
      
      <a href="https://github.com/nehais/apartment-rental"><img src={gitHubLogo} alt="Git Hub Logo" className="git-logo"></img></a>
    </div>
  );
};

export default Footer;
