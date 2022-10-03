import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Tetris from "../../public/tetris.png";
import Trophy from "../../public/trophy.png";
import Image from "next/image";
import Router, { useRouter } from 'next/router';
const TestModals = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  
  
  return (
    /*
    <!-- Pin to bottom left corner -->
    <div class="relative h-32 w-32 ...">
    <div class="absolute bottom-0 left-0 h-16 w-16 ...">07
    </div>
    </div>
    */
    <div className="flex items-center relative h-64 w-32 ... mt-64 md:flex-row ">
      <div className="absolute bottom-10 left-0 h-0 w-30 ... flex gap-5 ">
        <button
          className="flex items-center justify-center h-48 gap-2 px-6 font-bold text-white rounded-md shadow outline-none bg-amber-500 active:bg-black hover:bg-black hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          게임을 시작해볼까? <AiFillFire className="text-xl" />
        </button>
        {/* <button
          className="flex items-center justify-center h-12 gap-2 px-6 font-bold text-gray-800 border border-blue-100 rounded-md outline-none hover:text-white active:bg-black hover:bg-black hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button> */}
      </div>
      
      
      
      {showModal ? (
       
        <div className="flex flex-row items-center justify-center h-10 p-8 mt-20 rounded-lg shadow-xl w-208">
          <Image src={Tetris} width={50} height={50} objectFit="contain" />
          <h2 className="mx-4 mt-2 text-base font-semibold text-center text-gray-400">
            테트리스 게임!!
          </h2>
          <button
            className="w-auto h-10 px-10 my-10 font-semibold text-white rounded-md shadow bg-neutral-400 hover:shadow-lg"
            onClick={() => { setShowModal(false)
            // Router.push("http://localhost:9002/")  // 이쪽이 URL 주소 넣기
            window.open('http://localhost:9002/', 'popUpWindow', 'width=1000, height=1200')
            }}> Start  </button>
        </div>
      ) : null}
      {showSecondModal ? (
        <div className="flex flex-col items-center justify-center w-1/2 h-auto p-2 mt-10 rounded-lg shadow-xl">
          <Image src={Trophy} width={100} height={100} objectFit="contain" />
          <h2 className="mx-8 mt-4 text-base font-semibold text-center text-gray-200">
            오목을 두자!!
          </h2>
          
          <div className="flex gap-5">
            <button
              className="w-auto h-10 px-8 my-5 font-semibold text-white bg-blue-600 rounded-md shadow hover:shadow-lg"
              onClick={() => {setShowSecondModal(false)
              Router.push("/")}}
            >
              Start
            </button>
            {/* <button
              className="w-auto h-10 px-12 my-5 font-semibold text-red-600 border border-red-100 rounded-md hover:bg-red-700 hover:text-white hover:shadow-lg"
              onClick={() => setShowSecondModal(false)}
            >
              Close
            </button> */}
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default TestModals