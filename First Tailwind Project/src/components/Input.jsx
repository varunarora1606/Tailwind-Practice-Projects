export const Input = ({
    onChange,
    type,
    placeholder,
    value
}) => {
    return <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="bg-white/10 rounded-lg px-4 h-10 w-64 text-xs placeholder-white placeholder-opacity-20"/>
}