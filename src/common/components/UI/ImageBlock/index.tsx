import { FC, ImgHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './imageblock.module.scss';


type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;               
  src: string;               
  variant?: 'rounded' | 'circle' | 'default'; 
};

const ImageBlock: FC<ImageProps> = ({ alt, src, variant = 'default', className, ...props }) => {
  return (
    <img
      className={cn(styles.image, styles[variant], className)} 
      src={src}
      alt={alt}
      {...props}  
    />
  );
};

export default ImageBlock;
