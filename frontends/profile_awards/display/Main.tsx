import { Cemjsx, Fn, Static, front, Ref } from 'cemjs-all';
import Award from './Award';
import AwardsSwiper from './AwardsSwiper';
import type { ServerResponse } from '..';

export default function () {
  return (
    <div class="wrapper w-full flex flex-wrap gap-6 justify-around my-5 ">
       
      { (Static.awards as ServerResponse).awards.map((awards) =>

          <AwardsSwiper awards={ awards } />  

      ) } 
      
    </div>
  );
}
