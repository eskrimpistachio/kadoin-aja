import React from 'react';
import LineMask2 from "./img/linemask2.svg" ;
import Flower2 from "./img/flower2.svg";

const Product = () => {
    return (
    <>
        <div className="bg-black flex flex-row">
            <img src={LineMask2}></img>

            <div className= "bg-black absolute z-40 my-10 py-20 px-8 w-full">
                <p className='font-logoFont text-white text-6xl text-center'>Having a hard time <span className='text-brandpink-300'>Choosing a gift?</span></p>
                <p className='font-primaryFont text-white text-3xl text-center my-10'>Fill this and we’ll do it for you!</p>

                <div className='flex flex-row bg-brandpink-100 rounded-[10px] justify-around py-2'>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>For Who?</label>
                        <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                            <option>

                            </option>
                        </select>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>Whats the occasion?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>Whats their characteristic?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>How old are they?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>
                        

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>How much is your budget?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>

                </div>
                <button className='text-white font-primaryFont px-10 py-4 bg-brandpink-300  hover:text-brandpink-300 hover:bg-white rounded-[10px] mt-12 ml-half'>
                    Search
                </button> 
            </div>


        </div>

        <div className='flex flex-row bg-brandpink-100'>
           
            <div className='flex flex-col'>
                <div className='flex flex-row mb-10'>
                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                        
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                        
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    
                </div>

                <div className='flex flex-row mb-10'>
                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                        
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                        
                    </button>

                    
                </div>

                <div className='flex flex-row mb-10'>
                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                        
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    <button className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                    </button>

                    
                </div>

            </div>
            
            
        </div> 
    </> 
    
    );
}
export default Product;