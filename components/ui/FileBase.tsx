"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { IoDocumentAttachOutline } from "react-icons/io5";

interface FileBaseProps {
  value: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | null) => void;
  name: string;
  id: string;
  required?: boolean;
}

const FileBase: React.FC<FileBaseProps> = ({
  value,
  onChange,
  name,
  id,
  required,
  ...props
}) => {
  return (
    <div>
      <div className="p-4 border border-dashed border-primary-500 rounded-md text-center">
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={onChange}
          required
          {...props}
        />
        <label htmlFor="file">
          <div className="icon mb-2">
            <IoDocumentAttachOutline
              className="text-primary-500 mx-auto"
              size={30}
            />
          </div>
          <h6 className="text-sm text-primary-500">UPLOAD NATIONAL ID</h6>
        </label>
      </div>

      <div className="mt-3">
        {value && (
          <div className="bg-primary-50 p-2 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h6 className="text-ms text-primary-500 tracking-widest mb-1">
                  {value?.name!}
                </h6>
                <div className="flex items-center gap-2">
                  <IoDocumentAttachOutline
                    size={20}
                    className="text-primary-500"
                  />
                  <span className="text-gray-500 text-[12px]">PDF, 20MB</span>
                </div>
              </div>
              <button
                className="text-red-500"
                onClick={() => onChange(null)}
                type="button"
              >
                <AiOutlineDelete size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileBase;
