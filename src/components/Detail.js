import React from 'react';
import { Link } from 'react-router-dom';
import Flower2 from "./img/flower2.svg";
import ScrollProduct from './ScrollProduct';

const Detail = () => {
    return (

    <div className='flex flex-col'>

        <div className='flex flex-row'>
            <div>

            </div>

            <div className='flex flex-col'>
                <p>Classic Midnight Hand</p>
                <p>Bouquet - Fiery Red</p>
                <div className='flex flex-row'>

                    <p>5.0 from 300 review</p>
                </div>
                <hr></hr>
                <p className="line-through text-xs font-primaryFont "> Rp 100.000 (-25%) </p>
                <p>Rp 835.000</p>
                <hr></hr>
                <ul>Lovely Arrangement of Red Roses</ul>
                <ul>Decorated with Caspia and Baby Breath</ul>
                <ul>Wrapped in Grey Wrapping Paper,</ul>
                <ul>Matched with a Red Bow Symbolizes</ul>
                <ul>Love and Affection</ul>
                <p>Packaging</p>

                <div className='flex flex-row'>
                    <button>Default</button>
                    <button>Red</button>
                    <button>Blue</button>
                    <button>Green</button>
                </div>

                <hr></hr>

                <div>
                    <button></button>
                    <Link>Add to cart <span></span></Link>
                    <Link>Buy Now</Link>
                </div>
                
                

            </div>
        </div>

        <div className='flex flex-col'>
        
            <hr></hr>
            <p>Specification</p>

            <div className='flex flex-row'>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At turpis nunc tristique nibh egestas arcu, quis. Quis et ac lectus vitae bibendum. Faucibus vitae sapien sem congue purus dolor id donec. Nulla porta eget libero justo et egestas curabitur cum montes. Feugiat adipiscing odio molestie quam. Eget egestas morbi scelerisque turpis a tincidunt. At sit venenatis diam faucibus sed pulvinar dictum volutpat vulputate. Morbi morbi mattis mauris in ac sodales sed eget volutpat. Ac nunc maecenas placerat velit vitae. Tortor a suspendisse est at duis morbi. A, gravida turpis volutpat egestas eget dignissim justo, amet diam. Quam amet vitae leo nunc. Sit feugiat nulla in fringilla fames.A pharetra semper et eget. Ac scelerisque sapien neque venenatis magnis integer arcu. Nisl pretium, egestas adipiscing in in eget feugiat maecenas odio. Eros, faucibus pretium consequat consequat scelerisque netus ornare. Turpis in in ac tempor dui sit. In aliquam turpis imperdiet amet nisi, imperdiet. Vitae nisi, magna sagittis vel laoreet. In ullamcorper non sed eu pellentesque et amet condimentum pellentesque. Aenean pellentesque amet blandit ac duis. Sem bibendum eget commodo et orci viverra. Amet sit nisi lacinia rhoncus dignissim ac volutpat luctus nunc. Elementum sit rhoncus semper purus.Aliquet erat felis ultrices mauris gravida id egestas. At ac egestas cursus orci orci dictum eu. Cursus massa massa facilisis nisl. Lobortis porttitor purus nisi at cras. Nisl mauris, nunc cursus nibh suscipit arcu. Vel in semper odio id turpis nulla consectetur eu lacus. Dolor ipsum lorem risus pellentesque ut adipiscing convallis proin. Vestibulum erat nibh aliquam viverra.Vulputate sit nulla semper sit augue sem. Fermentum tortor quisque magna et ultrices turpis libero, augue. Nullam et nulla scelerisque laoreet justo. Sed tellus accumsan eget aliquam tristique erat dictum neque. Ut diam faucibus elementum amet vehicula nisi. Vel purus feugiat enim nunc tortor sit elit. Quisque est ultrices in sed adipiscing morbi rhoncus volutpat. Nulla morbi pellentesque id sit cursus.
                </p>

                <Link to="Detail.js" className='flex flex-col rounded-[10px] bg-customGray-100 mt-10 mr-4 hover:bg-brandpink-300 hover:text-white'>
                        <img src={Flower2}></img>

                        <div className='mx-auto'>
                            <p className='font-logoFont text-2xl'>Beautiful Red & Pink</p>
                            <p className='font-logoFont text-2xl '>Rose Hand Bouquet</p>
                            <p className="line-through text-xs font-primaryFont mt-6"> Rp 100.000 (-25%) </p>
                            <p className="font-primaryFont text-xl mb-6">Rp 75.000  </p>
                        </div>
                </Link>

                <hr></hr>


            </div>

        <ScrollProduct/>

        <hr></hr>

        

        </div>


    </div>

    );
}

export default Detail;