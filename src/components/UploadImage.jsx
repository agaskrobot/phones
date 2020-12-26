import PropTypes from 'prop-types';

export function UploadImage({ id, imgSrc, readOnly, onChange }) {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.files[0]);
  };

  let imageReadOnly;
  if (imgSrc) {
    imageReadOnly = <img className="border border-gray-300 w-64 h-64 z-1" src={imgSrc} alt="avatar" />;
  } else {
    imageReadOnly = (
      <div className="flex justify-center items-center text-gray-700 w-64 h-64 border border-gray-300">
        No image available
      </div>
    );
  }

  let imageEditable;
  if (imgSrc) {
    imageEditable = <img className="group-hover:opacity-50 absolute w-64 h-64 z-1" src={imgSrc} alt="avatar" />;
  } else {
    imageEditable = (
      <div className="group-hover:opacity-50 group-hover:text-gray-300 flex justify-center items-center absolute w-64 h-64 z-1">Upload Image</div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {readOnly ? (
        imageReadOnly
      ) : (
        <>
          <label
            className="flex group relative w-64 h-64 border border-gray-300 cursor-pointer justify-center items-center p-1 mb-4 bg-cover bg-white hover:bg-black hover:bg-opacity-25"
            htmlFor={id}
          >
            {imageEditable}
            <span className="relative flex z-20 text-black font-medium text-lg text-opacity-0 group-hover:text-opacity-100">
              Change
            </span>
          </label>
          <input
            type="file"
            id={id}
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            onClick={(event) => {
              event.target.value = null;
            }}
            style={{ display: 'none' }}
          />
        </>
      )}
    </div>
  );
}
UploadImage.propTypes = {
  id: PropTypes.any,
  readOnly: PropTypes.bool,
  imgSrc: PropTypes.string,
  onChange: PropTypes.func,
};
