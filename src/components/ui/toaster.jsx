"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { IonIcon } from "@ionic/react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider className="p-0">
      {toasts.map(function ({
        id,
        title,
        status,
        description,
        icon,
        action,
        ...props
      }) {
        return status?.toString().startsWith("2") ? (
          <Toast
            key={id}
            className="min-h-[66px] min-w-[244px] bg-[#44444F99] py-0 px-2 shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]"
            {...props}
          >
            <div className="flex gap-x-1">
              {icon && (
                <div>
                  <IonIcon icon={icon} className="h-5 w-5 text-white"></IonIcon>
                </div>
              )}
              <div className="flex flex-col justify-center">
                {title && (
                  <ToastTitle className="font-roboto text-xs font-semibold text-white">
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className="font-roboto text-[10px] font-normal text-white opacity-100">
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F0F0] text-[#44444F99] opacity-100" />
          </Toast>
        ) : (
          // status?.toString().startsWith("4") && 
          (
            <Toast
              key={id}
              className="min-h-[66px] min-w-[244px] border border-[#D7586B] py-0 shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]"
              {...props}
            >
              <div className="flex gap-x-1">
                {icon && (
                  <div>
                    <IonIcon
                      icon={icon}
                      className="h-5 w-5 text-grisHeading"
                    ></IonIcon>
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  {title && (
                    <ToastTitle className="font-roboto text-xs font-semibold text-grisHeading">
                      {title}
                    </ToastTitle>
                  )}
                  {description && (
                    <ToastDescription className="font-roboto text-[10px] font-normal text-grisHeading opacity-100">
                      {description}
                    </ToastDescription>
                  )}
                </div>
              </div>
              {action}
              <ToastClose className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9D9D9] text-white opacity-100" />
            </Toast>
          )
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
