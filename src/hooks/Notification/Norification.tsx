import React, { useState } from "react";
import * as St from "./Notification.styles";

type Props = {
  children?: React.ReactNode;
};

export type NotificationType = {
  success: (value: string) => void;
  error: (value: string) => void;
};

const Ctx = React.createContext<NotificationType | null>(null);

export const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<React.ReactNode>();
  const [visible, setVisible] = useState(false);

  const notify = (n: React.ReactNode) => {
    if (visible) return;
    setNotification(n);
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  };

  const success = (value: string) => {
    notify(
      <>
        {value}
        <St.Yes />
      </>
    );
  };

  const error = (value: string) => {
    notify(
      <>
        {value}
        <St.No />
      </>
    );
  };

  return (
    <Ctx.Provider value={{ success, error }}>
      {children}
      <St.NotificationContainer $visible={visible}>
        <St.NotificationBox>{notification}</St.NotificationBox>
      </St.NotificationContainer>
    </Ctx.Provider>
  );
};

export const useNotification = () => React.useContext(Ctx);
