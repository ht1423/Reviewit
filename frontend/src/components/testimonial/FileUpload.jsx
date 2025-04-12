import React from 'react';

const FileUpload = ({ displayType, handleFileChange, fileName }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 ">
            <label className="bg-pink-600 hover:opacity-70 text-white font-semibold w-[160px] h-[44px] rounded-lg cursor-pointer flex justify-center items-center transition">
                {fileName ? 'Selected' : `Upload ${displayType}`}
                <input
                    type="file"
                    className="hidden"
                    accept={displayType === 'image' ? 'image/*' : 'video/*'}
                    onChange={handleFileChange}
                />
            </label>
            {fileName && (
                <span className="text-gray-300 text-sm truncate max-w-[200px]">{fileName}</span>
            )}
        </div>
    );
};

export default FileUpload;
