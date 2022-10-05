interface InputGroupProps {
    type: string;
    placeholder: string;
}

const InputGroup = ({ type, placeholder }: InputGroupProps) => {
    return (
        <div className="input-group rounded-[4px] mt-4 border border-[gray] text-green-500">
            <input
                className={"bg-transparent px-3 py-1.5 w-full"}
                type={type}
                placeholder={placeholder}
                // value={300}
            />
        </div>
    );
};

export default InputGroup;
