import React from "react";

export default function Profile(){
    return (
    <div id="profile" className="section">
        <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
            <div className="font-bold font-secondary text-center mb-12">
                <h4 className="text-secondary mb-3">tentang saya </h4>
                <div className='max-w-[750px] text-center mx-auto mt-5'>
          Saya seorang perempuan milenial berusia 18 tahun.Saya seorang siswi dari SMKN 6 JEMBER 
          program keahlian software engineering.
      </div>
      
                <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
                   
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
                    <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overlow-hidden">
                        <img src="/images/profile.png" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}
