import React from 'react';
import Input from '../auth/Input';


const TestimonialForm = ({ setName, setContent, displayType, mediaOnly }) => {
    return (
        <div>

            <Input text="Name" onChange={(e) => setName(e.target.value)} />

            {(displayType === 'text' || (displayType !== 'text' && !mediaOnly)) && (
                <div>
                    <div>Content</div>
                    <textarea onChange={(e) => setContent(e.target.value)} className="border w-full p-2 mt-4"></textarea>
                </div>
            )}

            
        </div>
    );
};

export default TestimonialForm;
