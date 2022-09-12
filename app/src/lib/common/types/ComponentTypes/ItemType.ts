export interface ItemPropsType extends Description, TextRisingSpeed {
  redirectURL?: string;
  src?: string;
  isTextRising?: boolean;
}

interface Description {
  title?: string;
  description?: string;
}

interface TextRisingSpeed {
  textRisingSpeed?: number;
}

export interface ItemDescriptionWrapperStyledPropsType extends TextRisingSpeed {
  top: number;
}

export interface ItemDescriptionPropsType extends Description, ItemDescriptionWrapperStyledPropsType {}
