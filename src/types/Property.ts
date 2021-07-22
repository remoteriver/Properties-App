export interface Property {
  id: number;
  price: string;
  agency: Agency;
  mainImage: string;
  disabled?: boolean;
}

export interface Agency {
  brandingColors: BrandingColor;
  logo: string;
}

export interface BrandingColor {
  primary: string;
}
