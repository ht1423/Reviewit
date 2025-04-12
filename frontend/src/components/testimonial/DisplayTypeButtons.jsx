import DisplayType from './DisplayType'

const DisplayTypeButtons = ({ handleClick, activeType }) => {
    const types = ['text', 'image', 'video'];

    return (
        <div className="flex justify-between gap-4">
            {types.map((type) => (
                <DisplayType
                    key={type}
                    displayType={type}
                    activeType={activeType}
                    onClick={() => handleClick(type)}
                />
            ))}
        </div>
    );
};

export default DisplayTypeButtons
