import {useContext} from 'react';
import { Close } from "@mui/icons-material";
import {
  ErrorOutline,
  CheckCircleOutline,
  HelpOutline,
} from "@mui/icons-material";
import { ModalContext } from './context';
import styles from './index.module.css';

const icons = {
  alarm: <ErrorOutline htmlColor="#ef6d6d" />,
  success: <CheckCircleOutline htmlColor="#86df66" />,
  info: <HelpOutline />,
};

export const ModalHeader = ({ text, iconName }) => {
  const {onClose} = useContext(ModalContext);

  const icon = Object.keys(icons).includes(iconName)
    ? icons[iconName]
    : icons["info"];

  return (
    <div className={styles.header}>
      {icon}
      <span className={styles.headerText}>{text}</span>
      <Close onClick={onClose} className={styles.closeBtn} />
    </div>
  );
};
