const SectionHeader = ({header, subHeader}) => {
    return ( 
        <div>
            <p className="text-[#333333] md:text-[38px] text-[24px] font-medium">{header}</p>
            <p className="text-[#8BAC3E] md:text-[38px] text-[24px] font-medium">{subHeader}</p>
        </div>
     );
}
 
export default SectionHeader;