import PropTypes from 'prop-types';

export function Input({ id, width, textarea, placeholder, type, value, error, readOnly, onChange }) {
  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(e.target.value);
  };

  if (readOnly) {
    return (
      <div className="flex flex-wrap mb-1">
        <span className="h-8 py-2 px-3 w-36">{placeholder} :</span>
        <span className={`${textarea ? ' h-16 ' : ' h-8 '} text-sm py-2 px-3 font-light ${width ? width : 'w-full'}`}>{value}</span>
      </div>
    );
  }

  // Conditional CSS classes
  const widthClass = width || 'w-full';
  const borderClass = error ? 'border-red-500' : 'border-gray-300';

  return (
    <div className="flex flex-wrap mb-3 px-3">
      <span className="h-8 py-2 w-28">{placeholder} :</span>
      <div className="flex flex-col">
        {textarea ? (
          <textarea
            rows={3}
            maxLength={50}
            value={value}
            className={`${widthClass} ${borderClass} rounded appearance-none border bg-white py-2 px-3 font-light text-sm focus:outline-none focus:border-indigo-200 focus:shadow-outline focus:shadow-input resize-none`}
            onChange={handleChange}
          />
        ) : (
          <input
            className={`${widthClass} ${borderClass} rounded-full appearance-none h-8 border bg-white py-2 px-3 font-light text-sm focus:outline-none focus:border-indigo-200 focus:shadow-outline focus:shadow-input`}
            id={id}
            type={type || 'text'}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
          />
        )}

        {error ? <p className="text-red-500 text-xs italic">{error}</p> : null}
      </div>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  textarea: PropTypes.bool,
  value: PropTypes.any,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChange: PropTypes.func.isRequired,
};
