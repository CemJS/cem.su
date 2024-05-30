import { Cemjsx, Fn, Static, front, Ref } from 'cemjs-all';
import Award from './Award';
import Swiper from './Swiper';
import type { ServerResponse } from '..';


const Test1 = function(t1,t2,t3){
  console.log('=457d38=',t1,t2,t3)
return (
  <div>11111111111111</div>
)
}

export default function () {
  return (
    <div class="wrapper">
      <Test1
      i={1}>
<div>22222</div>
      </Test1>
      {/* <Swiper>asd</Swiper> */}
      {/* { (Static.awards as ServerResponse).awards.map((awards) => <div>asd</div>
          // console.log(el)
          //  <Award icon={ el.icon } title={ el.title } description={ el.description } reward={ el.reward } progress={ el.progress } maxProgress={ el.maxProgress } />
        
      ) } */}
      
    </div>
  );
}
