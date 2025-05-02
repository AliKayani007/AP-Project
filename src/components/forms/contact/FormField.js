const FormField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
      <div className="flex flex-col w-full">
        <label className="text-base md:text-lg text-white mb-2">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-16 w-full rounded-xl bg-white/10 px-4 text-white placeholder-[#6B7274] outline-none"
        />
      </div>
    );
  };
  
  export default FormField;
  