import styles from './styles.module.scss';

interface buttonProps {
  onClick: (e: any) => void;
  text: string;
}

export function DownloadButton({ onClick, text }: buttonProps) {
  return (
    <div>
      <button onClick={onClick} className={styles.donwloadButton}>{text}</button>
    </div>
  )
}