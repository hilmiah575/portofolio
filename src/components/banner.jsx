import { TypeAnimation } from 'react-type-animation';

export default function Banner(){
    return <div id="home" 
    className="section container mx-auto max-w-[1200px] px-3 items-center">
    <div className="w-full">
      <div className='block text-center font-secondary font-black text-[30px]'>
        Hallo,I am
        <div>
    <TypeAnimation
      sequence={[
        
        "HILMIAH",
        3000, 
        '12 RPL 1',
        3000,
        'SMKN 6 JEMBER',
        3000,
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="ml-3 text-secondary"
    />
    {/* <div className='max-w-[750px] text-center mx-auto mt-5'>
          Saya remaja berusia 18 tahun.Saya seorang siswi dari SMKN 6 JEMBER 
          program keahlian software engineering
      </div> */}
    </div>
      </div>
      </div>
      
         </div>
}
