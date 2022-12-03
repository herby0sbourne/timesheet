interface InputGroupProps {
    name: string;
    type: string;
    placeholder: string;
}

const InputGroup = ({ name, type, placeholder }: InputGroupProps) => {
    return (
        <div className="input-group rounded-[4px] mt-4 border border-[gray] text-green-500">
            <input
                className={"bg-transparent px-3 py-1.5 w-full"}
                type={type}
                name={name}
                placeholder={placeholder}
                // value={300}
            />
        </div>
    );
};

export default InputGroup;
