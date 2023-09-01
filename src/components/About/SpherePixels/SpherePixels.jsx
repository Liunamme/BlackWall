import React from 'react'
import style from './SpherePixels.module.scss'
import sphere from '/assets/media/gif/About/sphere.gif';
import pixels from '/assets/media/other svg elements/About/pixels.svg';

const SpherePixels = ( {className} ) => {
  return (
    <div className={className}>
        <img src={sphere} alt=" " className={style.spherePixels_sphere}/>
        <img src={pixels} alt=" " className={style.spherePixels_pixels}/>
     </div>
  )
}

export default SpherePixels