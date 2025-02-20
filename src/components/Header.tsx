function Header() {
  return (
    <div className="w-full  flex flex-col items-center">
    <div className='relative w-[440px] h-[217px]'>
      {/* Background container */}
      <div className='absolute inset-0 bg-[#E8CF8F]'>
        {/* Curved white overlay */}
        <div
          className='absolute bottom-0 w-full h-[87px] bg-white'
          style={{
            borderTopLeftRadius: "440px 190px",
            borderTopRightRadius: "440px 190px",
          }}
        />
      </div>

      {/* userのicon Imageタグあとでいれる */}
      <div className='absolute left-1/2 top-[59%] -translate-x-1/2 -translate-y-1/2 z-20 w-[175px] h-[175px] rounded-full bg-gray-200' />
    </div>
    </div>
  );
}

export default Header;
