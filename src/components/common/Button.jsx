import PropTypes from 'prop-types';

export function Button({ children, width, color, disabled, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const widthClass = width ? width : 'w-full';
  return (
    <button
      className={`flex justify-center text-sm font-light ${color} rounded-full items-center text-center leading-3.5 disabled:opacity-50 disabled:cursor-not-allowed h-8 ${widthClass} focus:outline-none text-white`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.COLOR_RED = 'bg-red-500';
Button.COLOR_GREEN = 'bg-green-500';
Button.COLOR_INDIGO = 'bg-indigo-500';
