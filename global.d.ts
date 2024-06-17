export interface HeadingBase {
  level: string;
  id: string;
  textContent: string;
}

export interface HeadingH6 extends HeadingBase {
  level: 'h6';
  nestedH6?: HeadingH6[];
}

export interface HeadingH5 extends HeadingBase {
  level: 'h5';
  nestedH6?: HeadingH6[];
}

export interface HeadingH4 extends HeadingBase {
  level: 'h4';
  nestedH5?: HeadingH5[];
}

export interface HeadingH3 extends HeadingBase {
  level: 'h3';
  nestedH4?: HeadingH4[];
}

export interface HeadingH2 extends HeadingBase {
  level: 'h2';
  nestedH3?: HeadingH3[];
}

export type Heading = HeadingH2 | HeadingH3 | HeadingH4 | HeadingH5 | HeadingH6;

export type HeadingsArray = HeadingH2[];
