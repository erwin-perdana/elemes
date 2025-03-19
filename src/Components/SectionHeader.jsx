const SectionHeader = ({header, subHeader}) => {
    return ( 
        <div>
            <p className="text-[#333333] text-[38px] font-medium">{header}</p>
            <p className="text-[#8BAC3E] text-[38px] font-medium">{subHeader}</p>
        </div>
     );
}
 
export default SectionHeader;