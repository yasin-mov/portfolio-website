import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target, label, icon, classes }) => {
  const cls = `btn btn-primary ${classes || ""}`;

  if (href) {
    return (
      <a href={href} target={target} className={cls}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={cls}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

ButtonPrimary.defaultProps = {
  target: "_self",
  classes: "",
};

const ButtonOutline = ({ href, target, label, icon, classes }) => {
  const cls = `btn btn-outline ${classes || ""}`;

  if (href) {
    return (
      <a href={href} target={target} className={cls}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={cls}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

ButtonPrimary.defaultProps = {
  target: "_self",
  classes: "",
};
export { ButtonPrimary, ButtonOutline };
