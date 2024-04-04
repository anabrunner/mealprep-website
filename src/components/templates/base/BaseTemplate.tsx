import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

export function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <div className={styles.component}>{sampleTextProp}</div>;
}
