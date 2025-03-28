import picIcon from "../../assets/icons/pic.svg";

interface UploadImageFieldProps {}

export default function UploadImageField(props: UploadImageFieldProps) {
  //! TODO: make get dataURI by images
  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-(--color-gray-light) px-6 py-10">
      <div className="text-center">
        <img className="inline-block" src={picIcon} />
        <div className="mt-2">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:outline-hidden hover:text-primary-dark"
          >
            <span>Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
        </div>
        <p className="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  );
}
