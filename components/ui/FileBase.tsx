"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { IoDocumentAttachOutline } from "react-icons/io5";

interface FileBaseProps {
  name: string;
  id: string;
  required?: boolean;
}

const FileBase: React.FC<FileBaseProps> = ({
  name,
  id,
  required = false,
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

      <div className="mt-3"></div>
    </div>
  );
};

export default FileBase;
