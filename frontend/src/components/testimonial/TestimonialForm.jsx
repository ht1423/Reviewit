import React from 'react';
import Input from '../auth/Input';


const TestimonialForm = ({ setName, setContent, displayType, mediaOnly }) => {
    return (
        <div className="space-y-4">
        <Input text="Name" onChange={(e) => setName(e.target.value)} />

        {(displayType === 'text' || (displayType !== 'text' && !mediaOnly)) && (
            <div >
                <label className="text-base text-white/80 font-medium ">Content</label>
                <textarea
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-3 mt-4 rounded-md bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                    rows={4}
                    placeholder="Write something nice..."
                />
            </div>
        )}
        </div>

    );
};

export default TestimonialForm;
