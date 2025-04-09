import React from 'react';

const FileUpload = ({ displayType, handleFileChange }) => {
    return (
        <div className="flex items-center justify-center">
            <label className="bg-pink-500 hover:opacity-70 text-white font-semibold py-2 px-6 rounded cursor-pointer transition">
                <input
                    type="file"
                    accept={displayType === 'image' ? 'image/*' : 'video/*'}
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default FileUpload;
