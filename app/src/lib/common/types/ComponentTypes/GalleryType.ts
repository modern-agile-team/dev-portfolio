export interface GalleryPropsType {
  id?: string;
  padding?: string;
  children: React.ReactNode;
  col?: number;
  gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate';
}

export interface GalleryStyledPropsType {
  id?: string;
  padding?: string;
}

export interface GalleryItemWrapperStyledPropsType {
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate';
  gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
  col?: number;
}
