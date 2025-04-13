import picIcon from "../../assets/icons/pic.svg";

export default function UploadImageField() {
  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-(--color-gray-light) px-6 py-10">
      <div className="text-center">
        <img className="inline-block" src={picIcon} />
        <div className="mt-2">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:outline-hidden hover:text-primary-dark"
          >
            <span>Subir Imagen</span>
          </label>
        </div>
        <p className="text-xs/5 text-gray-400">
          PNG, JPG, JPEG o WEBP hasta 5MB
        </p>
      </div>
    </div>
  );
}
