export interface GalleryPropsType extends GalleryStyledPropsType, GalleryItemWrapperStyledPropsType {
  children: React.ReactNode;
}

export interface GalleryStyledPropsType {
  id?: string;
  padding?: string;
}

export interface GalleryItemWrapperStyledPropsType {
  theme?: GalleryThemeType;
  gap?: GalleryGapType;
  col?: number;
}

type GalleryThemeType = 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate';
type GalleryGapType = 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
